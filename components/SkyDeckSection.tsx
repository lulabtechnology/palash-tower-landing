import Image from "next/image";
import VideoPlayer from "./VideoPlayer";
import { images, videos } from "@/lib/media";

export default function SkyDeckSection() {
  return (
    <section
      id="sky-deck"
      className="bg-gradient-to-b from-palash-sandLight to-palash-cream py-20 sm:py-24"
    >
      <div className="container-max section-fade">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl text-palash-ocean mb-5">
              The Sky Deck and Pool: Your Elevated Oasis Above Panama Canal
            </h2>
            <p className="mb-5 text-sm sm:text-base text-slate-700">
              Ascend to the pinnacle of Palash Tower and discover The Sky pool
              and deck, an exclusive rooftop retreat designed for ultimate
              relaxation, sophisticated entertaining, and invigorating wellness.
              From here everything looks beautiful, an unparalleled panorama of
              the iconic Panama Canal stretching to the horizon, the vibrant
              cityscape, and the serene lushness of the surrounding forest.
            </p>

            <ul className="grid gap-3 text-sm text-slate-800 sm:grid-cols-2">
              <li className="rounded-2xl bg-white/80 px-4 py-3 shadow-soft-lg">
                <span className="font-semibold text-palash-ocean">
                  Infinity pool with canal views
                </span>
                <p className="mt-1 text-slate-700">
                  Swim at the edge of the skyline while ships glide through the
                  Canal below.
                </p>
              </li>
              <li className="rounded-2xl bg-white/80 px-4 py-3 shadow-soft-lg">
                <span className="font-semibold text-palash-ocean">
                  Rooftop lounge &amp; social areas
                </span>
                <p className="mt-1 text-slate-700">
                  Host intimate gatherings, sunset cocktails and memorable
                  celebrations.
                </p>
              </li>
              <li className="rounded-2xl bg-white/80 px-4 py-3 shadow-soft-lg">
                <span className="font-semibold text-palash-ocean">
                  Wellness &amp; relaxation spaces
                </span>
                <p className="mt-1 text-slate-700">
                  Spaces conceived for yoga, meditation and recharging your
                  body and mind.
                </p>
              </li>
            </ul>
          </div>

          <div className="space-y-5">
            <figure className="relative h-52 overflow-hidden rounded-3xl bg-palash-sandLight/60 shadow-soft-lg">
              <Image
                src={images.skydeck.amenities}
                alt="Sky Deck amenities"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </figure>

            <VideoPlayer
              src={videos.skydeckPoolTour}
              poster={images.skydeck.videoPoster}
              title="Sky Deck & Pool – Rooftop Experience"
              autoPlayDesktopOnly
            />
          </div>
        </div>
      </div>
    </section>
  );
}
