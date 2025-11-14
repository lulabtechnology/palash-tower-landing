import VideoPlayer from "./VideoPlayer";
import { images, videos } from "@/lib/media";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] items-center pt-24 pb-16 lg:pt-32"
    >
      {/* Fondo degradado: océano + bosque → crema */}
      <div className="absolute inset-0 bg-gradient-to-br from-palash-ocean via-palash-forest/85 to-palash-cream" />

      <div className="container-max relative z-10 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center section-fade">
        <div className="space-y-6 text-white">
          <p className="inline-block rounded-full border border-palash-sand/70 bg-black/20 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-palash-sand">
            PALASH TOWER · PANAMA
          </p>

          <h1 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Palash Tower:{" "}
            <span className="text-palash-sand">
              Experience Panama&apos;s Best.
            </span>
            <br />
            Canal, Nature, and Modern Mediterranean Design.
          </h1>

          <p className="max-w-2xl text-sm sm:text-base text-palash-sandLight">
            Exclusive Living. Nature&apos;s Embrace. Panama&apos;s Prime
            Address. Wake up between the iconic Panama Canal, a preserved forest
            reserve and a contemporary Mediterranean-inspired tower that
            redefines luxury and serenity.
          </p>

          <p className="max-w-xl text-xs sm:text-sm text-palash-sandLight/90">
            From sunrise over the Canal to golden sunsets behind the forest,
            Palash Tower offers a rare mix of sophistication, privacy and
            immersive nature – just minutes away from the vibrant energy of
            Panama City.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#contact"
              className="rounded-full bg-palash-sand px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wide text-palash-ocean shadow-soft-lg transition hover:bg-palash-sandLight"
            >
              Book a Private Tour
            </a>
            <a
              href="#sky-deck"
              className="rounded-full border border-palash-sand/80 bg-transparent px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wide text-palash-sand transition hover:bg-white/10"
            >
              Watch Full Experience
            </a>
          </div>
        </div>

        <div className="lg:pl-4">
          <VideoPlayer
            src={videos.heroSunsetCanal}
            poster={images.heroSunsetExterior}
            title="Sunset over the Panama Canal – Palash Tower perspective"
            autoPlayDesktopOnly
          />
        </div>
      </div>
    </section>
  );
}
