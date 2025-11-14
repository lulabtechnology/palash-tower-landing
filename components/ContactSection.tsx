"use client";

import { FormEvent, useState } from "react";

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    console.log("Inquiry submitted from Palash Tower landing.");
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-palash-sandLight to-palash-cream py-20 sm:py-24"
    >
      <div className="container-max section-fade grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl text-palash-ocean mb-4">
            Schedule a private viewing and experience Palash Tower for yourself.
          </h2>
          <p className="mb-4 text-sm sm:text-base text-slate-700">
            We invite you to discover Palash Tower in person. Share your
            details and preferences, and our team will contact you to coordinate
            a private tour tailored to your ideal lifestyle.
          </p>
          <p className="text-xs sm:text-sm text-slate-700">
            Whether you are drawn to the Canal views or the forest reserve, we
            will help you find the apartment model that best aligns with your
            vision of home.
          </p>
        </div>

        <div className="rounded-3xl border border-palash-sand/60 bg-white/95 p-6 shadow-soft-lg">
          <form onSubmit={handleSubmit} className="space-y-4 text-sm">
            <div>
              <label
                htmlFor="name"
                className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-palash-ocean"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full rounded-xl border border-palash-sand/80 bg-palash-cream px-3 py-2 text-sm text-palash-ink outline-none focus:border-palash-ocean focus:ring-1 focus:ring-palash-ocean"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-palash-ocean"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-palash-sand/80 bg-palash-cream px-3 py-2 text-sm text-palash-ink outline-none focus:border-palash-ocean focus:ring-1 focus:ring-palash-ocean"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-palash-ocean"
              >
                Phone (optional)
              </label>
              <input
                id="phone"
                name="phone"
                className="w-full rounded-xl border border-palash-sand/80 bg-palash-cream px-3 py-2 text-sm text-palash-ink outline-none focus:border-palash-ocean focus:ring-1 focus:ring-palash-ocean"
                placeholder="+507 ..."
              />
            </div>

            <div>
              <label
                htmlFor="model"
                className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-palash-ocean"
              >
                Preferred apartment model
              </label>
              <select
                id="model"
                name="model"
                className="w-full rounded-xl border border-palash-sand/80 bg-palash-cream px-3 py-2 text-sm text-palash-ink outline-none focus:border-palash-ocean focus:ring-1 focus:ring-palash-ocean"
                defaultValue="not-sure"
              >
                <option value="model-a">Model A</option>
                <option value="model-b">Model B</option>
                <option value="not-sure">Not sure yet</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-palash-ocean"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-xl border border-palash-sand/80 bg-palash-cream px-3 py-2 text-sm text-palash-ink outline-none focus:border-palash-ocean focus:ring-1 focus:ring-palash-ocean"
                placeholder="Tell us about your ideal home, preferred move-in date or any specific questions."
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-full bg-palash-ocean px-4 py-3 text-xs font-semibold uppercase tracking-wide text-palash-sand shadow-soft-lg transition hover:bg-palash-oceanLight"
            >
              Send Inquiry
            </button>

            {sent && (
              <p className="pt-2 text-xs text-palash-forest">
                Thank you for your interest. Our team will reach out to you
                shortly to coordinate your private viewing.
              </p>
            )}

            <p className="pt-2 text-[10px] leading-snug text-slate-500">
              By submitting this form you agree that Palash Tower may contact
              you regarding this inquiry. Your information will be treated with
              confidentiality and used only for this purpose.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
