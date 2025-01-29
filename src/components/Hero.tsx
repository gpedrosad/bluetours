// components/Hero.tsx
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover h-screen md:h-[75vh] flex items-center justify-center"
      style={{ backgroundImage: "url('/wallaby4.JPG')" }}
    >
      {/* 画像を暗くしてテキストの可読性を向上させるオーバーレイ */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Hero セクションのコンテンツ */}
      <div className="relative z-10 text-center px-4">
        <h1
          className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          ケアンズ発 アサートン高原ツアー！
        </h1>
        <p className="text-lg md:text-2xl text-white mb-8 drop-shadow-md">
          世界遺産の壮大な自然を体験できる、特別なツアーをご用意しました。
        </p>
        <a
          href="#reservar"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300"
        >
          今すぐ予約
        </a>
      </div>
    </section>
  );
};

export default Hero;