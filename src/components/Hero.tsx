// components/Hero.tsx
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover h-screen md:h-[75vh] flex items-center justify-center"
      style={{ backgroundImage: "url('/wallaby4.JPG')" }}
    >
      {/* Overlay para oscurecer la imagen y mejorar la legibilidad del texto */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Contenido del Hero */}
      <div className="relative z-10 text-center px-4">
        <h1
          className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent mb-4 drop-shadow-lg"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          ¡Excursión a las Mesetas Atherton desde Cairns!
        </h1>
        <p className="text-lg md:text-2xl text-white mb-8 drop-shadow-md">
          Experimenta la majestuosidad de la naturaleza del Patrimonio de la Humanidad con nuestro tour exclusivo.
        </p>
        <a
          href="#reservar"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300"
        >
          Reserva Ahora
        </a>
      </div>
    </section>
  );
};

export default Hero;