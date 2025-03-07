'use client';

import React from 'react';

const Pricing: React.FC = () => {
  const pricingData = [
    {
      type: '大人',
      description: '1名',
      price: '195.00 AUD',
      icon: '👤',
    },
    {
      type: '子供',
      description: '(3〜14歳)',
      price: '115.00 AUD',
      icon: '👶',
    },
    {
      type: 'ファミリーパッケージ',
      description: '(大人2名 + 子供2名)',
      price: '600.00 AUD',
      icon: '👨‍👩‍👧‍👦',
    },
  ];

  return (
    <div className="mt-6 px-4 md:px-0">
      <h2
        className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent mb-8 text-center drop-shadow-lg"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        料金
      </h2>
      <div className="grid gap-6 md:grid-cols-3 justify-center">
        {pricingData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 max-w-md transform transition-transform hover:scale-105 hover:shadow-lg"
          >
            {/* アイコン */}
            <div className="text-3xl mb-3">{item.icon}</div>

            {/* タイプ */}
            <h3 className="text-lg font-semibold text-gray-700 mb-1">{item.type}</h3>

            {/* 説明 */}
            <p className="text-gray-600 mb-3">{item.description}</p>

            {/* 価格 */}
            <div className="mt-auto">
              <span className="text-lg font-bold text-blue-600">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
