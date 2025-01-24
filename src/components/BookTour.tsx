// components/BookTour.tsx
'use client';

import { useState, useEffect } from 'react';

// Definición de las props
interface BookTourProps {
  buttonText: string;
}

const BookTour: React.FC<BookTourProps> = ({ buttonText }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    date1: '',
    date2: '',
    adults: 1,
    children: 0,
    infants: 0,
    email: '',
    hotel: '',
  });
  const [totalPrice, setTotalPrice] = useState<number>(185); // Inicialmente 1 adulto
  const [isPackageApplied, setIsPackageApplied] = useState<boolean>(false);
  const [saving, setSaving] = useState<number>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Calcular el precio total y el ahorro cada vez que cambian los adultos o niños
  useEffect(() => {
    const adults = parseInt(formData.adults as unknown as string, 10);
    const children = parseInt(formData.children as unknown as string, 10);

    // Precio estándar
    const standardPrice = adults * 185 + children * 115;

    if (adults === 2 && children === 2) {
      setTotalPrice(585);
      setIsPackageApplied(true);
      setSaving(standardPrice - 585); // 600 - 585 = 15 AUD
    } else {
      setTotalPrice(standardPrice);
      setIsPackageApplied(false);
      setSaving(0);
    }
  }, [formData.adults, formData.children]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, como enviar a una API
    console.log(formData, `Total Price: ${totalPrice} AUD`);
    // Cerrar el modal después de enviar
    setIsOpen(false);
    // Resetear el formulario
    setFormData({
      name: '',
      date1: '',
      date2: '',
      adults: 1,
      children: 0,
      infants: 0,
      email: '',
      hotel: '',
    });
    // Resetear el precio total y el ahorro
    setTotalPrice(185);
    setIsPackageApplied(false);
    setSaving(0);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6">
      {/* Botón de Llamado a la Acción */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300 shadow-lg"
      >
        {buttonText}
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-8 relative">
            {/* Botón de Cerrar */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl"
              aria-label="Cerrar modal"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-6 text-center">Reserva tu Tour</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nombre */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Ingresa tu nombre completo"
                />
              </div>

              {/* Fechas */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Fechas Preferidas</label>
                <div className="flex space-x-4 mt-2">
                  <div className="flex-1">
                    <label htmlFor="date1" className="sr-only">
                      Primera Opción
                    </label>
                    <input
                      type="date"
                      id="date1"
                      name="date1"
                      required
                      value={formData.date1}
                      onChange={handleChange}
                      className="block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <span className="text-xs text-gray-500">Primera Opción</span>
                  </div>
                  <div className="flex-1">
                    <label htmlFor="date2" className="sr-only">
                      Segunda Opción
                    </label>
                    <input
                      type="date"
                      id="date2"
                      name="date2"
                      value={formData.date2}
                      onChange={handleChange}
                      className="block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <span className="text-xs text-gray-500">Segunda Opción</span>
                  </div>
                </div>
              </div>

              {/* Número de Personas */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Número de Personas</label>
                <div className="grid grid-cols-3 gap-6 mt-2">
                  <div>
                    <label htmlFor="adults" className="sr-only">
                      Adultos
                    </label>
                    <input
                      type="number"
                      id="adults"
                      name="adults"
                      min={1}
                      required
                      value={formData.adults}
                      onChange={handleChange}
                      className="block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Adultos"
                    />
                    <span className="text-xs text-gray-500">Adultos</span>
                  </div>
                  <div>
                    <label htmlFor="children" className="sr-only">
                      Niños (3-14)
                    </label>
                    <input
                      type="number"
                      id="children"
                      name="children"
                      min={0}
                      value={formData.children}
                      onChange={handleChange}
                      className="block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Niños"
                    />
                    <span className="text-xs text-gray-500">Niños (3-14)</span>
                  </div>
                  <div>
                    <label htmlFor="infants" className="sr-only">
                      Infantes
                    </label>
                    <input
                      type="number"
                      id="infants"
                      name="infants"
                      min={0}
                      value={formData.infants}
                      onChange={handleChange}
                      className="block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Infantes"
                    />
                    <span className="text-xs text-gray-500">Infantes</span>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Ingresa tu email"
                />
              </div>

              {/* Hotel */}
              <div>
                <label htmlFor="hotel" className="block text-sm font-medium text-gray-700">
                  Hotel
                </label>
                <input
                  type="text"
                  id="hotel"
                  name="hotel"
                  required
                  value={formData.hotel}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Nombre del hotel"
                />
              </div>

              {/* Precio Total */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Precio Total</label>
                <div className="mt-1">
                  <input
                    type="text"
                    readOnly
                    value={`${totalPrice.toLocaleString('es-AR', {
                      style: 'currency',
                      currency: 'AUD',
                      minimumFractionDigits: 2,
                    })}`}
                    className={`block w-full border ${
                      isPackageApplied ? 'border-green-500' : 'border-gray-300'
                    } rounded-md shadow-sm p-3 bg-gray-50`}
                  />
                </div>
                {isPackageApplied && (
                  <span className="text-xs text-green-600">
                    Paquete aplicado, estás ahorrando{' '}
                    {saving.toLocaleString('es-AR', {
                      style: 'currency',
                      currency: 'AUD',
                      minimumFractionDigits: 2,
                    })}
                  </span>
                )}
              </div>

              {/* Botón de Envío */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-full md:w-1/2 px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition duration-300 shadow-md"
                >
                  Enviar Reserva
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookTour;