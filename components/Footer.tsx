import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-palash-sand/40 bg-palash-ocean text-palash-sandLight">
      <div className="container-max flex flex-col items-center justify-between gap-3 py-6 text-xs sm:flex-row">
        <p>© {year} Palash Tower. All rights reserved.</p>
        <p className="text-[11px]">
          Canal views, nature and modern Mediterranean design in the heart of
          Panama.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hover:text-palash-sand transition"
          >
            Schedule a viewing
          </a>
          <Link
            href="/gallery"
            className="hover:text-palash-sand transition"
          >
            View gallery
          </Link>
        </div>
      </div>
    </footer>
  );
}
