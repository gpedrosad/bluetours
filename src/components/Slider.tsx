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
      src: '/retkangoroo.webp', // Asegúrate de tener esta imagen en tu directorio público
      alt: 'ニオイネズミカンガルー',
      title: 'ニオイネズミカンガルー | Musky Rat Kangaroo',
      description: `これはオーストラリアで最も小さく原始的なカンガルーです。湿潤な熱帯雨林の限られた地域にのみ存在します。非常に希少で極めて珍しい存在です。昼間に活動しますが、濃い茶色の体色のため見つけるのは非常に難しいです。
      
      非常に稀です。通常のアサートン高原ツアーでは時折見かけますが、見つかる確率を増やすためにはプライベートチャーターがおすすめです。`,
      locations: ['アサートン高原', 'マリーバ'],
      season: '🌞 通年',
      commonly_seen: '日中',
      probability: '5％',
    },
    
    {
      id: 4,
      src: '/kookaburra.webp',
      alt: 'ワライカワセミ',
      title: 'ワライカワセミ | Kookaburra',
      description: `マリーバやオーストラリアの沿岸地域など、乾燥したサバンナの生息地には、ワライカワセミ（クッカバラ）がよく見られます。彼らはヘビを地面に叩きつけて殺し、それから食べることができます。ワライカワセミの笑い声は、オーストラリアの象徴的なものです。
      
      通常のアサートン高原ツアーでよく見かけます。`,
      locations: ['アサートン高原', 'マリーバ'],
      season: '🌞 通年',
      commonly_seen: '日中',
      probability: '59％',
    },
    {
      id: 5,
      src: '/wallabies.webp',
      alt: 'マリーバロックワラビー',
      title: 'マリーバロックワラビー | Rock Wallaby',
      description: `オーストラリアに存在する16種類のロックワラビーのうちの1種です。マリーバの「サバンナの玄関口」と呼ばれる地域の郊外にある非常に限られた岩の周辺のみで見られ、非常に希少です。非常に社交的な性格を持つため、オーストラリアで見られるカンガルーの中でおそらく最もフレンドリーな種の一つです。
      
      通常のアサートン高原ツアーでは常に見ることができます。`,
      locations: ['マリーバ'],
      season: '🌞 通年',
      commonly_seen: '日中',
      probability: '100％',
    },
    {
      id: 6,
      src: '/termite.webp',
      alt: 'シロアリ',
      title: 'シロアリ | Termites',
      description: `この生物は、ゴキブリに関連しており、アリとは関係ありません。彼らは草、土壌、唾液から作られた巨大な土塊を作り、それはコンクリートのように硬くなります。温度は27度に保たれ、この小さな高感度の生物がオーストラリアの厳しいサバンナ地域で生きることを可能にしています。女王は1日に最大で30,000個の卵を産み、約24年間生きることができます。
      
      アサートン高原ツアーでは常に見ることができます。`,
      locations: ['マリーバ'],
      season: '🌧️ 雨季 (1月・2月・3月)',
      commonly_seen: '日中',
      probability: '100％',
    },
    {
      id: 7,
      src: '/lagartovolante.webp',
      alt: 'エリマキトカゲ',
      title: 'エリマキトカゲ | Frilled Neck Lizard',
      description: `この生物は、オーストラリアの「乾燥した」サバンナ地帯や北部地域に特有の象徴的存在です。体長は最大で85センチメートルに成長し、フリル（飾り羽縁）は最大で35センチメートルも広がることがあります。この生物は世界の他の場所では見られず、オーストラリアの乾燥地帯にのみ生息しています。
      
      アサートン高原ツアーでは、気温が30度以上の場合に常に見ることができます。また、プライベートチャーターでも探すことができます。`,
      locations: ['マリーバ'],
      season: '🌞 通年 (1月・2月・3月・4月・8月・9月・10月・11月・12月)',
      commonly_seen: '日中',
      probability: '50％',
    },
    {
      id: 8,
      src: '/bluetonguelizard.webp',
      alt: 'アオジタトカゲ',
      title: 'アオジタトカゲ | Blue Tongue Lizard',
      description: `もう一つのオーストラリアの象徴的な生物です。実際にはスキンク科の一種であり、一般的な名前とは異なり、トカゲではありません。明るい青い舌を使って敵を威嚇します。一般的には約20年間生きますが、30年間生きることも知られています。
      
      通常のアサートン高原ツアーで、グラナイト渓谷のキャンプ受付で見ることができます。野生では見られません。`,
      locations: ['マリーバ'],
      season: '🌞 通年',
      commonly_seen: '日中',
      probability: '100％',
    },
    {
      id: 9,
      src: '/carpetpython.webp',
      alt: 'カーペットニシキヘビ',
      title: 'カーペットニシキヘビ | Carpet Python',
      description: `体長が最大2メートルに成長し、鳥や爬虫類、さらには小型のワラビーなどの哺乳類を捕食することがあります。この生物は、熱帯雨林や草原など、さまざまな生息地で見られます。また、パプアニューギニアでも見られます。
      
      通常のアサートン高原ツアーで、グラナイト渓谷のキャンプ受付で見ることができます。野生では見られません。`,
      locations: ['ケアンズ市内', 'アサートン高原', 'パロネラパーク', 'マリーバ', 'キュランダ'],
      season: '🌞 通年 (1月・2月・3月・4月・8月・9月・10月・11月・12月)',
      commonly_seen: '日中',
      probability: '100％',
    },
    {
      id: 10,
      src: '/agilewallaby.webp',
      alt: 'スナイロワラビー',
      title: 'スナイロワラビー | Agile Wallaby',
      description: `この生物は、後ろ足に沿った細いストライプと、頬に沿った薄い白いストライプで区別されます。彼らはFNQ（Far North Queensland）で最もよく見られる中型のワラビーです。メスの体高は90センチメートルで、オスは1.4メートルです。
      
      通常のツアーでは、時折午後にマリーバの郊外で見ることがあります。また、プライベートチャーターでも探すこともできます。`,
      locations: ['ケアンズ市内', 'アサートン高原', 'パロネラパーク', 'マリーバ'],
      season: '🌞 通年',
      commonly_seen: '午後',
      probability: '50％',
    },
    {
      id: 11,
      src: '/butterfly.webp',
      alt: 'ケアンズトリバネアゲハ',
      title: 'ケアンズトリバネアゲハ | Cairns Birdwing Butterfly',
      description: `通常のツアーで見ることができます。見ることができればラッキーです！`,
      locations: ['アサートン高原', 'パロネラパーク'],
      season: '🌧️ 雨季 (1月・2月・3月・4月・5月・12月)',
      commonly_seen: '日中',
      probability: '30％',
    },
    {
      id: 12,
      src: '/boydforestdragon.webp',
      alt: 'ボイドフォレストドラゴン',
      title: 'ボイドフォレストドラゴン | Boyd Forest Dragon',
      description: `FNQ（Far North Queensland）の湿潤熱帯雨林に固有の種です。刺激さえ与えなければ同じ場所に戻ります。昆虫や雨林の果実を食べ、最大で30センチメートルに成長することがあります。顎の白い斑点は、その主な識別特徴の一つです。
      
      通常のツアーで見ることができます。見ることができればラッキーです！`,
      locations: ['アサートン高原'],
      season: '🌞 通年 (1月・2月・3月・4月・8月・9月・10月・11月・12月)',
      commonly_seen: '日中',
      probability: '30％',
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-6">
     <h2
        className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent mb-8 text-center drop-shadow-lg"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        ツアーでは何が見られますか？
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
                <p className="text-gray-700 mb-4 flex-1 whitespace-pre-line">{slide.description}</p>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li className="flex flex-wrap items-center">
                    📍 <strong className="mr-2">見ることができる場所:</strong>
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
                  <li>🌿 <strong>季節:</strong> {slide.season}</li>
                  {slide.commonly_seen && (
                    <li>🕒 <strong>よく見られる時間帯:</strong> {slide.commonly_seen}</li>
                  )}
                  <li>🎯 <strong>見れる確率:</strong> {slide.probability}</li>
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