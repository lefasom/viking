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
  
  // Add more card data as needed
];

export default function CardSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const totalCards = Math.ceil(cardData.length / 2); // Calculate total sliders based on card data

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
    <div className="relative w-full flex items-center justify-center pt-12 pb-12">
      <button
        onClick={handlePrev}
        className="absolute left-0 z-10 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700"
      >
        ←
      </button>

      <div className="w-[90%] overflow-hidden">
        <div ref={sliderRef} className="flex overflow-x-hidden">
          {Array.from({ length: totalCards }).map((_, sliderIndex) => (
            <div key={sliderIndex} className="min-w-full flex justify-center shadow-lg overflow-hidden">
              {cardData.slice(sliderIndex * 2, sliderIndex * 2 + 2).map((card, cardIndex) => (
                <div key={cardIndex} className={`flex flex-col w-[45%] m-2 ${card.bgColor} items-center`}>
                  <h2 className="w-[80%] mt-6 text-2xl font-bold text-white">{card.title}</h2>
                  <p className="w-[80%] text-gray-300 mt-2 text-lg">{card.price}</p>
                  <p className="w-[80%] text-xs text-gray-400">+ impuestos aplicables</p>

                  <button className={`w-[90%] ${card.buttonColor} text-white font-bold py-2 px-4 rounded mt-4 hover:bg-opacity-80 transition duration-300`}>
                    {card.buttonLabel}
                  </button>

                  <p className="w-[70%]  mt-4 text-gray-200">{card.description}</p>

                  <ul className="w-[80%] mt-4 mb-6 items-center text-gray-300">
                    {card.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="text-green-400 mr-2 ">✔</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handleNext}
        className="absolute right-0 z-10 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700"
      >
        →
      </button>

      <div className="absolute bottom-0 flex space-x-2 mt-6">
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
