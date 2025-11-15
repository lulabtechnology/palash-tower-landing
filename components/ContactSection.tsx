// components/ContactSection.tsx
"use client";

import { FormEvent, useState } from "react";

const buyerIntentOptions = [
  "I'm a broker",
  "I have bank approval",
  "Paying in cash",
  "Buying for a friend",
  "Planning to buy in 3 months",
  "Just browsing",
  "Looking to invest",
  "Selling a property",
  "First-time buyer",
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log("Palash Tower inquiry", Object.fromEntries(formData.entries()));
    setSubmitted(true);
    event.currentTarget.reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      className="section-bg-alt py-16 sm:py-20 lg:py-24"
    >
      <div className="container-max grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
        <div className="space-y-4">
          <p className="text-xs font-semibold tracking-[0.28em] text-palash-forest/80">
            PRIVATE VIEWING
          </p>
          <h2 className="font-display text-3xl leading-tight text-palash-ink sm:text-4xl">
            Schedule a private viewing and experience Palash Tower for yourself.
          </h2>
          <p className="text-sm leading-relaxed text-palash-ink/80 sm:text-base">
            Share a few details about your plans and we will contact you to
            coordinate a tailored visit to Palash Tower, based on your preferred
            apartment model, timing and buyer profile.
          </p>
          <p className="text-xs text-palash-ink/70">
            We respect your privacy. Your information will be used exclusively
            to follow up on your interest in Palash Tower.
          </p>
        </div>

        <div className="rounded-3xl bg-white/95 p-5 shadow-soft-lg sm:p-6">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wide text-palash-ink">
                  Name
                </label>
                <input
                  name="name"
                  required
                  className="form-input-palash"
                  placeholder="Your full name"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wide text-palash-ink">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="form-input-palash"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wide text-palash-ink">
                  Phone (optional)
                </label>
                <input
                  name="phone"
                  className="form-input-palash"
                  placeholder="+507 ..."
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wide text-palash-ink">
                  Preferred apartment model
                </label>
                <select
                  name="preferredModel"
                  className="form-input-palash"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="Model A">Model A</option>
                  <option value="Model B">Model B</option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </div>
            </div>

            {/* 🔑 Buyer Intent Options */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wide text-palash-ink">
                🔑 Buyer Intent Options
              </label>
              <p className="text-xs text-palash-ink/70">
                Select all that apply to your current situation.
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                {buyerIntentOptions.map((option) => (
                  <label
                    key={option}
                    className="flex cursor-pointer items-start gap-2 rounded-2xl border border-palash-sand/70 bg-palash-cream/60 px-3 py-2 text-xs leading-snug text-palash-ink/90 hover:border-palash-forest/70"
                  >
                    <input
                      type="checkbox"
                      name="buyerIntent"
                      value={option}
                      className="mt-[3px] h-4 w-4 rounded border-palash-sand/80 text-palash-forest focus:ring-palash-forest"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wide text-palash-ink">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                className="form-input-palash resize-none"
                placeholder="Tell us more about your plans, preferred dates to visit, or any questions you may have."
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-palash-forest px-6 py-3 text-xs font-semibold uppercase tracking-wide text-palash-sand shadow-soft-lg transition hover:bg-palash-forestLight"
            >
              Send Inquiry
            </button>

            {submitted && (
              <p className="pt-2 text-center text-xs text-palash-forest">
                Thank you! Your inquiry has been received. We will contact you
                shortly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
