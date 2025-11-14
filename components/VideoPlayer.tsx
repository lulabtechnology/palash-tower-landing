"use client";

import { useEffect, useState } from "react";

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
  className,
}: VideoPlayerProps) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      // >= 1024px (lg en Tailwind) lo consideramos desktop
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const shouldAutoplay = autoPlayDesktopOnly && isDesktop;

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-palash-sand/30 bg-palash-ink/70 shadow-soft-lg ${
        className ?? ""
      }`}
    >
      <video
        className="aspect-video w-full object-cover"
        src={src}
        poster={poster}
        controls
        playsInline
        autoPlay={shouldAutoplay}
        muted={shouldAutoplay}
        loop={shouldAutoplay}
      >
        Your browser does not support the video tag.
      </video>

      {title && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent px-4 pb-3 pt-10">
          <p className="text-sm font-medium text-palash-sand">{title}</p>
        </div>
      )}
    </div>
  );
}
