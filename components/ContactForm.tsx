"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Status = "idle" | "submitting" | "success";

const cargoTypes = [
  "Dairy / Perishable",
  "Confectionery / Biscuits",
  "Cosmetics / Fragile",
  "General FMCG",
  "Other",
];

/**
 * Client-side enquiry form. Validates required fields, then hands off to the
 * user's mail client with a prefilled message (no backend required).
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    cargo: cargoTypes[0],
    message: "",
  });

  const update =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const subject = `Logistics enquiry — ${form.company || form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Company: ${form.company}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Cargo type: ${form.cargo}`,
      "",
      form.message,
    ].join("\n");

    // Brief delay for the success transition, then open mail client.
    window.setTimeout(() => {
      window.location.href = `mailto:protrans2025@gmail.com?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`;
      setStatus("success");
    }, 650);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-paper-line bg-white/50 p-7 sm:p-9">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex min-h-[420px] flex-col items-center justify-center text-center"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-signal/15">
              <svg
                className="h-8 w-8 text-signal"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 13l4 4L19 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="mt-6 font-display text-2xl font-800 tracking-tight text-ink">
              Message ready to send
            </h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink/55">
              We&apos;ve opened your email app with the details filled in. Prefer
              to call? Reach us any time on the numbers listed.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-8 rounded-full border border-paper-line px-6 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-signal hover:text-signal"
            >
              Send another
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={onSubmit}
            className="space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Full name"
                required
                value={form.name}
                onChange={update("name")}
                placeholder="Your name"
              />
              <Field
                label="Company"
                value={form.company}
                onChange={update("company")}
                placeholder="Brand / business"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Email"
                type="email"
                required
                value={form.email}
                onChange={update("email")}
                placeholder="you@company.com"
              />
              <Field
                label="Phone"
                type="tel"
                value={form.phone}
                onChange={update("phone")}
                placeholder="+91 00000 00000"
              />
            </div>

            <label className="block">
              <span className="mb-2 block font-mono text-[0.62rem] uppercase tracking-[0.18em] text-ink/50">
                Cargo type
              </span>
              <select
                value={form.cargo}
                onChange={update("cargo")}
                className="w-full rounded-xl border border-paper-line bg-white px-4 py-3.5 text-sm text-ink outline-none transition-colors duration-300 focus:border-signal"
              >
                {cargoTypes.map((c) => (
                  <option key={c} value={c} className="bg-paper">
                    {c}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block font-mono text-[0.62rem] uppercase tracking-[0.18em] text-ink/50">
                What do you need to move?
              </span>
              <textarea
                required
                value={form.message}
                onChange={update("message")}
                rows={4}
                placeholder="Tell us about your routes, timelines, and cargo…"
                className="w-full resize-none rounded-xl border border-paper-line bg-white px-4 py-3.5 text-sm text-ink placeholder:text-ink/30 outline-none transition-colors duration-300 focus:border-signal"
              />
            </label>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-signal px-7 py-4 text-sm font-semibold text-asphalt transition-transform duration-300 ease-smooth hover:scale-[1.01] disabled:opacity-70"
            >
              <span>
                {status === "submitting" ? "Preparing…" : "Send Enquiry"}
              </span>
              {status !== "submitting" && (
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M3 8h9M8 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-[0.62rem] uppercase tracking-[0.18em] text-ink/50">
        {label}
        {props.required && <span className="text-signal"> *</span>}
      </span>
      <input
        {...props}
        className="w-full rounded-xl border border-paper-line bg-white px-4 py-3.5 text-sm text-ink placeholder:text-ink/30 outline-none transition-colors duration-300 focus:border-signal"
      />
    </label>
  );
}
