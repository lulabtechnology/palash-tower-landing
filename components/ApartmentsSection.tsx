import Image from "next/image";
import VideoPlayer from "./VideoPlayer";
import { images, videos } from "@/lib/media";

export default function ApartmentsSection() {
  return (
    <section
      id="apartments"
      className="bg-gradient-to-b from-palash-cream to-palash-sandLight py-20 sm:py-24"
    >
      <div className="container-max section-fade">
        <header className="mb-10 max-w-3xl">
          <h2 className="font-display text-3xl sm:text-4xl text-palash-ocean mb-4">
            Your Private Sanctuary: Views That Inspire, Design That Delights.
          </h2>
          <p className="text-sm sm:text-base text-slate-700">
            Two distinct apartment models, both infused with modern
            Mediterranean design, generous natural light and expansive views.
            Choose between the energy of the city and Canal, or the calming
            embrace of the forest reserve.
          </p>
        </header>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Model A */}
          <article className="space-y-5 rounded-3xl border border-palash-sand/50 bg-white/95 p-6 shadow-soft-lg">
            <h3 className="font-display text-2xl text-palash-ocean">
              Model A: The Iconic Panorama – City &amp; Canal Views
            </h3>
            <p className="text-sm text-slate-700">
              “Wake up to breathtaking sunrises over the bustling city and the
              majestic Panama Canal, a spectacle that truly defines
              sophisticated urban living.”
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <figure className="relative h-44 overflow-hidden rounded-2xl bg-palash-sandLight/60">
                <Image
                  src={images.modelA.floorplan}
                  alt="Model A floorplan"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </figure>

              <figure className="relative h-44 overflow-hidden rounded-2xl bg-palash-sandLight/60">
                <Image
                  src={images.modelA.viewCanal}
                  alt="Model A city & canal views"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </figure>
            </div>

            <VideoPlayer
              src={videos.modelAApartmentTour}
              poster={images.modelA.videoPoster}
              title="Model A – Apartment Tour"
              className="mt-3"
            />
          </article>

          {/* Model B */}
          <article className="space-y-5 rounded-3xl border border-palash-sand/50 bg-white/95 p-6 shadow-soft-lg">
            <h3 className="font-display text-2xl text-palash-ocean">
              Model B: Nature&apos;s Retreat – Forest Reserve &amp; Serene
              Greens
            </h3>
            <p className="text-sm text-slate-700">
              “Find tranquility and privacy as you overlook the untouched beauty
              of the forest reserve, a peaceful escape from the city&apos;s
              hustle, right from your living room.”
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <figure className="relative h-44 overflow-hidden rounded-2xl bg-palash-sandLight/60">
                <Image
                  src={images.modelB.floorplan}
                  alt="Model B floorplan"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </figure>

              <figure className="relative h-44 overflow-hidden rounded-2xl bg-palash-sandLight/60">
                <Image
                  src={images.modelB.forestView}
                  alt="Model B forest reserve views"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </figure>
            </div>

            <VideoPlayer
              src={videos.modelBApartmentTour}
              poster={images.modelB.videoPoster}
              title="Model B – Apartment Tour"
              className="mt-3"
            />
          </article>
        </div>
      </div>
    </section>
  );
}
