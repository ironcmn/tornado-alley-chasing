"use client";

import { useState } from "react";
import { EMAIL } from "../content";

// The original site has no backend we can reuse, so the form opens a
// pre-filled email to David — same destination as the site's booking flow.
export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Booking inquiry from ${name}`);
    const body = encodeURIComponent(`${comment}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  const field =
    "w-full rounded-lg border border-line bg-foreground/[0.04] px-4 py-3 text-sm placeholder:text-muted focus:border-accent focus:outline-none";

  return (
    <form onSubmit={submit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name *"
          aria-label="Name"
          className={field}
        />
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email *"
          aria-label="Email"
          className={field}
        />
      </div>
      <textarea
        required
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Comment *"
        aria-label="Comment"
        rows={5}
        className={field}
      />
      <button
        type="submit"
        className="self-start rounded-full bg-accent px-8 py-3 font-semibold text-background transition-transform hover:scale-105"
      >
        Submit
      </button>
    </form>
  );
}
