// components/Slider.tsx
'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

const Slider: React.FC = () => {
  const slides = [
    {
      id: 1,
      src: '/wallabies.webp',
      alt: 'Wallabies',
      title: 'Canguro Pequeño',
      description: 'El canguro más pequeño y primitivo de Australia, extremadamente raro y difícil de detectar debido a su color marrón oscuro.',
      locations: ['Atherton Tablelands', 'Mareeba'],
      season: '🌞 Todo el año',
      probability: '5% de probabilidad de ver',
    },
    {
      id: 2,
      src: '/flyingfox.webp',
      alt: 'Flying Fox',
      title: 'Murciélago Frugívoro de Anteojos',
      description: 'Vital para la dispersión de frutos y polen en bosques húmedos, migran al FNQ cada año.',
      locations: ['Cairns', 'Atherton Tablelands', 'Paronella Park', 'Mareeba', 'Kuranda'],
      season: '🌞 Todo el año',
      probability: '50% de posibilidades de ver',
    },
    {
      id: 3,
      src: '/treekangoroo.webp',
      alt: 'Tree Kangaroo',
      title: 'Canguro en Blanco y Negro',
      description: 'Vive en selvas húmedas de FNQ, activo día y noche, extremadamente raro.',
      locations: ['Meseta Atherton'],
      season: '🌞 Todo el año',
      probability: '5% de probabilidad de ver',
    },
    {
      id: 4,
      src: '/kookaburra.webp',
      alt: 'Kookaburra',
      title: 'Martín Pescador',
      description: 'Común en sabanas secas, icónico por su risa, matan serpientes golpeándolas contra el suelo.',
      locations: ['Atherton Tablelands', 'Mareeba'],
      season: '🌞 Todo el año',
      probability: '59% de posibilidades de ver',
    },
    {
      id: 5,
      src: '/wallabies.webp',
      alt: 'Wallabies',
      title: 'Ualabí de Roca de Maryborough',
      description: 'Extremadamente raro, sociable, encontrado en zonas rocosas limitadas.',
      locations: ['Mareeba'],
      season: '🌞 Todo el año',
      probability: '100% de posibilidades de ver',
    },
    {
      id: 6,
      src: '/bluetonguelizard.webp',
      alt: 'Blue Tongue Lizard',
      title: 'Lagarto de Cola Azul',
      description: 'Usa su lengua azul para intimidar, vive hasta 30 años, no es realmente un lagarto.',
      locations: ['Mareeba'],
      season: '🌞 Todo el año',
      probability: '100% de posibilidades de ver',
    },
    {
      id: 7,
      src: '/carpetpython.webp',
      alt: 'Carpet Python',
      title: 'Pitón Alfombra',
      description: 'Puede crecer hasta 2 metros, se alimenta de aves y pequeños canguros.',
      locations: ['Cairns', 'Atherton Tablelands', 'Paronella Park', 'Mareeba', 'Kuranda'],
      season: '📅 Enero-Diciembre',
      probability: '100% de posibilidades de ver',
    },
    {
      id: 8,
      src: '/carpetwallaby.webp',
      alt: 'Carpet Wallaby',
      title: 'Ualabí Ágil',
      description: 'Mediano, franjas distintivas, encontrado en FNQ, hembras y machos de diferente tamaño.',
      locations: ['Cairns', 'Atherton Tablelands', 'Paronella Park', 'Mareeba'],
      season: '🌞 Todo el año',
      commonly_seen: '🕒 Tarde',
      probability: '50% de posibilidades de ver',
    },
    {
      id: 9,
      src: '/boydforestdragon.webp',
      alt: 'Boyd Forest Dragon',
      title: 'Dragón del Bosque Vacío',
      description: 'Endémico de selvas húmedas de FNQ, alimenta de insectos y frutos, marca distintiva en el mentón.',
      locations: ['Meseta Atherton'],
      season: '📅 Enero-Diciembre',
      probability: '30% de posibilidades de ver',
    },
    {
      id: 10,
      src: '/termite.webp',
      alt: 'Termite',
      title: 'Termitas',
      description: 'Relacionadas con cucarachas, crean terrones duros, reinas ponen hasta 30,000 huevos al día.',
      locations: ['Mareeba'],
      season: '🌧️ Temporada de lluvias (Enero-Marzo)',
      probability: '100% de posibilidades de ver',
    },
    {
      id: 11,
      src: '/lagartovolante.webp',
      alt: 'Lagarto con Volantes',
      title: 'Lagarto con Volantes',
      description: 'Ícono de sabanas áridas, puede crecer hasta 85 cm, volantes de hasta 35 cm, exclusivo de Australia.',
      locations: ['Mareeba'],
      season: '📅 Enero-Diciembre',
      probability: '50% de posibilidades de ver',
    },
    {
      id: 12,
      src: '/butterfly.webp',
      alt: 'Cola de Golondrina de Cairns',
      title: 'Cola de Golondrina de Cairns',
      description: 'Visible en recorridos regulares, suerte si puedes verlo.',
      locations: ['Atherton Plateau', 'Paronella Park'],
      season: '🌧️ Temporada de lluvias (Enero, Febrero, Marzo, Abril, Mayo, Diciembre)',
      probability: '30% de posibilidades de ver',
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-6">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="rounded-xl overflow-hidden shadow-xl"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="">
              {/* Imagen Principal */}
              <div className="relative w-full h-80">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
              {/* Contenido */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-semibold mb-3">{slide.title}</h3>
                <p className="text-gray-700 mb-4 flex-1">{slide.description}</p>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li className="flex flex-wrap items-center">
                    📍 <strong className="mr-2">Lugares:</strong>
                    <div className="flex flex-wrap">
                      {slide.locations.map((location) => (
                        <span
                          key={location}
                          className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded mt-2"
                        >
                          {location}
                        </span>
                      ))}
                    </div>
                  </li>
                  <li>🌿 <strong>Temporada:</strong> {slide.season}</li>
                  {slide.commonly_seen && (
                    <li>🕒 <strong>Horario:</strong> {slide.commonly_seen}</li>
                  )}
                  <li>🎯 <strong>Probabilidad:</strong> {slide.probability}</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;