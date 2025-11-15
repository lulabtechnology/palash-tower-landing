// lib/media.ts

export const images = {
  // Logo principal en el hero
  logo: "/images/logo-palash-tower.png",

  // Hero – fondo / poster del video
  heroSunsetExterior: "/images/hero-sunset-exterior.jpg",

  // Apartments – Model A
  modelA: {
    floorplan: "/images/model-a-floorplan.jpg",
    viewCanal: "/images/model-a-view-canal.jpg",
    videoPoster: "/images/model-a-video-poster.jpg",
  },

  // Apartments – Model B
  modelB: {
    floorplan: "/images/model-b-floorplan.jpg",
    forestView: "/images/model-b-forest-view.jpg",
    videoPoster: "/images/model-b-video-poster.jpg",
  },

  // Sky Deck
  skydeck: {
    // 👉 ESTA es la ruta de la foto del Sky Deck
    amenities: "/images/skydeck-amenities.jpg",
    // Poster de video (ya no lo usamos, pero lo dejamos por si acaso)
    videoPoster: "/images/skydeck-video-poster.jpg",
  },

  // Ubicación / Actividades
  location: {
    // Imagen de mapa (además del iframe)
    map: "/images/location-map-placeholder.jpg",
    // Imagen general de experiencias (si quieres usar una banner)
    experiencesPoster: "/images/location-experiences-poster.jpg",
    // 👉 NUEVAS imágenes para cada tarjeta blanca
    spots: {
      cascoAntiguo: "/images/location-casco-antiguo.jpg",
      canalMiraflores: "/images/location-canal-miraflores.jpg",
      cerroAncon: "/images/location-cerro-ancon.jpg",
      amadorCauseway: "/images/location-amador-causeway.jpg",
      panamaPacifico: "/images/location-panama-pacifico.jpg",
      veracruz: "/images/location-veracruz.jpg",
    },
  },

  // Testimonios
  testimonials: {
    lukasz: "/images/testimonial-lukasz.jpg",
    klaudia: "/images/testimonial-klaudia.jpg", // aunque no la mostremos ahora
  },
} as const;

export const videos = {
  // 👉 ÚNICO video que vamos a usar: el del hero
  heroSunsetCanal: "/videos/hero-sunset-canal.mp4",

  // El resto quedan por si acaso pero NO se usan en los componentes
  modelAApartmentTour: "/videos/model-a-apartment-tour.mp4",
  modelBApartmentTour: "/videos/model-b-apartment-tour.mp4",
  skydeckPoolTour: "/videos/skydeck-pool-tour.mp4",
  locationExperiences: "/videos/location-experiences.mp4",
} as const;
