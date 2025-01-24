// components/Slider.tsx
'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider: React.FC = () => {
  const slides = [
    {
      id: 1,
      src: '/butterfly.webp',
      alt: 'Butterfly',
    },
    {
      id: 2,
      src: '/lagartovolante.webp',
      alt: 'Lagarto Volante',
    },
    {
      id: 3,
      src: '/retkangoroo.webp',
      alt: 'Ret Kangaroo',
    },
    {
      id: 4,
      src: '/termite.webp',
      alt: 'Termite',
    },
  ];

  return (
    <div className="w-full max-w-md mx-auto"> {/* Ajuste de ancho fijo */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="rounded-lg overflow-hidden shadow-lg"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex items-center justify-center bg-gray-200 w-full h-80"> {/* Dimensiones fijas */}
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;