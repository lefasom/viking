'use client'; // Esto marca el componente como un Client Component

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import img1 from '../public/1.png';
import img2 from '../public/2.png';
import img3 from '../public/3.png';
import img4 from '../public/4.png';
function Galery() {
  const images = [ img1, img2, img3, img4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Cambia de imagen cada 3 segundos
    }, 3000);
    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonte
  }, [images.length]);

  return (
    <div className="mb-6 relative w-full h-96 ">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute  top-0 left-0 w-full h-full transition-transform duration-1000 ease-in-out ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
        > 
          <Image
            src={image}
            alt={`Imagen ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className=""
          />
        </div>
      ))}

       {/* Indicadores */}
       <div className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-8 h-1 rounded ${currentIndex === index ? 'bg-white' : 'bg-gray-400'} transition-colors duration-300`}
          />
        ))}
      </div>
    </div>
  );
}

export default Galery;
