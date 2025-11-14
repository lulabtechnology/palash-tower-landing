import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950/95">
      <div className="container-max flex flex-col items-center justify-between gap-3 py-6 text-xs text-slate-400 sm:flex-row">
        <p>© {year} Palash Tower. All rights reserved.</p>
        <p className="text-[11px]">
          Canal views, nature and modern Mediterranean design in the heart of
          Panama.
        </p>
        <div className="flex items-center gap-4">
          <Link href="#contact" className="hover:text-palash.sandLight">
            Schedule a viewing
          </Link>
          <Link href="/gallery" className="hover:text-palash.sandLight">
            View gallery
          </Link>
        </div>
      </div>
    </footer>
  );
}
