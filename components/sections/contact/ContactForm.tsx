"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "@/components/ui/icons";
import { validateContact, type ContactInput } from "@/lib/validation";

const subjects = [
  "General Inquiry",
  "Quote Request",
  "Partnership",
  "Other",
];

const empty: ContactInput = {
  name: "",
  email: "",
  phone: "",
  subject: "General Inquiry",
  message: "",
};

export function ContactForm() {
  const [data, setData] = useState<ContactInput>(empty);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle",
  );

  const set =
    (k: keyof ContactInput) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) =>
      setData((d) => ({ ...d, [k]: e.target.value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = validateContact(data);
    setErrors(result.errors);
    if (!result.valid) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("done");
      setData(empty);
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center rounded-[var(--radius-card)] border border-success/30 bg-success/10 p-12 text-center"
      >
        <span className="grid h-16 w-16 place-items-center rounded-full bg-success text-white">
          <Check className="h-8 w-8" strokeWidth={3} />
        </span>
        <h3 className="mt-6 text-2xl font-extrabold text-navy">
          Message sent.
        </h3>
        <p className="mt-3 max-w-sm text-muted">
          Thanks for reaching out — a member of the Lumirise team will get back
          to you shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-[var(--radius-card)] border border-divider bg-white p-7 sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.name} required>
          <input
            className={input}
            value={data.name}
            onChange={set("name")}
            autoComplete="name"
          />
        </Field>
        <Field label="Email" error={errors.email} required>
          <input
            type="email"
            className={input}
            value={data.email}
            onChange={set("email")}
            autoComplete="email"
          />
        </Field>
        <Field label="Phone">
          <input
            className={input}
            value={data.phone}
            onChange={set("phone")}
            autoComplete="tel"
          />
        </Field>
        <Field label="Subject">
          <select
            className={input}
            value={data.subject}
            onChange={set("subject")}
          >
            {subjects.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </Field>
        <div className="sm:col-span-2">
          <Field label="Message" error={errors.message} required>
            <textarea
              rows={5}
              className={`${input} resize-none`}
              value={data.message}
              onChange={set("message")}
            />
          </Field>
        </div>
      </div>

      {status === "error" && (
        <p className="mt-5 text-sm font-semibold text-red-600">
          Something went wrong. Please call or email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-[15px] font-semibold text-navy transition-colors hover:bg-gold-bright disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  );
}

const input =
  "w-full rounded-xl border border-divider bg-cream px-4 py-3 text-[15px] text-navy outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/30 min-h-12";

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-navy">
        {label}
        {required && <span className="text-gold"> *</span>}
      </span>
      {children}
      {error && (
        <span className="mt-1.5 block text-xs font-medium text-red-600">
          {error}
        </span>
      )}
    </label>
  );
}
