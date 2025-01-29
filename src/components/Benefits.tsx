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
    title: 'バイリンガルガイド',
    description: 'シェーンはケアンズの専門家であるだけでなく、日本語も話せるため、スムーズでパーソナライズされたコミュニケーションが可能です。',
  },
  {
    icon: <AiOutlineSchedule className="text-blueCustom" />,
    title: '完全な柔軟性',
    description: 'あなたのスケジュールに合わせてツアーを計画し、完全にカスタマイズされた体験を楽しむことができます。',
  },
  {
    icon: <AiOutlineSafety className="text-blueCustom" />,
    title: '快適さと安全',
    description: '広々とした安全な車両で移動し、旅の間ずっと快適で安心な体験を提供します。',
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
          なぜ TrueBlueTours を選ぶのか？
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-blue-600 text-5xl mb-4">
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
