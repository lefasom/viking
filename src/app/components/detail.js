'use client'
import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; // Corregido

const Cart = () => {
    const [cartItems, setCartItems] = useState([
        { title: 'NETFLIX', price: '1.199,00 ARS/mes' },
        { title: 'AMAZON PRIME', price: '899,00 ARS/mes' },
        { title: 'DISNEY+', price: '1.300,00 ARS/mes' },
    ]);

    // Función para eliminar un item del carrito
    const removeItem = (index) => {
        setCartItems(cartItems.filter((_, itemIndex) => itemIndex !== index));
    };

    // Función para calcular el total del carrito
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + parseFloat(item.price.replace(' ARS/mes', '').replace('.', '').replace(',', '.')), 0);
    };

    // Crear el mensaje para enviar a WhatsApp
    const createWhatsAppMessage = () => {
        const itemsDetails = cartItems.map(item => `${item.title}: ${item.price}`).join('%0A');
        const total = calculateTotal().toLocaleString();
        const greeting = "¡Hola! Me gustaría hacer un pedido desde tu sitio web.";
        const message = `${greeting}%0A%0ADetalles del pedido:%0A${itemsDetails}%0A%0ATotal: ${total} ARS%0A%0AGracias por tu atención!`;
        return `https://wa.me/2616615057?text=${message}`;
    };

    return (
        <div className='fixed bg-black bg-opacity-80 z-50 flex right-0 top-0 w-full h-full'>
            {/* Reemplazar la "X" con una flecha */}
            <div className='absolute left-3 top-3'>
                <Link className=' p-3 text-slate-100 text-3xl' href={'/'}>
                    <FontAwesomeIcon className='' icon={faArrowLeft} />
                </Link>
            </div>
            {/* Contenedor del carrito ocupando toda la pantalla */}
            <div className="m-auto mt-6 w-full max-w-lg p-4 bg-black rounded-lg shadow-lg h-full">
                <h2 className="text-2xl font-bold text-center text-gray-400 mb-4">Tu carrito de compras</h2>

                {cartItems.length === 0 ? (
                    <p className="text-center text-gray-400">Tu carrito está vacío.</p>
                ) : (
                    <div className="space-y-4 h-[70%] overflow-y-auto">
                        {cartItems.map((item, index) => (
                            <div key={index} className="flex justify-between items-center bg-gray-800 rounded p-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-300">{item.title}</h3>
                                    <p className="text-sm text-gray-200">{item.price}</p>
                                </div>
                                <button className="text-red-400 font-bold" onClick={() => removeItem(index)}>
                                    Eliminar
                                </button>
                            </div>
                        ))}

                        {/* Total sin el costo de envío */}
                        <div className="border-t border-gray-300 pt-4">
                            <div className="flex justify-between text-gray-400 font-bold">
                                <span>Total:</span>
                                <span>{calculateTotal().toLocaleString()} ARS</span>
                            </div>
                        </div>

                        {/* Botón para confirmar el pedido vía WhatsApp */}
                        <a
                            href={createWhatsAppMessage()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center p-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
                        >
                            Confirmar Pedido
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
