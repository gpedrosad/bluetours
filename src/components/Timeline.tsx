// components/Timeline.tsx
import React from 'react';
import {
  AiOutlineHome,
  AiOutlineEnvironment,
  AiOutlineFork,
  AiOutlineCoffee,
  AiOutlineCar
} from 'react-icons/ai';
import { GiPeanut } from "react-icons/gi";
import { BsPersonWalking } from "react-icons/bs";


import { PiFarmFill } from "react-icons/pi";




import { PiWineFill } from "react-icons/pi";
interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  icon: React.ReactElement;
}

const schedule: ScheduleItem[] = [
  {
    time: '8:15',
    title: 'Recogida de clientes en cada hotel',
    description: 'Viaje a través de vastos campos de caña de azúcar, senderos de selva tropical y bosques de eucaliptos hasta llegar a Atherton Tablelands.',
    icon: <AiOutlineHome />,
  },
  {
    time: '9:30',
    title: 'Visita al Lago Balin',
    description: 'Visite el lago Balin, un hermoso lago formado en una topografía inusual. Paseo por la selva tropical donde a veces aparecen lindos animales salvajes. Descanso en una cafetería junto al lago con vista al lago Balin y disfruta de un café y un bollo en un momento tranquilo. Recorrido por la Higuera Cortina, un árbol de 500 años que fue inspiración para una película de Hayao Miyazaki y hogar de un espíritu.',
    icon: <AiOutlineEnvironment />,
  },
  {
    time: '11:15',
    title: 'Visita a un Rancho en la Meseta',
    description: 'Prueba de queso recién hecho con leche de vacas lecheras criadas en el aire limpio y en una vasta meseta. Compra de productos locales como chocolate y yogur. Almuerzo con vistas panorámicas de la exuberante meseta. (Nota: Gallo Farm está cerrado los lunes y martes, por lo que no habrá degustación de quesos y se cambiará el lugar del almuerzo.)',
    icon: <PiFarmFill />,
  },
  {
    time: '13:00',
    title: 'Degustación de Maní y Nueces de Macadamia en Tolga',
    description: 'Visita a una famosa zona de producción de maní. Mercado repleto de frutas frescas utilizadas por los lugareños, ¡sintiendo la vida local!',
    icon: <GiPeanut />,
  },
  {
    time: '13:30',
    title: 'Paseo por Granet Gorge',
    description: 'Paseo por las tierras altas hasta Granet Gorge, donde podrás ver el interior de Cairns. Alimenta a los pequeños canguros de roca que viven en este parque nacional. ¡A veces incluso puedes encontrarte con un ualabí bebé atrapado en la bolsa de su madre!',
    icon: <BsPersonWalking />,
  },
  {
    time: '14:20',
    title: 'Descanso en una Fábrica de Café',
    description: 'Relájate en una relajante fábrica de café que recolecta café local de alta calidad. Disfruta de una tarde relajante en esta bonita y elegante cafetería.',
    icon: <AiOutlineCoffee />,
  },
  {
    time: '15:10',
    title: 'Degustación de Vino de Frutas',
    description: 'Degusta vino de frutas elaborado con frutas tropicales exclusivas de Cairns en una bodega rodeada de bosques de eucaliptos. Prueba y compara 9 tipos de vinos y licores artesanales.',
    icon: <PiWineFill />,
  },
  {
    time: '17:15',
    title: 'Regreso a Cairns',
    description: 'Dirígete directamente a Cairns, pasando por el hermoso paisaje de la meseta y la selva tropical. Llegada y dejada en tu hotel.',
    icon: <AiOutlineCar />,
  },
];

const Timeline: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-extrabold mb-12 text-center text-blue-600">
        Horario del Tour por las Mesetas de Cairns Atherton
      </h2>
      <div className="relative">
        {/* Línea vertical principal */}
        <div className="absolute left-6 top-0 bottom-0 w-1 bg-gray-300"></div>

        {schedule.map((item, index) => (
          <div key={index} className="mb-10 flex items-start">
            {/* Icono y línea de conexión */}
            <div className="flex flex-col items-center">
              {/* Icono */}
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg transition-transform transform hover:scale-110">
                {item.icon}
              </div>
              {/* Línea de conexión */}
              {index !== schedule.length - 1 && (
                <div className="w-px bg-gray-300 flex-1 mt-2"></div>
              )}
            </div>
            {/* Contenido */}
            <div className="ml-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <span className="text-sm text-blue-500 font-medium">
                    {item.time}
                  </span>
                </div>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;