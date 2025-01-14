'use client'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { discard, set_cart } from '../redux/cartAction';

export default function CardSlider() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cart);
  const card = useSelector(state => state.data.data_array);

  const addOfert = (card) => {
    dispatch(set_cart(card));
  };

  const deleteCard = (title) => {
    dispatch(discard(title));
  };

  const isInCart = (card) => {
    return !cart.some(item => item.title === card.title);
  };

  // Ordenar los elementos por relevancia de menor a mayor
  const sortedCard = [...card].sort((a, b) => a.relevancia - b.relevancia);

  useEffect(() => {
    console.log(sortedCard)
  });

  return (
    <div className="relative w-full flex flex-col items-center justify-center pt-12 pb-12 space-y-6">
      <div className="w-full max-w-md space-y-6">
        {sortedCard.map((card, cardIndex) => (
          <div key={cardIndex} className="w-[90%] sm:w-[80%] md:w-[70%] mx-auto bg-gray-800 rounded-lg shadow-xl overflow-hidden">
            <div className="flex p-6 items-start">
              {/* Primer div: Título, Imagen y Precio */}
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-cover bg-center rounded-md" style={{ backgroundImage: `url(${card.image})` }}></div>

                <div className="flex-1">
                  {/* Título */}
                  <h2 className="text-2xl sm:text-xl md:text-lg font-bold text-white">{card.title}</h2>

                  {/* Precio */}
                  <p className="text-lg sm:text-base md:text-sm text-gray-300 mt-2">$ {card.price}</p>
                </div>
              </div>
            </div>

            {/* Segundo div: Descripción, Características y Botón */}
            <div className="p-6 -mt-8">
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

              {/* Botón dinámico según si el producto está en el carrito */}
              {isInCart(card) ?
                <button
                  className={`w-full bg-green-600 text-white font-bold py-2 px-4 sm:py-1 sm:px-2 text-sm sm:text-xs rounded mt-4 hover:bg-opacity-80 transition duration-300`}
                  onClick={() => addOfert(card)}
                >
                  Agregar
                </button>
                :
                <button
                  className={`w-full bg-red-600 text-white font-bold py-2 px-4 sm:py-1 sm:px-2 text-sm sm:text-xs rounded mt-4 hover:bg-opacity-80 transition duration-300`}
                  onClick={() => deleteCard(card)}
                >
                  Eliminar
                </button>
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
