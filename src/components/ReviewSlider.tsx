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
      name: '佐藤春人',
      isVerified: true,
      comment: 'アサートン高原ツアーは本当に素晴らしかったです。ガイドのシェーンさんは知識豊富で、自然の美しさを存分に楽しめました。',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      date: '2024-05-15',
    },
    {
      id: 2,
      name: '田中結希',
      isVerified: true,
      comment: 'パロネラパークツアーは夢のような体験でした。少人数制でガイドが丁寧に案内してくれ、パークの魅力を存分に堪能できました。',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      date: '2024-07-22',
    },
    {
      id: 3,
      name: '山本空',
      isVerified: false,
      comment: 'ライトアップパロネラツアーは幻想的で感動的でした。昼間とは違ったパロネラパークの美しさを楽しむことができました。',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
      date: '2025-01-10',
    },
    {
      id: 4,
      name: '中村蓮',
      isVerified: true,
      comment: 'オリジナルチャーターツアーを利用しましたが、自由なスケジュールで観光できてとても満足です。家族全員が楽しめるプランでした。',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
      date: '2024-09-05',
    },
    {
      id: 5,
      name: '鈴木愛子',
      isVerified: false,
      comment: 'アサートン高原での野生動物とのふれあいは貴重な体験でした。シェーンさんのガイドが親切で、安心して楽しめました。',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
      date: '2025-03-18',
    },
    {
      id: 6,
      name: '小林海斗',
      isVerified: true,
      comment: '地元のグルメを楽しむツアーは最高でした。チーズやワインなど、ケアンズの味を堪能できて大満足です。',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/men/6.jpg',
      date: '2024-11-30',
    },
    {
      id: 7,
      name: '渡辺芽衣',
      isVerified: true,
      comment: '家族連れにぴったりのツアーでした。子供たちも動物体験を楽しんでおり、思い出に残る一日となりました。',
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
          お客様のレビュー
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