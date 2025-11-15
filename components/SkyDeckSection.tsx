// components/SkyDeckSection.tsx
import Image from "next/image";
import { images } from "@/lib/media";

const features = [
  {
    title: "Amazing pool with canal views",
    description:
      "Swim at the edge of the skyline while ships glide through the Panama Canal below, surrounded by light and open skies.",
  },
  {
    title: "Rooftop lounge & social areas",
    description:
      "Host intimate gatherings, sunset cocktails and memorable celebrations in beautifully designed lounge and dining spaces.",
  },
  {
    title: "Wellness & relaxation spaces",
    description:
      "Spaces conceived for grounding rituals, quiet reflection and even small-scale horticulture, gently recharging your body and mind.",
  },
];

export default function SkyDeckSection() {
  return (
    <section
      id="sky-deck"
      className="section-bg-alt py-16 sm:py-20 lg:py-24"
    >
      <div className="container-max grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-xs font-semibold tracking-[0.28em] text-palash-forest/80">
            SKY DECK · POOL · ROOFTOP
          </p>

          <h2 className="font-display text-3xl leading-tight text-palash-ink sm:text-4xl lg:text-[2.6rem]">
            The Sky Deck and Pool: Your Elevated Oasis Above Panama Canal
          </h2>

          <p className="text-sm leading-relaxed text-palash-ink/80 sm:text-base">
            Ascend to the pinnacle of Palash Tower and discover The Sky pool
            and deck, an exclusive rooftop retreat designed for ultimate
            relaxation, sophisticated entertaining, and invigorating wellness.
            From here everything looks beautiful, an unparalleled panorama of
            the iconic Panama Canal stretching to the horizon, the vibrant
            cityscape, and the serene lushness of the surrounding forest.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl bg-white/90 p-4 shadow-soft-lg"
              >
                <h3 className="text-sm font-semibold text-palash-ink">
                  {feature.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-palash-ink/80">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Solo foto, sin video */}
        <div className="relative h-64 w-full sm:h-80 lg:h-full">
          <Image
            src={images.skydeck.amenities}
            alt="Sky Deck amenities at Palash Tower"
            fill
            className="rounded-3xl border border-palash-sand/40 object-cover shadow-soft-lg"
            sizes="(min-width: 1024px) 480px, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
