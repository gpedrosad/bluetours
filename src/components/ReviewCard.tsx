import React from 'react';
import { FaStar, FaCheckCircle } from 'react-icons/fa';

interface ReviewCardProps {
  name: string;
  isVerified: boolean;
  comment: string;
  rating: number;
  avatar: string;
  date: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  isVerified,
  comment,
  rating = 5,
  avatar,
  date,
}) => {
  // Formatear la fecha a un formato legible, por ejemplo: 15 de mayo de 2024
  const formattedDate = new Date(date).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="max-w-md p-6 border border-gray-200 rounded-lg shadow-lg bg-white  transition-shadow duration-300 mx-4 my-6 sm:mx-6 sm:my-8 lg:mx-auto">
      {/* Encabezado con avatar y nombre */}
      <div className="flex items-center">
        {avatar ? (
          <img
            src={avatar}
            alt={`${name} avatar`}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white text-lg font-semibold mr-4">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <div className="flex items-center">
            <p className="font-semibold text-lg">{name}</p>
            {isVerified && <FaCheckCircle className="text-blue-500 ml-2" />}
          </div>
          <div className="flex items-center mt-1">
            {[...Array(rating)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400" />
            ))}
          </div>
        </div>
      </div>

      {/* Fecha de la reseña */}
      <p className="text-gray-500 text-sm mt-2">{formattedDate}</p>

      {/* Contenido de la reseña */}
      <p className="text-gray-700 text-sm mt-4 leading-relaxed">
        {comment}
      </p>
    </div>
  );
};

export default ReviewCard;