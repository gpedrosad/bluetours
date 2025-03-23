'use client';

import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

declare global {
  interface Window {
    fbq?: (event: string, ...args: unknown[]) => void;
  }
}

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

  useEffect(() => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'NewLead');
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        'service_atqszb5', // Replace with your EmailJS Service ID
        'template_0bht6f9', // Replace with your EmailJS Template ID
        formData,
        'yEmX5HoErnJIO9bSh' // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Your tour booking has been sent successfully!');
          setIsOpen(false);
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
        },
        (error) => {
          console.error(error.text);
          alert('Failed to send booking. Please try again.');
        }
      );
  };

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <button
        onClick={() => setIsOpen(true)}
        className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300 shadow-lg"
      >
        {buttonText}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-8 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl"
              aria-label="Close modal"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-6 text-center">Book a Tour</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Preferred Dates */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Preferred Dates</label>
                <div className="flex space-x-4 mt-2">
                  <div className="flex-1">
                    <input
                      type="date"
                      id="date1"
                      name="date1"
                      required
                      value={formData.date1}
                      onChange={handleChange}
                      className="block w-full border border-gray-300 rounded-md shadow-sm p-3"
                    />
                    <span className="text-xs text-gray-500">First Preference</span>
                  </div>
                  <div className="flex-1">
                    <input
                      type="date"
                      id="date2"
                      name="date2"
                      value={formData.date2}
                      onChange={handleChange}
                      className="block w-full border border-gray-300 rounded-md shadow-sm p-3"
                    />
                    <span className="text-xs text-gray-500">Second Preference</span>
                  </div>
                </div>
              </div>

              {/* Group Size */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Number of People</label>
                <div className="grid grid-cols-3 gap-6 mt-2">
                  <div>
                    <input
                      type="number"
                      id="adults"
                      name="adults"
                      min={1}
                      required
                      value={formData.adults}
                      onChange={handleChange}
                      className="block w-full border border-gray-300 rounded-md shadow-sm p-3"
                    />
                    <span className="text-xs text-gray-500">Adults</span>
                  </div>
                  <div>
                    <input
                      type="number"
                      id="children"
                      name="children"
                      min={0}
                      value={formData.children}
                      onChange={handleChange}
                      className="block w-full border border-gray-300 rounded-md shadow-sm p-3"
                    />
                    <span className="text-xs text-gray-500">Children (3-14)</span>
                  </div>
                  <div>
                    <input
                      type="number"
                      id="infants"
                      name="infants"
                      min={0}
                      value={formData.infants}
                      onChange={handleChange}
                      className="block w-full border border-gray-300 rounded-md shadow-sm p-3"
                    />
                    <span className="text-xs text-gray-500">Infants</span>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Hotel */}
              <div>
                <label htmlFor="hotel" className="block text-sm font-medium text-gray-700">Hotel Name</label>
                <input
                  type="text"
                  id="hotel"
                  name="hotel"
                  required
                  value={formData.hotel}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3"
                  placeholder="Enter your hotel name"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-full md:w-1/2 px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition duration-300 shadow-md"
                >
                  Send Booking
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