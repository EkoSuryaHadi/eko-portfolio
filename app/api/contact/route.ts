import { NextResponse } from "next/server";

const MIN_BRIEF_LENGTH = 50;

type ContactPayload = {
  name: string;
  email: string;
  company: string;
  industry: string;
  brief: string;
  budget: string;
  timeline: string;
};

function getText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function line(label: string, value: string) {
  return `<p><strong>${label}:</strong> ${escapeHtml(value || "N/A")}</p>`;
}

function buildEmailHtml(payload: ContactPayload) {
  return [
    "<h1>New portfolio inquiry</h1>",
    line("Name", payload.name),
    line("Email", payload.email),
    line("Company / Project", payload.company),
    line("Industry", payload.industry),
    line("Budget", payload.budget),
    line("Timeline", payload.timeline),
    "<hr />",
    "<h2>Project Brief</h2>",
    `<p>${escapeHtml(payload.brief).replace(/\n/g, "<br />")}</p>`
  ].join("");
}

function buildEmailText(payload: ContactPayload) {
  return [
    "New portfolio inquiry",
    "",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Company / Project: ${payload.company || "N/A"}`,
    `Industry: ${payload.industry || "N/A"}`,
    `Budget: ${payload.budget || "N/A"}`,
    `Timeline: ${payload.timeline || "N/A"}`,
    "",
    "Project Brief:",
    payload.brief
  ].join("\n");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const payload: ContactPayload = {
      name: getText(body.name),
      email: getText(body.email),
      company: getText(body.company),
      industry: getText(body.industry),
      brief: getText(body.brief),
      budget: getText(body.budget),
      timeline: getText(body.timeline)
    };

    if (payload.name.length < 2) {
      return NextResponse.json({ error: "Please enter your name with at least 2 characters." }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      return NextResponse.json({ error: "Please enter a valid work email address, like name@company.com." }, { status: 400 });
    }
    if (payload.brief.length < MIN_BRIEF_LENGTH) {
      return NextResponse.json(
        { error: `Please add a project brief with at least ${MIN_BRIEF_LENGTH} characters so I can understand the problem.` },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const contactToEmail = process.env.CONTACT_TO_EMAIL;
    const contactFromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!resendApiKey || !contactToEmail || !contactFromEmail) {
      return NextResponse.json(
        { error: "The contact form is not configured yet. Please email me directly at e.suryahadi@gmail.com." },
        { status: 503 }
      );
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: contactFromEmail,
        to: contactToEmail.split(",").map((email) => email.trim()).filter(Boolean),
        reply_to: payload.email,
        subject: `New portfolio inquiry from ${payload.name}`,
        html: buildEmailHtml(payload),
        text: buildEmailText(payload)
      })
    });

    if (!response.ok) {
      console.error("Resend email request failed.", { status: response.status });
      return NextResponse.json(
        { error: "The message could not be sent. Please try again or email me directly at e.suryahadi@gmail.com." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Thanks. I received your inquiry and will respond within 24 hours."
    });
  } catch (error) {
    console.error("Contact form request failed.", error);
    return NextResponse.json(
      { error: "Something went wrong while sending the message. Please try again or email me directly at e.suryahadi@gmail.com." },
      { status: 500 }
    );
  }
}
