"use client";

import { FormEvent, useState } from "react";
import { SectionLabel } from "@/components/SectionLabel";

type Status = "idle" | "loading" | "success" | "error";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong.");
        return;
      }

      setStatus("success");
      setMessage("You're subscribed — welcome aboard!");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <section id="newsletter" className="px-6 py-24">
      <div className="mx-auto max-w-2xl rounded-3xl border border-[var(--line)] bg-[var(--bg-elevated)] px-8 py-14 text-center sm:px-12">
        <div className="flex justify-center">
          <SectionLabel>Newsletter</SectionLabel>
        </div>
        <h2 className="font-serif text-3xl italic tracking-tight text-[var(--text)] sm:text-4xl">
          Stay ahead on AI &amp; Blockchain
        </h2>
        <p className="mt-4 text-[var(--muted)]">
          Get thoughtful analysis on AI governance, blockchain infrastructure,
          and the economics of digital transformation — written for project
          leaders, strategists, and researchers.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            disabled={status === "loading"}
            className="flex-1 rounded-full border border-[var(--line)] bg-[var(--bg)] px-5 py-3 text-sm text-[var(--text)] placeholder:text-[var(--dim)] outline-none transition-colors focus:border-[var(--accent)] disabled:opacity-50"
            aria-label="Email address"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-full bg-[var(--accent)] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-light)] disabled:opacity-50"
          >
            {status === "loading" ? "Subscribing…" : "Subscribe"}
          </button>
        </form>

        {message && (
          <p
            role="status"
            className={`mt-4 text-sm ${
              status === "success" ? "text-[var(--positive)]" : "text-[var(--negative)]"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </section>
  );
}
