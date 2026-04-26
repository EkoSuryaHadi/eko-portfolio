"use client";

import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Section } from "@/components/section";
import { SlideLeft, SlideRight } from "@/components/motion";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactClient() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      industry: (form.elements.namedItem("industry") as HTMLSelectElement).value,
      brief: (form.elements.namedItem("brief") as HTMLTextAreaElement).value,
      budget: (form.elements.namedItem("budget") as HTMLSelectElement).value,
      timeline: (form.elements.namedItem("timeline") as HTMLSelectElement).value
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      const json = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(json.error || "I could not send the message. Please try again or email me directly.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMsg("The message could not be sent because the connection failed. Please try again or email me directly.");
    }
  }

  return (
    <Section className="pt-20 pb-20">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SlideLeft>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-tealLight">Contact</p>
            <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">Bring a real analytics problem. I&apos;ll help shape the solution.</h1>
            <p className="mt-5 text-lg leading-8 text-white/65">Send the decision you need to improve, the data you already have, and the timeline you are working toward. I&apos;ll reply with practical next steps.</p>

            <div className="mt-8 space-y-4 text-white/70">
              <a href="tel:+6281911821355" className="flex items-center gap-3 transition hover:text-tealLight">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal/10">
                  <Phone className="h-5 w-5 text-tealLight" />
                </div>
                081911821355
              </a>
              <a href="mailto:e.suryahadi@gmail.com" className="flex items-center gap-3 transition hover:text-tealLight">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal/10">
                  <Mail className="h-5 w-5 text-tealLight" />
                </div>
                e.suryahadi@gmail.com
              </a>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal/10">
                  <MapPin className="h-5 w-5 text-tealLight" />
                </div>
                Balikpapan, Indonesia - Remote worldwide
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-success/30 bg-success/10 p-4 text-success">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-success pulse-live" /> Currently available for new analytics projects
            </div>
          </div>
        </SlideLeft>

        <SlideRight>
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex h-full flex-col items-center justify-center rounded-3xl border border-success/30 bg-success/5 p-8 text-center"
              >
                <CheckCircle className="h-16 w-16 text-success" />
                <h2 className="mt-6 text-2xl font-bold text-white">Message sent</h2>
                <p className="mt-3 max-w-md text-white/65">Thanks for the context. I&apos;ll review the problem, data, and timeline, then respond within 24 hours.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-8 rounded-lg border border-tealLight/50 px-6 py-3 text-sm font-semibold text-tealLight transition hover:bg-tealLight/10"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onSubmit={handleSubmit}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Your name" name="name" required />
                  <Field label="Work email" name="email" type="email" required />
                  <Field label="Company or project" name="company" />
                  <label className="block text-sm text-white/70">Industry
                    <select name="industry" className="mt-2 w-full rounded-xl border border-white/10 bg-navy2 px-4 py-3 text-white outline-none transition focus:border-tealLight focus:ring-1 focus:ring-tealLight/30">
                      <option>Oil &amp; Gas</option><option>EPC</option><option>Construction</option><option>Other</option>
                    </select>
                  </label>
                </div>
                <label className="mt-5 block text-sm text-white/70">Project brief
                  <textarea required minLength={50} name="brief" rows={6} className="mt-2 w-full rounded-xl border border-white/10 bg-navy2 px-4 py-3 text-white outline-none transition focus:border-tealLight focus:ring-1 focus:ring-tealLight/30" placeholder="Example: We need earlier warning on EPC schedule delays. Data is in P6, Excel, and weekly progress reports. Target timeline is 6-8 weeks." />
                </label>
                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm text-white/70">Budget range
                    <select name="budget" className="mt-2 w-full rounded-xl border border-white/10 bg-navy2 px-4 py-3 text-white outline-none transition focus:border-tealLight focus:ring-1 focus:ring-tealLight/30">
                      <option>Let&apos;s discuss</option><option>&lt; $5K</option><option>$5K-$15K</option><option>$15K-$50K</option><option>&gt; $50K</option>
                    </select>
                  </label>
                  <label className="block text-sm text-white/70">Timeline
                    <select name="timeline" className="mt-2 w-full rounded-xl border border-white/10 bg-navy2 px-4 py-3 text-white outline-none transition focus:border-tealLight focus:ring-1 focus:ring-tealLight/30">
                      <option>ASAP</option><option>1-3 months</option><option>3-6 months</option><option>Flexible</option>
                    </select>
                  </label>
                </div>

                <AnimatePresence>
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400"
                    >
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      {errorMsg}
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={cn(
                    "mt-7 flex w-full items-center justify-center gap-2 rounded-lg bg-teal px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.01] hover:bg-tealLight disabled:opacity-60 disabled:hover:scale-100"
                  )}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending message...
                    </>
                  ) : (
                    "Send project inquiry"
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </SlideRight>
      </div>
    </Section>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="block text-sm text-white/70">{label}
      <input name={name} type={type} required={required} className="mt-2 w-full rounded-xl border border-white/10 bg-navy2 px-4 py-3 text-white outline-none transition focus:border-tealLight focus:ring-1 focus:ring-tealLight/30" />
    </label>
  );
}
