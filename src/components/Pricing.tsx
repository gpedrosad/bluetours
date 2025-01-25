'use client';

import React from 'react';

const Pricing: React.FC = () => {
  const pricingData = [
    {
      type: 'Adultos',
      description: '1 adulto',
      price: '$185,00 AUD',
      icon: '👤',
    },
    {
      type: 'Niños',
      description: '(3-14 años)',
      price: '$115,00 AUD',
      icon: '👶',
    },
    {
      type: 'Paquete Familiar',
      description: '(2 adultos + 2 niños)',
      price: '$585,00 AUD',
      icon: '👨‍👩‍👧‍👦',
    },
  ];

  return (
    <div className="mt-6 px-4 md:px-0">
      <h2
        className="text-4xl font-extrabold text-center mb-10"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        Lista de Precios del Tour
      </h2>
      <div className="grid gap-6 md:grid-cols-3 justify-center">
        {pricingData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 max-w-md transform transition-transform hover:scale-105 hover:shadow-lg"
          >
            {/* Icono */}
            <div className="text-3xl mb-3">{item.icon}</div>

            {/* Tipo */}
            <h3 className="text-lg font-semibold text-gray-700 mb-1">{item.type}</h3>

            {/* Descripción */}
            <p className="text-gray-600 mb-3">{item.description}</p>

            {/* Precio */}
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