import Image from "next/image";
import { images } from "@/lib/media";

const testimonials = [
  {
    name: "Lukasz D.",
    role: "Entrepreneur & Resident",
    image: images.testimonials.lukasz,
    quote:
      "As an entrepreneur and a family man, safety and nature were my top priorities. At Palash Tower, we have it all. The fresh air is incredible, it's perfect for kids, and the views of the Panama Canal are simply spectacular. An excellent place to grow and live!"
  },
  {
    name: "Klaudia N.",
    role: "Entrepreneur & Resident",
    image: images.testimonials.klaudia,
    quote:
      "Palash Tower is my sanctuary. I love the peace and tranquility here; it's a safe haven where everyone is so kind. Waking up to the lush forest reserve views every day is a dream come true. In short, Palash Tower is my ideal home!"
  }
];

export default function TestimonialsSection() {
  return (
    <section
      id="residents"
      className="bg-gradient-to-b from-slate-950 to-palash.ocean/85 py-20 sm:py-24"
    >
      <div className="container-max section-fade">
        <header className="mb-10 text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-palash.sand mb-4">
            &quot;Escucha a Nuestros Residents y Únete a la Comunidad&quot;.
          </h2>
          <p className="mx-auto max-w-2xl text-slate-200">
            Historias reales de quienes ya eligieron vivir entre el Canal, la
            naturaleza y el diseño mediterráneo contemporáneo que definen a
            Palash Tower.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="flex flex-col gap-4 rounded-3xl bg-black/20 p-6 shadow-soft-lg"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-full bg-slate-800">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-palash.sand">
                    {t.name}
                  </p>
                  <p className="text-xs text-slate-300">{t.role}</p>
                </div>
              </div>
              <p className="text-sm text-slate-100">{t.quote}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="font-display text-xl text-palash.sandLight">
            “The most secure and green place in Panama.”
          </p>
        </div>
      </div>
    </section>
  );
}
