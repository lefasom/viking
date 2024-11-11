'use client'
import { useState } from 'react';

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
];

export default function CardSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = cardData.length;

  return (
    <div className="relative w-full flex flex-col items-center justify-center pt-12 pb-12 space-y-6">
      <div className="w-full max-w-md space-y-6">
        {cardData.map((card, cardIndex) => (
          <div key={cardIndex} className={`w-[90%] sm:w-[80%] md:w-[70%] mx-auto ${card.bgColor} rounded-sm shadow-lg`}>
            <div className="p-6 mx-auto">
              {/* Título */}
              <h2 className="text-2xl sm:text-xl md:text-lg font-bold text-white">{card.title}</h2>

              {/* Precio */}
              <p className="text-lg sm:text-base md:text-sm text-gray-300 mt-2">{card.price}</p>

              {/* Información de impuestos */}
              <p className="mx-5 text-sm sm:text-xs text-gray-400">+ impuestos aplicables</p>

              {/* Botón */}
              <button className={`w-full ${card.buttonColor} text-white font-bold py-2 px-4 sm:py-1 sm:px-2 text-sm sm:text-xs rounded mt-4 hover:bg-opacity-80 transition duration-300`}>
                {card.buttonLabel}
              </button>

              {/* Descripción */}
              <p className="text-sm sm:text-xs md:text-[12px] text-gray-200 mt-4">{card.description}</p>

              {/* Lista de características */}
              <ul className="mx-auto text-sm sm:text-xs md:text-[12px] text-gray-300 mt-4">
                {card.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex flex-wrap items-center mb-2">
                    <span className="text-base sm:text-sm md:text-xs text-green-400 mr-2">✔</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
