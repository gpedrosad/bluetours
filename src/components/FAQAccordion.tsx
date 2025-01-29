'use client';

import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: 'How many days in advance can I apply via email?',
    answer:
      'It is recommended to submit your application at least 2-3 days before departure. We also accept phone applications after your arrival in Cairns.',
  },
  {
    question: "I haven't decided on a hotel yet, can I still make a reservation?",
    answer:
      'Yes, we can arrange transportation if we know the hotel the day before the tour.',
  },
  {
    question: 'Can I book a tour after arriving in Cairns?',
    answer:
      "It's best to book as soon as you've decided on the tour date, but if seats are available, you can also book the day before.",
  },
  {
    question: 'How do I pay?',
    answer:
      'Payment should be made in cash or by credit card on the day of the tour.',
  },
  {
    question: 'Is there transportation service from the airport?',
    answer:
      'Unfortunately, we do not offer airport transfers. However, we can provide information about airport buses and other transportation options.',
  },
  {
    question: 'Can I return to Cairns earlier or at a different time?',
    answer:
      "Yes, it's possible to make some changes to the tour content to accommodate the group's preferences.",
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
  Frequently Asked Questions
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