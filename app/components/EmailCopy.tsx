"use client";

import { useState } from "react";
import { EMAIL } from "../content";

// Keeps the mailto link as the primary action, but adds a copy-to-clipboard
// fallback with feedback so a missing/unconfigured mail client is never a
// dead end for a potential booking.
export default function EmailCopy({ className = "" }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      return;
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <a
        href={`mailto:${EMAIL}`}
        className="break-all text-accent transition-colors hover:text-[var(--amber-hot)]"
      >
        {EMAIL}
      </a>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? "Email address copied" : "Copy email address"}
        className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-line text-muted transition-colors hover:border-accent hover:text-accent"
      >
        {copied ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} className="h-3.5 w-3.5" aria-hidden>
            <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3.5 w-3.5" aria-hidden>
            <rect x="9" y="9" width="11" height="11" rx="2" />
            <path d="M5 15V5a2 2 0 0 1 2-2h10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>
      <span
        role="status"
        aria-live="polite"
        className={`text-[0.75rem] font-medium text-accent transition-opacity ${
          copied ? "opacity-100" : "opacity-0"
        }`}
      >
        Copied
      </span>
    </span>
  );
}
