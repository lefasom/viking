'use client'
import { useState, useRef, useEffect } from 'react';

const cardData = [
  {
    title: 'NETFLIX',
    price: '1.199,00 ARS/mes',
    description: 'Disfruta de películas y series sin límites.',
    buttonLabel: 'Comenzar prueba gratuita',
    features: ['Acceso a todo el catálogo', 'Ver en cualquier dispositivo'],
    bgColor: 'bg-gray-800',
    buttonColor: 'bg-red-600',
  },
  {
    title: 'AMAZON PRIME',
    price: '899,00 ARS/mes',
    description: 'Acceso a series y películas exclusivas.',
    buttonLabel: 'Comenzar prueba gratuita',
    features: ['Envíos gratuitos en Amazon', 'Acceso a Prime Music'],
    bgColor: 'bg-gray-800',
    buttonColor: 'bg-yellow-600',
  },
  {
    title: 'DISNEY+',
    price: '1.300,00 ARS/mes',
    description: 'Accede a películas y series de Disney.',
    buttonLabel: 'Comenzar prueba gratuita',
    features: ['Acceso a todos los clásicos de Disney', 'Ver en cualquier dispositivo'],
    bgColor: 'bg-gray-800',
    buttonColor: 'bg-blue-600',
  },
  {
    title: 'HBO MAX',
    price: '1.200,00 ARS/mes',
    description: 'Disfruta de series y películas de HBO.',
    buttonLabel: 'Comenzar prueba gratuita',
    features: ['Acceso a contenido exclusivo', 'Ver en cualquier dispositivo'],
    bgColor: 'bg-gray-800',
    buttonColor: 'bg-green-600',
  },

  // Agrega más datos de tarjetas si es necesario
];

export default function CardSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const totalCards = cardData.length; // Cambiar para reflejar el número total de tarjetas

  const handleNext = () => {
    if (sliderRef.current) {
      if (currentIndex === totalCards - 1) {
        sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        setCurrentIndex(0);
      } else {
        sliderRef.current.scrollBy({ left: sliderRef.current.clientWidth, behavior: 'smooth' });
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      if (currentIndex === 0) {
        sliderRef.current.scrollTo({ left: sliderRef.current.scrollWidth, behavior: 'smooth' });
        setCurrentIndex(totalCards - 1);
      } else {
        sliderRef.current.scrollBy({ left: -sliderRef.current.clientWidth, behavior: 'smooth' });
        setCurrentIndex((prevIndex) => prevIndex - 1);
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Cambia el tiempo a 3000ms (3 segundos)

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full flex items-center justify-center pt-12 pb-12 ">
      <button
        onClick={handlePrev}
        className="absolute text-2xl left-4 z-10 w-12 h-12 bg-gray-600 text-white rounded-full hover:bg-gray-700"
      >
        ←
      </button>

      <div className="w-[70%] overflow-hidden ">
        <div ref={sliderRef} className="flex overflow-x-hidden">
          {cardData.map((card, cardIndex) => (
           <div key={cardIndex} className="min-w-full flex justify-center shadow-lg overflow-hidden">
           <div className={`w-full   ${card.bgColor}  `}>
             <div className='w-[80%] mx-auto my-6 '>
               {/* Título aún más pequeño en móviles */}
               <h2 className="text-2xl md:text-xl sm:text-lg font-bold text-white">{card.title}</h2>
               
               {/* Precio aún más pequeño */}
               <p className="text-lg md:text-base sm:text-sm text-gray-300 mt-2">{card.price}</p>
               
               {/* Información de impuestos aún más pequeña */}
               <p className="mx-5 text-sm md:text-xs sm:text-[10px] text-gray-400">+ impuestos aplicables</p>
         
               {/* Botón aún más pequeño */}
               <button className={`w-full ${card.buttonColor} text-white font-bold py-2 px-3 sm:py-1 sm:px-2 text-sm sm:text-xs rounded mt-4 hover:bg-opacity-80 transition duration-300`}>
                 {card.buttonLabel}
               </button>
         
               {/* Descripción aún más pequeña */}
               <p className="text-sm md:text-xs sm:text-[10px] text-gray-200 mt-4">{card.description}</p>
         
               {/* Lista de características aún más pequeña */}
               <ul className="mx-auto text-sm md:text-xs sm:text-[10px] text-gray-300 mt-4">
                 {card.features.map((feature, featureIndex) => (
                   <li key={featureIndex} className="flex flex-wrap items-center">
                     {/* Icono con ajuste de tamaño */}
                     <span className="text-base md:text-sm sm:text-xs text-green-400 mr-2">✔</span> {feature}
                   </li>
                 ))}
               </ul>
             </div>
           </div>
         </div>
         




          ))}
        </div>
      </div>

      <button
        onClick={handleNext}
        className="absolute text-2xl z-10 w-12 h-12 right-4 p-2 bg-gray-600 text-white rounded-full hover:bg-gray-700"
      >
        →
      </button>

      <div className="absolute  bottom-0 flex space-x-2 mt-6">
        {[...Array(totalCards)].map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-400'}`}
          ></div>
        ))}
      </div>
    </div>
  );
}
