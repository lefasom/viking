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
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Cambia de imagen cada 3 segundos
    }, 4000);
    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonte
  }, [images.length]);

  return (
    <>
      <div className="mb-6 relative w-[90%] h-96 overflow-hidden">
        <div
          className="flex transition-transform duration-1000 ease-in-out "
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full h-96 flex-shrink-0 relative" >
              <Image
                src={image}
                alt={`Imagen ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>


      </div>
      {/* Indicadores */}
      <div className="flex w-full justify-center   space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-8 h-1 rounded ${currentIndex === index ? 'bg-orange-400' : 'bg-gray-100'} transition-colors duration-300`}
          />
        ))}

      </div>
    </>);
}

export default Galery;
