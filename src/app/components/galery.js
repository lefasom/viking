'use client'; // Esto marca el componente como un Client Component

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import img1 from '../public/1.png';
import img2 from '../public/2.png';
import img3 from '../public/3.png';
import img4 from '../public/4.png';

function Galery() {
  const images = [img1, img2, img3, img4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Cambia de imagen cada 4 segundos
    }, 4000);
    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonte
  }, [images.length]);

  return (
    <div className="mb-8 relative w-[90%] max-w-6xl mx-auto rounded-lg shadow-lg overflow-hidden bg-gradient-to-r from-slate-800 via-gray-700 to-gray-600">
      {/* Galería de imágenes */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full h-96 flex-shrink-0 relative">
            <Image
              src={image}
              alt={`Imagen ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-3">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-8 h-2 rounded-full ${currentIndex === index ? 'bg-orange-500' : 'bg-gray-300'} transition-colors duration-300 transform hover:scale-110`}
            onClick={() => setCurrentIndex(index)} // Permite cambiar la imagen al hacer clic en el indicador
          />
        ))}
      </div>
    </div>
  );
}

export default Galery;
