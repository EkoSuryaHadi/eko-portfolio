"use client";

import { AlertTriangle, RefreshCw } from "lucide-react";

export default function Error({
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto flex min-h-[70vh] w-full max-w-7xl flex-col items-center justify-center px-5 py-20 text-center sm:px-8 lg:px-10">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber/30 bg-amber/10">
        <AlertTriangle className="h-7 w-7 text-amber" />
      </div>
      <p className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-tealLight">Something went wrong</p>
      <h1 className="mt-3 text-4xl font-bold text-white">This page hit an unexpected error.</h1>
      <p className="mt-4 max-w-xl text-white/65">
        Please try again. If the issue continues, you can still reach me from the contact page or by email.
      </p>
      <button
        onClick={reset}
        className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-teal px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.02] hover:bg-tealLight"
      >
        <RefreshCw className="h-4 w-4" />
        Try Again
      </button>
    </div>
  );
}
