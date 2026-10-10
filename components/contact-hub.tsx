"use client";

import { useState } from "react";
import { Mail, Linkedin, Github, Send, Copy, Check, ArrowUpRight } from "lucide-react";
import { WindowFrame } from "@/components/window-frame";

export function ContactHub() {
  const [copied, setCopied] = useState(false);
  const [topic, setTopic] = useState("EPC_SCHEDULING");
  const [clientName, setClientName] = useState("");
  const [clientOrg, setClientOrg] = useState("");
  const [message, setMessage] = useState("");

  const email = "e.suryahadi@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getTopicSubject = () => {
    switch (topic) {
      case "EPC_SCHEDULING":
        return "[Inquiry] EPC Project Scheduling & Kurvaup Integration";
      case "LAKEHOUSE_BIGDATA":
        return "[Inquiry] Big Data Lakehouse & DuckDB Out-of-Core Architecture";
      case "AI_AGENTS":
        return "[Inquiry] AI Autonomous Agents & Industrial Automation";
      default:
        return "[Inquiry] Heavy Industry Tech Advisory / Consulting";
    }
  };

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    getTopicSubject()
  )}&body=${encodeURIComponent(
    `From: ${clientName || "[Your Name]"}\nOrganization: ${clientOrg || "[Your Company/Organization]"}\n\nProject Scope:\n${message || "We are interested in discussing an engineering collaboration/consulting project."}`
  )}`;

  return (
    <section id="contact" className="border-b border-white/[0.08] bg-[#08090A] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="border-b border-white/[0.06] pb-8">
          <div className="inline-flex items-center gap-1.5 font-mono text-[11px] text-zinc-400 uppercase tracking-wider">
            <span>ENGAGEMENT // DIRECT ACCESS</span>
          </div>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Let’s Build High-Impact Industrial Systems
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-400">
            Available for select consulting engagements, data engine architecture design, EPC scheduling systems,
            and custom AI agent deployments. Direct interaction with the technical lead.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left: Verified Channels Bento */}
          <div className="space-y-4">
            <WindowFrame
              title="Verified Coordinates"
              url="contact://eko-suryahadi/direct"
              badge="VERIFIED LEAD"
            >
              <div className="space-y-4 font-sans">
                {/* Email Pill */}
                <div className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.02] p-3.5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-amber-400">
                      <Mail className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-[10px] font-mono text-zinc-400">PRIMARY EMAIL</div>
                      <div className="font-mono text-xs font-semibold text-white">{email}</div>
                    </div>
                  </div>

                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 rounded-full border border-white/[0.12] bg-white/[0.04] px-3.5 py-1.5 text-xs text-zinc-200 transition-all hover:bg-white/[0.08] hover:text-white"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3 w-3 text-emerald-400" />
                        <span className="text-emerald-400 font-medium">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Verified Links */}
                <div className="grid grid-cols-2 gap-2 font-sans">
                  <a
                    href="https://www.linkedin.com/in/ekosuryahadi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.02] p-3 text-xs text-zinc-300 transition-all hover:border-white/20 hover:text-white"
                  >
                    <div className="flex items-center gap-2">
                      <Linkedin className="h-4 w-4 text-cyan-400" />
                      <span>LinkedIn Profile</span>
                    </div>
                    <ArrowUpRight className="h-3.5 w-3.5 text-zinc-500" />
                  </a>

                  <a
                    href="https://github.com/EkoSuryaHadi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.02] p-3 text-xs text-zinc-300 transition-all hover:border-white/20 hover:text-white"
                  >
                    <div className="flex items-center gap-2">
                      <Github className="h-4 w-4 text-zinc-300" />
                      <span>GitHub Repos</span>
                    </div>
                    <ArrowUpRight className="h-3.5 w-3.5 text-zinc-500" />
                  </a>
                </div>
              </div>
            </WindowFrame>

            {/* Principles */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0E1013] p-5 text-xs text-zinc-400 leading-relaxed font-mono">
              <div className="text-white font-semibold mb-2">ENGAGEMENT DIRECTIVES:</div>
              <div>• Direct communication with the technical lead (no sales layer).</div>
              <div className="mt-1.5">• High-velocity prototyping with verified production benchmarks.</div>
              <div className="mt-1.5">• Deep alignment with industrial regulatory frameworks (ESDM/OSHA/EVM).</div>
            </div>
          </div>

          {/* Right: Structured Contextual Form Window */}
          <WindowFrame
            title="Inquiry Dispatcher"
            url="client://session/new-inquiry"
            badge="PRIORITY DISPATCH"
          >
            <div className="space-y-4 text-xs font-mono">
              {/* Focus Domain Chips */}
              <div>
                <label className="text-zinc-400 font-sans">Select Project Scope:</label>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {[
                    { id: "EPC_SCHEDULING", label: "EPC Scheduling / Kurvaup" },
                    { id: "LAKEHOUSE_BIGDATA", label: "Lakehouse / DuckDB Engine" },
                    { id: "AI_AGENTS", label: "AI Autonomous Agents" },
                    { id: "GENERAL", label: "General Industrial Advisory" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setTopic(item.id)}
                      className={`rounded-full px-3.5 py-1.5 transition-all ${
                        topic === item.id
                          ? "bg-white font-semibold text-zinc-950 shadow-md"
                          : "border border-white/[0.08] bg-white/[0.03] text-zinc-400 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Org */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <label className="text-zinc-400 font-sans">Your Name / Title:</label>
                  <input
                    type="text"
                    placeholder="e.g. Ir. Hendra / VP of Engineering"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-white/[0.08] bg-white/[0.02] p-2.5 text-white placeholder-zinc-600 transition-all focus:border-white/20 focus:bg-white/[0.04] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-zinc-400 font-sans">Company / Organization:</label>
                  <input
                    type="text"
                    placeholder="e.g. Energy Resources Ltd"
                    value={clientOrg}
                    onChange={(e) => setClientOrg(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-white/[0.08] bg-white/[0.02] p-2.5 text-white placeholder-zinc-600 transition-all focus:border-white/20 focus:bg-white/[0.04] focus:outline-none"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-zinc-400 font-sans">Project Challenge or Scope:</label>
                <textarea
                  rows={4}
                  placeholder="Describe your data volume, scheduling bottlenecks, or systems architecture requirement..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-white/[0.08] bg-white/[0.02] p-2.5 text-white placeholder-zinc-600 transition-all focus:border-white/20 focus:bg-white/[0.04] focus:outline-none"
                />
              </div>

              {/* Trigger */}
              <a
                href={mailtoLink}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-white py-3.5 font-semibold text-zinc-950 transition-all hover:bg-zinc-200 shadow-xl"
              >
                <Send className="h-3.5 w-3.5" />
                <span>Launch Direct Email Inquiry</span>
              </a>
            </div>
          </WindowFrame>
        </div>
      </div>
    </section>
  );
}
