// components/Benefits.tsx

import React from 'react';
import { AiFillLike, AiFillEnvironment, AiOutlineSafety } from 'react-icons/ai';

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: <AiFillLike className="text-blueCustom" />,
    title: 'Personalized Experiences',
    description: 'We tailor our tours to your interests for a unique experience.',
  },
  {
    icon: <AiFillEnvironment className="text-blueCustom" />,
    title: 'Commitment to Sustainability',
    description: 'Responsible practices that protect the environment and support communities.',
  },
  {
    icon: <AiOutlineSafety className="text-blueCustom" />,
    title: 'High Quality and Safety',
    description: 'We prioritize your safety and well-being, offering tours with high standards.',
  },
];

const Benefits: React.FC = () => {
  return (
    <section id="beneficios" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-gray-800">
          Why Choose TrueBlueTours?
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