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
      src: '/retkangoroo.webp',
      alt: 'ニオイネズミカンガルー',
      title: 'ニオイネズミカンガルー',
      description: `オーストラリアで最も小さく原始的なカンガルー。湿潤な熱帯雨林の限られた地域にのみ生息し、非常に希少です。昼間に活動するが、濃い茶色の体色のため見つけるのは困難です。`,
      locations: ['アサートン高原', 'マリーバ'],
      season: '🌞 通年',
      commonly_seen: '日中',
      probability: '5％',
    },
    {
      id: 2,
      src: '/flyingfox.webp',
      alt: 'メガネオオコウモリ',
      title: 'メガネオオコウモリ',
      description: `オオコウモリは熱帯雨林の果実や花粉の散布に不可欠な存在。年間で20万匹が移動し、繁殖や食事を行います。オーストラリアの中でも特に知能が高い動物とされています。`,
      locations: ['ケアンズ市内', 'アサートン高原', 'パロネラパーク', 'マリーバ', 'キュランダ'],
      season: '🌞 通年',
      commonly_seen: '日中',
      probability: '50％',
    },
    {
      id: 3,
      src: '/treekangoroo.webp',
      alt: 'カオグロキノボリカンガルー',
      title: 'カオグロキノボリカンガルー',
      description: `標高700〜1000メートルの湿潤な熱帯雨林に生息。昼夜を問わず活動し、雌と雄はほとんど別々に生活。繁殖期の終盤のみ一緒になります。`,
      locations: ['アサートン高原'],
      season: '🌞 通年',
      commonly_seen: '日中',
      probability: '5％',
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-6">
      <h2
        className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent mb-8 text-center drop-shadow-lg"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        ツアーで見られる動物たち
      </h2>
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
              <div className="relative w-full h-80">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-semibold mb-3">{slide.title}</h3>
                <p className="text-gray-700 mb-4 flex-1 whitespace-pre-line">{slide.description}</p>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li className="flex flex-wrap items-center">
                    📍 <strong className="mr-2">観察できる場所:</strong>
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
                  <li>🌿 <strong>生息時期:</strong> {slide.season}</li>
                  {slide.commonly_seen && (
                    <li>🕒 <strong>観察しやすい時間帯:</strong> {slide.commonly_seen}</li>
                  )}
                  <li>🎯 <strong>見られる確率:</strong> {slide.probability}</li>
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