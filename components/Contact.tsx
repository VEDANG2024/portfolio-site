"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { profile } from "@/lib/content";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="max-w-4xl mx-auto px-4 sm:px-6 py-14 border-t border-border-soft">
      <h2 className="font-display text-2xl mb-3">Get in touch</h2>
      <p className="text-sm text-text-secondary mb-8 flex items-center gap-2">
        <Mail className="w-4 h-4 text-accent" strokeWidth={1.75} />
        Or email me directly at{" "}
        <a href={`mailto:${profile.email}`} className="text-accent hover:underline">
          {profile.email}
        </a>
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm text-text-secondary">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="bg-bg-elevated border border-border rounded-lg px-3 py-2 text-sm outline-none focus:border-accent"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm text-text-secondary">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="bg-bg-elevated border border-border rounded-lg px-3 py-2 text-sm outline-none focus:border-accent"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className="text-sm text-text-secondary">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="bg-bg-elevated border border-border rounded-lg px-3 py-2 text-sm outline-none focus:border-accent resize-y"
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="self-start bg-accent hover:bg-accent-hover text-on-accent font-medium rounded-lg px-5 py-2.5 text-sm transition-colors disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>

        {status === "sent" && (
          <p className="text-sm text-accent">Thanks — your message is on its way.</p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-600">
            Something went wrong — try emailing directly instead.
          </p>
        )}
      </form>
    </section>
  );
}
