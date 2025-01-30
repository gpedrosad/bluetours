// components/Hero.tsx
import React from 'react';
import BookTour from './BookTour';

const Hero: React.FC = () => {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover h-screen md:h-[75vh] flex items-center justify-center"
      style={{ backgroundImage: "url('/wallaby4.JPG')" }}
    >
      {/* Overlay para oscurecer la imagen y mejorar la legibilidad del texto */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Contenido de la sección Hero */}
      <div className="relative z-10 text-center px-4">
        <h1
          // Elimina el atributo lang="ja" de aquí
          className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          ケアンズ発 アサートン高原ツアー！
        </h1>
        <p className="text-lg md:text-2xl text-white mb-8 drop-shadow-md">
          世界遺産の壮大な自然を体験できる、特別なツアーをご用意しました。
        </p>
        <BookTour buttonText="予約する" />
      </div>
    </section>
  );
};

export default Hero;