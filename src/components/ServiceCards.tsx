// components/ServiceCards.jsx

import React from 'react';

const services = [
  {
    title: 'Sumérgete en la Naturaleza Australiana',
    description: 'Explora la misteriosa belleza de la naturaleza australiana con recorridos por las impresionantes Atherton Tablelands y el histórico Paronella Park. Descubre paisajes exuberantes, cascadas escondidas y una fauna única que solo Cairns puede ofrecer.',
    icon: '🌿', // Puedes reemplazar esto con un ícono SVG o una imagen
  },
  {
    title: 'Deléitate con la Gastronomía Local',
    description: 'Disfruta de la comida gourmet de las tierras altas, donde cada bocado es una explosión de sabores auténticos. Desde delicias frescas hasta platos tradicionales, cada comida es una celebración de la rica cultura culinaria de la región.',
    icon: '🍽️',
  },
  {
    title: 'Experiencias Privadas y Personalizadas',
    description: 'Con nuestros tours privados, tendrás la libertad de explorar Cairns a tu propio ritmo. Viaja acompañado de tu familia y amigos, creando recuerdos únicos en un ambiente cómodo y relajado. Nuestro vehículo privado, con capacidad para hasta 13 personas, garantiza que tu grupo disfrute de una experiencia íntima y exclusiva.',
    icon: '🚐',
  },
  {
    title: 'Excelente Relación Calidad-Precio',
    description: 'Ofrecemos precios muy razonables por persona, permitiéndote disfrutar de una experiencia premium sin romper tu presupuesto. Aprovecha al máximo cada momento con Shane, quien diseñará el mejor itinerario adaptado a tus intereses y preferencias.',
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
              <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col">
                <div className="text-4xl mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 flex-grow">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;