"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type VideoPlayerProps = {
  src: string;
  poster?: string;
  title?: string;
  autoPlayDesktopOnly?: boolean;
  className?: string;
};

export default function VideoPlayer({
  src,
  poster,
  title,
  autoPlayDesktopOnly = false,
  className
}: VideoPlayerProps) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Consideramos desktop cuando el ancho es >= 1024px (tailwind lg)
    setIsDesktop(window.innerWidth >= 1024);
  }, []);

  const shouldAutoplay = autoPlayDesktopOnly && isDesktop;

  return (
    <div
      className={`relative overflow-hidden rounded-3xl bg-black/60 shadow-soft-lg ${className ?? ""}`}
    >
      <div className="relative aspect-video w-full">
        {/* Capa visual con el poster, para que se vea bonito antes de reproducir */}
        {poster && (
          <Image
            src={poster}
            alt={title ?? "Video thumbnail"}
            fill
            sizes="100vw"
            className="pointer-events-none object-cover opacity-40"
          />
        )}

        <video
          className="relative z-10 h-full w-full rounded-3xl object-cover"
          controls
          playsInline
          autoPlay={shouldAutoplay}
          muted={shouldAutoplay}
          loop={shouldAutoplay}
          poster={poster}
        >
          <source src={src} />
          Your browser does not support the video tag.
        </video>

        {title && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/70 via-black/10 to-transparent p-4">
            <p className="text-sm font-medium text-palash.sandLight">
              {title}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
