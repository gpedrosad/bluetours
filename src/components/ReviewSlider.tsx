'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import ReviewCard from './ReviewCard';

const ReviewSlider = () => {
  const reviews = [
    {
      id: 1,
      name: '山田太郎',
      isVerified: true,
      comment:
        "ケアンズ発のアサートンテーブルランズツアーは素晴らしかったです！シェーンガイドが地元で人気のスポットや絶景を案内してくれ、忘れられない体験になりました。",
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/men/10.jpg',
      date: '2024-08-10',
    },
    {
      id: 2,
      name: '佐藤花子',
      isVerified: true,
      comment:
        "シェーンの日本語ガイド付きツアーで、野生のワラビーとのふれあいやガロファームの手作りチーズの試食など、細部にまでこだわった内容に大満足です。",
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/women/11.jpg',
      date: '2024-09-05',
    },
    {
      id: 3,
      name: '鈴木一郎',
      isVerified: false,
      comment:
        "1日のツアーで、砂糖きび畑、ユーカリの森、トロピカルな雨林を通り抜け、地域の自然美と歴史に触れることができました。非常に感動的な体験です。",
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
      date: '2024-07-20',
    },
    {
      id: 4,
      name: '高橋美奈子',
      isVerified: true,
      comment:
        "シェーンの知識豊富な案内で、バリン湖の散策やトルガでのピーナッツとマカダミアの試食、さらには地元グルメの体験など、充実した一日を過ごせました。",
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/women/13.jpg',
      date: '2024-10-12',
    },
    {
      id: 5,
      name: '田中健',
      isVerified: true,
      comment:
        "グラナイトゴージでの岩場散策や、地元カフェでのゆったりとしたひと時、そしてトロピカルフルーツワインの試飲など、アサートンテーブルランズツアーはどこをとっても魅力的でした。絶対におすすめです！",
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/men/14.jpg',
      date: '2024-11-03',
    },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-white to-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent mb-8 text-center drop-shadow-lg"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          アサートンテーブルランズツアーのお客様の声
        </h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
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