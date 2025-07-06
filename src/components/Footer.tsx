// components/Footer.tsx

import React from 'react';
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo o Nombre de la Empresa */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">TrueBlueTours</h2>
        </div>

        {/* Botones de Redes Sociales */}
        <div className="flex space-x-6">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/truebluetours" // Reemplaza con tu enlace de Instagram
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors duration-300"
            aria-label="Instagram"
          >
            <AiFillInstagram size={24} />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/cairnstour/?locale=ja_JP" // Reemplaza con tu enlace de Facebook
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors duration-300"
            aria-label="Facebook"
          >
            <AiFillFacebook size={24} />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/1234567890" // Reemplaza con tu enlace de WhatsApp (incluye el código de país)
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-500 transition-colors duration-300"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={24} />
          </a>
        </div>
      </div>

      {/* Línea Divisoria y Derechos de Autor */}
      <div className="mt-8 border-t border-gray-700 pt-4">
        <p className="text-center text-sm text-gray-400">
          TrueBlueTours. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;