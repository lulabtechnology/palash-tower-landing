// components/TestimonialsSection.tsx
import Image from "next/image";
import { images } from "@/lib/media";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  photo?: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Lukasz D.",
    role: "Entrepreneur & Resident",
    quote:
      "As an entrepreneur and a family man, safety and nature were my top priorities. At Palash Tower, we have it all. The fresh air is incredible, it's perfect for kids, and the views of the Panama Canal are simply spectacular. An excellent place to grow and live!",
    
  },
  {
    name: "Claudia N.",
    role: "Entrepreneur & Resident",
    quote:
      "Palash Tower is my sanctuary. I love the peace and tranquility here; it's a safe haven where everyone is so kind. Waking up to the lush forest reserve views every day is a dream come true. In short, Palash Tower is my ideal home!",
    // 👉 sin photo: no avatar, solo nombre + texto
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="residents"
      className="section-bg py-16 sm:py-20 lg:py-24"
    >
      <div className="container-max space-y-10">
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-semibold tracking-[0.28em] text-palash-forest/80">
            RESIDENT STORIES
          </p>
          <h2 className="font-display text-3xl leading-tight text-palash-ink sm:text-4xl">
            Listen to our residents and join the community.
          </h2>
          <p className="text-sm leading-relaxed text-palash-ink/80 sm:text-base">
            Real stories from people who chose to live between the Canal, nature
            and contemporary Mediterranean-inspired design that define Palash
            Tower.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex h-full flex-col gap-3 rounded-3xl bg-white/95 p-5 shadow-soft-lg"
            >
              <div className="flex items-center gap-3">
                {testimonial.photo && (
                  <div className="relative h-10 w-10 overflow-hidden rounded-full border border-palash-sand/60 bg-palash-cream">
                    <Image
                      src={testimonial.photo}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                )}
                <div className="space-y-0.5">
                  <p className="text-sm font-semibold text-palash-ink">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-palash-ink/70">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-palash-ink/80">
                {testimonial.quote}
              </p>
            </article>
          ))}
        </div>

        <div className="text-center">
          <p className="font-display text-lg italic text-palash-forest">
            “The most secure and green place in Panama.”
          </p>
        </div>
      </div>
    </section>
  );
}
