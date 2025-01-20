// components/Benefits.tsx

import React from 'react';
import { AiOutlineTranslation, AiOutlineSchedule, AiOutlineSafety } from 'react-icons/ai';

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: <AiOutlineTranslation className="text-blueCustom" />,
    title: 'Guía Bilingüe',
    description: 'Shane no solo es un experto en Cairns, sino que también habla japonés, facilitando una comunicación fluida y personalizada.',
  },
  {
    icon: <AiOutlineSchedule className="text-blueCustom" />,
    title: 'Flexibilidad Total',
    description: 'Organiza tu tour según tu propio horario y disfruta de una experiencia totalmente adaptada a tus necesidades.',
  },
  {
    icon: <AiOutlineSafety className="text-blueCustom" />,
    title: 'Comodidad y Seguridad',
    description: 'Viaja en un vehículo espacioso y seguro, diseñado para tu comodidad y bienestar durante todo el recorrido.',
  },
];

const Benefits: React.FC = () => {
  return (
    <section id="beneficios" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-gray-800">
          Por Qué Elegir TrueBlue Tours?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-blueCustom text-5xl mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 text-blueCustom">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-center">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;