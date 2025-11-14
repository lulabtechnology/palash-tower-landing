import VideoPlayer from "@/components/VideoPlayer";
import { images, videos } from "@/lib/media";
import Image from "next/image";

export default function GalleryPage() {
  return (
    <div className="pb-16 pt-28">
      <section className="container-max section-fade">
        <header className="mb-10 text-center">
          <h1 className="font-display text-4xl sm:text-5xl text-palash.sand mb-4">
            Palash Tower Gallery
          </h1>
          <p className="max-w-2xl mx-auto text-slate-300">
            Explore curated visuals of Palash Tower&apos;s apartments, Sky Deck,
            and surrounding experiences – designed to immerse you in the unique
            blend of canal views, nature and modern Mediterranean design.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="font-display text-2xl text-palash.sand">
              Signature Videos
            </h2>
            <div className="space-y-6">
              <VideoPlayer
                src={videos.heroSunsetCanal}
                poster={images.heroSunsetExterior}
                title="Hero – Panama Canal Sunset"
                autoPlayDesktopOnly
              />
              <VideoPlayer
                src={videos.modelAApartmentTour}
                poster={images.modelA.videoPoster}
                title="Model A – Apartment Tour"
              />
              <VideoPlayer
                src={videos.modelBApartmentTour}
                poster={images.modelB.videoPoster}
                title="Model B – Apartment Tour"
              />
              <VideoPlayer
                src={videos.skydeckPoolTour}
                poster={images.skydeck.videoPoster}
                title="Sky Deck & Pool"
              />
              <VideoPlayer
                src={videos.locationExperiences}
                poster={images.location.experiencesPoster}
                title="Location & Experiences"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl text-palash.sand">
              Atmosphere & Details
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <figure className="relative overflow-hidden rounded-3xl bg-palash.forest shadow-soft-lg">
                <div className="relative h-56">
                  <Image
                    src={images.modelA.viewCanal}
                    alt="Model A – City and canal views"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="p-4 text-sm text-slate-200">
                  Model A – Iconic panorama over the city and Panama Canal.
                </figcaption>
              </figure>

              <figure className="relative overflow-hidden rounded-3xl bg-palash.forest shadow-soft-lg">
                <div className="relative h-56">
                  <Image
                    src={images.modelB.forestView}
                    alt="Model B – Forest reserve and serene greens"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="p-4 text-sm text-slate-200">
                  Model B – Overlooking the forest reserve and lush greenery.
                </figcaption>
              </figure>

              <figure className="relative overflow-hidden rounded-3xl bg-palash.forest shadow-soft-lg sm:col-span-2">
                <div className="relative h-64">
                  <Image
                    src={images.skydeck.amenities}
                    alt="Sky Deck amenities"
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="p-4 text-sm text-slate-200">
                  The Sky Deck – Infinity pool, lounge areas and wellness
                  spaces above the Panama Canal.
                </figcaption>
              </figure>

              <figure className="relative overflow-hidden rounded-3xl bg-palash.ocean shadow-soft-lg sm:col-span-2">
                <div className="relative h-64">
                  <Image
                    src={images.location.map}
                    alt="Palash Tower location map"
                    fill
                    sizes="100vw"
                    className="object-cover opacity-80"
                  />
                </div>
                <figcaption className="p-4 text-sm text-slate-200">
                  A privileged location connecting the Canal, nature and the
                  best of Panama City.
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
