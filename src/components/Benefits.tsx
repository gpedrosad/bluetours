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
    title: 'Bilingual Guide',
    description: 'Shane is not only an expert in Cairns but also speaks Japanese, ensuring smooth and personalized communication.',
  },
  {
    icon: <AiOutlineSchedule className="text-blueCustom" />,
    title: 'Total Flexibility',
    description: 'Plan your tour according to your own schedule and enjoy a fully customized experience.',
  },
  {
    icon: <AiOutlineSafety className="text-blueCustom" />,
    title: 'Comfort and Safety',
    description: 'Travel in a spacious and secure vehicle, designed for your comfort and well-being throughout the journey.',
  },
];

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent mb-8 text-center drop-shadow-lg"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
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
