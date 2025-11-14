import VideoPlayer from "./VideoPlayer";
import { images, videos } from "@/lib/media";

export default function LocationSection() {
  return (
    <section
      id="location"
      className="bg-gradient-to-b from-palash.forest/90 to-slate-950 py-20 sm:py-24"
    >
      <div className="container-max section-fade space-y-12">
        <header className="max-w-3xl">
          <h2 className="font-display text-3xl sm:text-4xl text-palash.sand mb-4">
            Ubicación y Actividades: &quot;El Corazón de Panamá a Tus Pies&quot;
          </h2>
          <p className="text-slate-200">
            Explora el entorno: cultura, naturaleza y ocio cerca de ti. Palash
            Tower se ubica en un punto privilegiado que conecta el Canal de
            Panamá, la naturaleza y los destinos más emblemáticos de la ciudad.
          </p>
        </header>

        {/* Mapa interactivo + Tucán */}
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div className="space-y-4">
            {/* MAPA INTERACTIVO GOOGLE MAPS */}
            <div className="relative h-72 overflow-hidden rounded-3xl bg-slate-900 shadow-soft-lg">
              <iframe
                title="Palash Tower Location Map"
                src="https://www.google.com/maps?q=Tucan+Country+Club+Panama&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
              />
              {/* Overlay suave arriba para que se vea elegante, pero sin bloquear interactividad */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Tucan+Country+Club+Panama"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-palash.sand px-4 py-2 text-xs font-semibold uppercase tracking-wide text-palash.ocean shadow-soft-lg hover:bg-palash.sandLight"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>

            <div className="rounded-3xl bg-black/20 p-5 shadow-soft-lg">
              <h3 className="font-display text-xl text-palash.sand mb-2">
                Tucán Country Club &amp; Resort
              </h3>
              <p className="text-sm text-slate-200">
                Tucán Country Club &amp; Resort: Just minutes away, Palash Tower
                residents enjoy access and special benefits to this prestigious
                golf course, spa, and restaurants – the perfect place to relax,
                play and connect with nature.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-xl text-palash.sand">
              Actividades para Turistas
            </h3>
            <ul className="space-y-3 text-sm text-slate-200">
              <li>
                <span className="font-semibold">
                  Senderismo y Observación de Aves:
                </span>{" "}
                reservas naturales y biodiversidad únicas alrededor del Canal.
              </li>
              <li>
                <span className="font-semibold">Deportes Acuáticos:</span>{" "}
                playa Veracruz, Amador; paddleboarding, kayak, visitas al
                archipiélago de las Perlas, snorkeling, whale watching, pesca
                deportiva y más.
              </li>
              <li>
                <span className="font-semibold">Ciclismo escénico:</span>{" "}
                rutas con vistas al Canal y a la ciudad.
              </li>
              <li>
                <span className="font-semibold">Exploración Gastronómica:</span>{" "}
                alta cocina dentro y fuera de Tucán, con una mezcla de sabores
                locales e internacionales.
              </li>
            </ul>
          </div>
        </div>

        {/* Sitios turísticos en tarjetas */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {touristCards.map((card) => (
            <article
              key={card.title}
              className="rounded-3xl bg-black/25 p-5 shadow-soft-lg"
            >
              <h4 className="font-display text-lg text-palash.sand mb-2">
                {card.title}
              </h4>
              <p className="text-sm text-slate-200">{card.description}</p>
            </article>
          ))}
        </div>

        {/* Video de entorno */}
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <VideoPlayer
            src={videos.locationExperiences}
            poster={images.location.experiencesPoster}
            title="Location Experiences – Canal, city and nature"
          />
          <p className="text-sm text-slate-200">
            Desde el Casco Antiguo y el Canal de Panamá hasta el Causeway de
            Amador, Cerro Ancón, Panamá Pacífico y las playas de Veracruz,
            Palash Tower te sitúa en un punto estratégico para vivir tanto la
            historia como el futuro de la ciudad, con escapadas de fin de semana
            al mar y a la naturaleza a pocos minutos de casa.
          </p>
        </div>
      </div>
    </section>
  );
}

const touristCards = [
  {
    title: "Casco Antiguo",
    description:
      "Sumérgete en la historia y la cultura del Casco Antiguo de Panamá, Patrimonio de la Humanidad por la UNESCO, con sus plazas coloniales, restaurantes gourmet y vibrante vida nocturna."
  },
  {
    title: "Canal de Panamá (Esclusas de Miraflores)",
    description:
      "Una maravilla de la ingeniería moderna, las Esclusas de Miraflores ofrecen una experiencia inolvidable para observar los barcos transitar el famoso Canal de Panamá."
  },
  {
    title: "Cerro Ancón",
    description:
      "Disfruta de vistas panorámicas de la ciudad y el Canal desde este icónico mirador natural, rodeado de fauna y flora local."
  },
  {
    title: "Amador Causeway",
    description:
      "Un paseo escénico ideal para caminar, andar en bicicleta o disfrutar de restaurantes con vistas al canal y al skyline de la ciudad."
  },
  {
    title: "Panamá Pacífico",
    description:
      "Panamá Pacífico: un hub en crecimiento para negocios, educación y vida residencial, con escuelas internacionales, parques y centros comerciales."
  },
  {
    title: "Veracruz",
    description:
      "Veracruz: playas cercanas perfectas para escapadas de fin de semana, mariscos frescos y un ambiente relajado frente al mar."
  }
];
