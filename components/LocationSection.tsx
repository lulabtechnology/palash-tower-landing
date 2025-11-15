// components/LocationSection.tsx
import Image from "next/image";
import { images } from "@/lib/media";

const nearbySpots = [
  {
    key: "cascoAntiguo" as const,
    title: "Casco Antiguo",
    description:
      "Immerse yourself in the history and culture of Casco Antiguo, a UNESCO World Heritage Site with colonial plazas, gourmet restaurants and a vibrant nightlife.",
  },
  {
    key: "canalMiraflores" as const,
    title: "Panama Canal (Miraflores Locks)",
    description:
      "A marvel of modern engineering, the Miraflores Locks offer an unforgettable experience watching ships transit the world-famous Panama Canal.",
  },
  {
    key: "cerroAncon" as const,
    title: "Cerro Ancón",
    description:
      "Enjoy panoramic views of the city and the Canal from this iconic natural lookout, surrounded by local flora and fauna.",
  },
  {
    key: "amadorCauseway" as const,
    title: "Amador Causeway",
    description:
      "A scenic waterfront road ideal for walking, biking or dining at restaurants with views of the Canal and the city skyline.",
  },
  {
    key: "panamaPacifico" as const,
    title: "Panamá Pacífico",
    description:
      "A growing hub for business, education and residential life, with international schools, parks and modern commercial centers.",
  },
  {
    key: "veracruz" as const,
    title: "Veracruz",
    description:
      "Nearby beaches perfect for weekend getaways, fresh seafood and a relaxed oceanfront atmosphere.",
  },
];

const buyerActivities = [
  "Hiking & birdwatching in nearby natural reserves.",
  "Water sports in Veracruz and Amador: paddleboarding, kayaking, boat trips to the Pearl Islands, snorkeling, whale watching and sport fishing.",
  "Cycling along scenic routes with Canal and city views.",
  "Gastronomic experiences: fine dining inside and outside Tucán Country Club & Resort.",
];

export default function LocationSection() {
  return (
    <section
      id="location"
      className="section-bg-alt py-16 sm:py-20 lg:py-24"
    >
      <div className="container-max space-y-12">
        {/* Header + mapa */}
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div className="space-y-4">
            <p className="text-xs font-semibold tracking-[0.28em] text-palash-forest/80">
              LOCATION & EXPERIENCES
            </p>
            <h2 className="font-display text-3xl leading-tight text-palash-ink sm:text-4xl">
              Location & Activities: &quot;The Heart of Panama at Your Feet&quot;
            </h2>
            <p className="text-sm leading-relaxed text-palash-ink/80 sm:text-base">
              Explore the surroundings: culture, nature and leisure all around
              you. Palash Tower sits in a privileged spot that connects the
              Panama Canal, a preserved natural environment and Panama City&apos;s
              most emblematic destinations.
            </p>

            <div className="space-y-3">
              <h3 className="font-display text-xl text-palash-ink">
                Tucán Country Club &amp; Resort
              </h3>
              <p className="text-sm leading-relaxed text-palash-ink/80 sm:text-base">
                Just minutes away, Palash Tower residents enjoy access and
                special benefits to Tucán Country Club &amp; Resort – a
                prestigious golf course, spa and restaurant complex, ideal for
                relaxing, playing and connecting with nature.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-palash-ink">
                Activities for residents &amp; guests
              </h4>
              <ul className="space-y-1 text-sm text-palash-ink/80">
                {buyerActivities.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-[6px] h-[6px] w-[6px] rounded-full bg-palash-forest/70" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mapa + botón */}
          <div className="space-y-3">
            <div className="overflow-hidden rounded-3xl border border-palash-sand/60 shadow-soft-lg">
              <iframe
                title="Map – Palash Tower and Tucán Country Club & Resort"
                src="https://www.google.com/maps?q=Tuc%C3%A1n+Country+Club+%26+Resort+Panama&output=embed"
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Tuc%C3%A1n+Country+Club+%26+Resort+Panama"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-palash-forest px-6 py-3 text-xs font-semibold uppercase tracking-wide text-palash-sand shadow-soft-lg transition hover:bg-palash-forestLight"
            >
              Open in Google Maps
            </a>
          </div>
        </div>

        {/* Tarjetas de sitios turísticos con imagen dentro del recuadro blanco */}
        <div className="space-y-5">
          <h3 className="font-display text-2xl text-palash-ink">
            Nearby highlights
          </h3>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {nearbySpots.map((spot) => (
              <article
                key={spot.title}
                className="flex flex-col overflow-hidden rounded-3xl bg-white/95 shadow-soft-lg"
              >
                <div className="relative h-32 w-full">
                  <Image
                    src={images.location.spots[spot.key]}
                    alt={spot.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1280px) 260px, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="space-y-2 p-4">
                  <h4 className="font-semibold text-palash-ink">
                    {spot.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-palash-ink/80 sm:text-sm">
                    {spot.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
