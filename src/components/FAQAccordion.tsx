'use client';

import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: 'メールで何日前までに申し込めますか？',
    answer:
      '出発の少なくとも2〜3日前までに申し込むことをお勧めします。ケアンズ到着後でも電話での申し込みは可能です。',
  },
  {
    question: 'まだホテルを決めていませんが、予約できますか？',
    answer:
      'はい、ツアー前日までにホテルが決まっていれば、送迎の手配が可能です。',
  },
  {
    question: 'ケアンズ到着後にツアーを予約できますか？',
    answer:
      'ツアーの日程が決まり次第、できるだけ早く予約するのが理想ですが、空席があれば前日でも予約可能です。',
  },
  {
    question: '支払い方法は？',
    answer:
      'ツアー当日に現金またはクレジットカードでお支払いください。',
  },
  {
    question: '空港送迎サービスはありますか？',
    answer:
      '申し訳ありませんが、空港送迎は提供しておりません。ただし、空港バスやその他の交通手段についての情報をご案内できます。',
  },
  {
    question: 'ケアンズに早く戻ったり、別の時間に戻ることはできますか？',
    answer:
      'はい、グループの希望に応じて、ツアー内容を一部変更することが可能です。',
  },
];

const FAQAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto my-10 p-6 bg-white rounded-lg shadow-lg">
      <h2
        className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent mb-8 text-center drop-shadow-lg"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        よくある質問
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-md overflow-hidden transition-transform transform hover:scale-105"
          >
            <button
              className="w-full flex justify-between items-center px-4 py-3 bg-indigo-50 text-left focus:outline-none focus:bg-indigo-100 transition-colors duration-200"
              onClick={() => toggleFAQ(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`faq-${index}`}
            >
              <span className="text-lg font-medium text-gray-800">
                {faq.question}
              </span>
              {activeIndex === index ? (
                <AiOutlineMinus className="w-6 h-6 text-indigo-600" />
              ) : (
                <AiOutlinePlus className="w-6 h-6 text-indigo-600" />
              )}
            </button>
            <div
              id={`faq-${index}`}
              className={`px-4 pt-0 pb-4 text-gray-700 transition-all duration-300 ease-in-out ${
                activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
              role="region"
              aria-labelledby={`faq-${index}`}
            >
              <p className="text-sm leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
