// components/ServiceCards.jsx

import React from 'react';

const services = [
  {
    title: 'オーストラリアの自然を満喫',
    description: 'アセルトン・テーブルランズやパロネラ公園を巡り、ケアンズならではの豊かな自然とユニークな動物たちを発見しましょう。',
    icon: '🌿', // 必要に応じてSVGアイコンや画像に置き換えてください
  },
  {
    title: '地元の美食を楽しむ',
    description: '高原のグルメを堪能。新鮮な食材から伝統的な料理まで、地域の豊かな食文化を味わえます。',
    icon: '🍽️',
  },
  {
    title: 'プライベートでカスタマイズされた体験',
    description: 'プライベートツアーでケアンズを自分のペースで探索。最大13名まで対応可能な専用車で、家族や友人と特別な思い出を作りましょう。',
    icon: '🚐',
  },
  {
    title: '優れたコストパフォーマンス',
    description: 'リーズナブルな価格でプレミアムな体験を提供。シェーンがあなたの興味に合わせた最適な旅程を計画します。',
    icon: '💰',
  },
];

const ServiceCards = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {services.map((service, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col items-center">
                <div className="text-4xl mb-4 text-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
                <p className="text-gray-600 flex-grow text-center">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;