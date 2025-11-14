"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", targetId: "home" },
  { label: "Apartments", targetId: "apartments" },
  { label: "Sky Deck", targetId: "sky-deck" },
  { label: "Location", targetId: "location" },
  { label: "Residents", targetId: "residents" },
  { label: "Contact", targetId: "contact" }
];

function scrollToSection(id: string) {
  if (typeof document === "undefined") return;
  const element = document.getElementById(id);
  if (!element) return;
  element.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNavClick = (targetId: string) => {
    scrollToSection(targetId);
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-palash-sand/40 bg-palash-cream/80 backdrop-blur-md">
      <div className="container-max flex items-center justify-between py-3">
        {/* YA NO HAY LOGO, SOLO TEXTO */}
        <button
          type="button"
          onClick={() => handleNavClick("home")}
          aria-label="Go to Palash Tower homepage"
          className="flex items-center"
        >
          <span className="text-[11px] font-semibold tracking-[0.28em] text-palash-forest">
            PALASH TOWER · PANAMA
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-[13px] font-medium text-palash-ink/80 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.targetId}
              type="button"
              onClick={() => handleNavClick(link.targetId)}
              className="transition hover:text-palash-oceanLight"
            >
              {link.label}
            </button>
          ))}
          <Link
            href="/gallery"
            className="rounded-full border border-palash-forest/50 bg-palash-forest px-4 py-2 text-xs uppercase tracking-wide text-palash-sand shadow-soft-lg transition hover:bg-palash-forestLight"
          >
            Gallery
          </Link>
        </nav>

        {/* Mobile button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-palash-forest/40 p-2 text-palash-ocean md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <span className="sr-only">Open navigation</span>
          <div className="space-y-1">
            <span className="block h-[2px] w-5 bg-palash-ocean" />
            <span className="block h-[2px] w-5 bg-palash-ocean" />
            <span className="block h-[2px] w-5 bg-palash-ocean" />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-palash-sand/40 bg-palash-cream md:hidden">
          <nav className="container-max flex flex-col gap-2 py-4 text-sm">
            {navLinks.map((link) => (
              <button
                key={link.targetId}
                type="button"
                onClick={() => handleNavClick(link.targetId)}
                className="w-full rounded-xl px-3 py-2 text-left text-palash-ink transition hover:bg-palash-sandLight/60"
              >
                {link.label}
              </button>
            ))}
            <Link
              href="/gallery"
              className="mt-1 w-full rounded-xl border border-palash-forest/50 bg-palash-forest px-3 py-2 text-center text-xs uppercase tracking-wide text-palash-sand shadow-soft-lg transition hover:bg-palash-forestLight"
              onClick={() => setOpen(false)}
            >
              Gallery
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
