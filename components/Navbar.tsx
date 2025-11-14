"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/media";

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
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-md">
      <div className="container-max flex items-center justify-between py-3">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Go to Palash Tower homepage"
        >
          <div className="relative h-10 w-32 sm:h-12 sm:w-40">
            <Image
              src={images.logo}
              alt="Palash Tower logo"
              fill
              sizes="160px"
              className="object-contain"
              priority
            />
          </div>
          <span className="hidden text-sm font-semibold tracking-[0.2em] text-palash.sand sm:inline">
            PALASH TOWER
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-200 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.targetId}
              type="button"
              onClick={() => handleNavClick(link.targetId)}
              className="transition hover:text-palash.sandLight"
            >
              {link.label}
            </button>
          ))}
          <Link
            href="/gallery"
            className="rounded-full border border-palash.sand/70 bg-palash.forest px-4 py-2 text-xs uppercase tracking-wide text-palash.sand shadow-soft-lg transition hover:bg-palash.forestLight"
          >
            Gallery
          </Link>
        </nav>

        {/* Mobile button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-slate-700 p-2 text-slate-200 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <span className="sr-only">Open navigation</span>
          <div className="space-y-1">
            <span className="block h-[2px] w-5 bg-slate-200" />
            <span className="block h-[2px] w-5 bg-slate-200" />
            <span className="block h-[2px] w-5 bg-slate-200" />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-slate-800 bg-slate-950/95 md:hidden">
          <nav className="container-max flex flex-col gap-2 py-4 text-sm">
            {navLinks.map((link) => (
              <button
                key={link.targetId}
                type="button"
                onClick={() => handleNavClick(link.targetId)}
                className="w-full rounded-xl px-3 py-2 text-left text-slate-200 transition hover:bg-slate-900"
              >
                {link.label}
              </button>
            ))}
            <Link
              href="/gallery"
              className="mt-1 w-full rounded-xl border border-palash.sand/80 bg-palash.forest px-3 py-2 text-center text-xs uppercase tracking-wide text-palash.sand shadow-soft-lg transition hover:bg-palash.forestLight"
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
