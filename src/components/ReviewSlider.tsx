'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules'; // Removed Navigation
import 'swiper/css';
// Removed 'swiper/css/navigation';
import 'swiper/css/pagination';
import ReviewCard from './ReviewCard';

const ReviewSlider = () => {
  const reviews = [
    {
      id: 1,
      name: 'Haruto Sato',
      isVerified: true,
      comment: 'La excursión por el bosque fue increíble. Las guías fueron muy conocedoras y los paisajes, simplemente espectaculares.',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      date: '2024-05-15',
    },
    {
      id: 2,
      name: 'Yuki Tanaka',
      isVerified: true,
      comment: 'Una experiencia llena de adrenalina. Las actividades estaban bien organizadas y disfrutamos cada momento.',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      date: '2024-07-22',
    },
    {
      id: 3,
      name: 'Sora Yamamoto',
      isVerified: false,
      comment: 'Aprendimos mucho sobre la cultura local. Los guías fueron amables y muy informativos.',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
      date: '2025-01-10',
    },
    {
      id: 4,
      name: 'Ren Nakamura',
      isVerified: true,
      comment: 'Perfecto para los amantes de la fotografía. Capturamos imágenes impresionantes y la organización fue impecable.',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
      date: '2024-09-05',
    },
    {
      id: 5,
      name: 'Aiko Suzuki',
      isVerified: false,
      comment: 'La caminata fue desafiante pero gratificante. Las vistas desde el mirador valieron totalmente el esfuerzo.',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
      date: '2025-03-18',
    },
    {
      id: 6,
      name: 'Kaito Kobayashi',
      isVerified: true,
      comment: 'Una aventura fascinante dentro de las cuevas. Los guías nos contaron historias interesantes y nos mantuvieron seguros en todo momento.',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/men/6.jpg',
      date: '2024-11-30',
    },
    {
      id: 7,
      name: 'Mei Watanabe',
      isVerified: true,
      comment: 'Perfecto para los amantes del café. Aprendimos sobre todo el proceso y degustamos diferentes variedades. ¡Delicioso!',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/women/7.jpg',
      date: '2025-02-25',
    },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-white to-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
      <h2
  className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent mb-8 text-center drop-shadow-lg"
  style={{ fontFamily: "Poppins, sans-serif" }}
>
  Reviews of our customers
</h2>
        <Swiper
          modules={[Pagination, Autoplay]} // Removed Navigation
          spaceBetween={30}
          slidesPerView={1}
          // Removed navigation prop
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <ReviewCard
                name={review.name}
                isVerified={review.isVerified}
                comment={review.comment}
                rating={review.rating}
                avatar={review.avatar}
                date={review.date}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewSlider;