"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "@/components/ui/icons";
import { validateQuote, type QuoteInput } from "@/lib/validation";

const cargoTypes = ["Container", "Fuel", "Dry Cargo", "Break-Bulk", "Other"];

const empty: QuoteInput = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  cargoType: "Container",
  origin: "",
  destination: "",
  weight: "",
  pickupDate: "",
  details: "",
};

export function QuoteForm() {
  const [data, setData] = useState<QuoteInput>(empty);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle",
  );

  const set =
    (k: keyof QuoteInput) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) =>
      setData((d) => ({ ...d, [k]: e.target.value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = validateQuote(data);
    setErrors(result.errors);
    if (!result.valid) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
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
          Request received.
        </h3>
        <p className="mt-3 max-w-sm text-muted">
          Thank you. A Lumirise logistics specialist will respond within one
          business day with a tailored quote.
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
        <Field label="Full name" error={errors.fullName} required>
          <input
            className={input}
            value={data.fullName}
            onChange={set("fullName")}
            autoComplete="name"
          />
        </Field>
        <Field label="Company name" error={errors.company} required>
          <input
            className={input}
            value={data.company}
            onChange={set("company")}
            autoComplete="organization"
          />
        </Field>
        <Field label="Email address" error={errors.email} required>
          <input
            type="email"
            className={input}
            value={data.email}
            onChange={set("email")}
            autoComplete="email"
          />
        </Field>
        <Field label="Phone number" error={errors.phone} required>
          <input
            className={input}
            value={data.phone}
            onChange={set("phone")}
            autoComplete="tel"
          />
        </Field>
        <Field label="Cargo type">
          <select
            className={input}
            value={data.cargoType}
            onChange={set("cargoType")}
          >
            {cargoTypes.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </Field>
        <Field label="Estimated weight or volume">
          <input
            className={input}
            value={data.weight}
            onChange={set("weight")}
            placeholder="e.g. 24 tonnes"
          />
        </Field>
        <Field label="Origin (city / port)" error={errors.origin} required>
          <input
            className={input}
            value={data.origin}
            onChange={set("origin")}
          />
        </Field>
        <Field
          label="Destination (city / country)"
          error={errors.destination}
          required
        >
          <input
            className={input}
            value={data.destination}
            onChange={set("destination")}
          />
        </Field>
        <Field label="Preferred pickup date">
          <input
            type="date"
            className={input}
            value={data.pickupDate}
            onChange={set("pickupDate")}
          />
        </Field>
        <div className="sm:col-span-2">
          <Field label="Additional details">
            <textarea
              rows={4}
              className={`${input} resize-none`}
              value={data.details}
              onChange={set("details")}
            />
          </Field>
        </div>
      </div>

      {status === "error" && (
        <p className="mt-5 text-sm font-semibold text-red-600">
          Something went wrong sending your request. Please call us instead.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-[15px] font-semibold text-navy transition-colors hover:bg-gold-bright disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Request My Quote"}
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
