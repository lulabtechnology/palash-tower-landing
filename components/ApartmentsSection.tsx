// components/ApartmentsSection.tsx
import Image from "next/image";
import { images } from "@/lib/media";

export default function ApartmentsSection() {
  return (
    <section
      id="apartments"
      className="section-bg py-16 sm:py-20 lg:py-24"
    >
      <div className="container-max space-y-10">
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-semibold tracking-[0.28em] text-palash-forest/80">
            APARTMENTS · MODEL A & B
          </p>
          <h2 className="font-display text-3xl leading-tight text-palash-ink sm:text-4xl">
            Your Private Sanctuary: Views That Inspire, Design That Delights.
          </h2>
          <p className="text-sm leading-relaxed text-palash-ink/80 sm:text-base">
            Mediterranean-inspired residences designed with carefully framed
            views, natural light and privacy in mind. Choose between panoramic
            city and Canal vistas or a serene forest reserve backdrop, all
            within a contemporary tower that feels both exclusive and warm.
          </p>
        </div>

        <div className="space-y-10">
          {/* Model A */}
          <div className="grid gap-8 rounded-3xl bg-white/90 p-6 shadow-soft-lg lg:grid-cols-2">
            <div className="space-y-3">
              <h3 className="font-display text-2xl text-palash-ink">
                Model A: The Iconic Panorama – City & Canal Views
              </h3>
              <p className="text-sm leading-relaxed text-palash-ink/80 sm:text-base">
                Wake up to breathtaking sunrises over the bustling city and the
                majestic Panama Canal, a spectacle that truly defines
                sophisticated urban living.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <ApartmentImage
                src={images.modelA.floorplan}
                alt="Model A floorplan at Palash Tower"
                label="Model A floorplan"
              />
              <ApartmentImage
                src={images.modelA.viewCanal}
                alt="Model A view towards Panama Canal and city"
                label="City & Canal view"
              />
            </div>
          </div>

          {/* Model B */}
          <div className="grid gap-8 rounded-3xl bg-white/90 p-6 shadow-soft-lg lg:grid-cols-2 lg:flex-row-reverse lg:[&>div:first-child]:order-2">
            <div className="space-y-3">
              <h3 className="font-display text-2xl text-palash-ink">
                Model B: Nature&apos;s Retreat – Forest Reserve & Serene Greens
              </h3>
              <p className="text-sm leading-relaxed text-palash-ink/80 sm:text-base">
                Find tranquility and privacy as you overlook the untouched
                beauty of the forest reserve, a peaceful escape from the city&apos;s
                hustle, right from your living room.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <ApartmentImage
                src={images.modelB.floorplan}
                alt="Model B floorplan at Palash Tower"
                label="Model B floorplan"
              />
              <ApartmentImage
                src={images.modelB.forestView}
                alt="Model B view towards forest reserve"
                label="Forest reserve view"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type ApartmentImageProps = {
  src: string;
  alt: string;
  label: string;
};

function ApartmentImage({ src, alt, label }: ApartmentImageProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative h-40 w-full overflow-hidden rounded-2xl border border-palash-sand/40 bg-palash-cream">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 260px, 50vw"
        />
      </div>
      <p className="text-xs font-medium uppercase tracking-wide text-palash-ink/70">
        {label}
      </p>
    </div>
  );
}
