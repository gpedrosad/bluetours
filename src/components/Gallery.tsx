"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

interface ImageProps {
  src: string;
  alt: string;
}

interface GalleryProps {
  images: ImageProps[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const showPrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const showNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Manejo de teclas para accesibilidad
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowLeft") {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
      } else if (e.key === "ArrowRight") {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, images.length]);

  return (
    <>
      {/* Contenedor de la Galería */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center"
        style={{ fontFamily: "Poppins, sans-serif" }}>
          Galería de Experiencias
        </h2>

        {/*
          Masonry Layout:
          - columns-2: 2 columnas en "mobile" (base)
          - sm:columns-3: 3 columnas en pantallas >= 640px
          - md:columns-4: 4 columnas en pantallas >= 768px
          - gap-4: espacio horizontal entre columnas
        */}
        <div className="columns-2 sm:columns-3 md:columns-4 gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative mb-4 break-inside-avoid cursor-pointer group"
              onClick={() => openLightbox(index)}
            >
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={img.src}
                  alt={img.alt}
                  className="transform transition-transform duration-300 group-hover:scale-105 w-full h-auto"
                  width={800}
                  height={600}
                  sizes="(max-width: 640px) 100vw,
                         (max-width: 768px) 50vw,
                         (max-width: 1024px) 33vw,
                         25vw"
                  loading="lazy"
                />
              </div>
              {/* Overlay de hover */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-25 transition duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-white text-lg">Ver Imagen</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox (Modal) */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 transition-opacity duration-300"
          onClick={closeLightbox}
        >
          <div
            // Agregamos padding top (pt-16) para garantizar espacio arriba
            // y también limitamos la altura (max-h-screen) + overflow-hidden
            className="relative max-w-3xl w-full mx-4 pt-16 max-h-screen overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón Cerrar */}
            <button
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition"
              onClick={closeLightbox}
              aria-label="Cerrar"
            >
              <AiOutlineClose size={24} />
            </button>

            {/* Botón Anterior */}
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition"
              onClick={showPrev}
              aria-label="Anterior"
            >
              <AiOutlineLeft size={24} />
            </button>

            {/* Botón Siguiente */}
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition"
              onClick={showNext}
              aria-label="Siguiente"
            >
              <AiOutlineRight size={24} />
            </button>

            {/*
              Contenedor de la imagen:
              - "flex items-center justify-center" para centrar
              - "max-h-[calc(100vh-6rem)]" para no sobrepasar el alto total de la pantalla menos 6rem
            */}
            <div className="flex items-center justify-center max-h-[calc(100vh-6rem)]">
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                width={1200}
                height={800}
                className="object-contain rounded-lg"
                priority
              />
            </div>

            {/* Texto alt debajo de la imagen */}
            {images[currentIndex].alt && (
              <p className="text-center text-white mt-2">
                {images[currentIndex].alt}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;