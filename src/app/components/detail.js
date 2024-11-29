'use client'
import Link from 'next/link';
import { useState } from 'react';

const Cart = () => {


    // Supongamos que estos son los items que el usuario ha agregado al carrito
    const [cartItems, setCartItems] = useState([
        {
            title: 'NETFLIX',
            price: '1.199,00 ARS/mes',
        },
        {
            title: 'AMAZON PRIME',
            price: '899,00 ARS/mes',
        },
        {
            title: 'DISNEY+',
            price: '1.300,00 ARS/mes',
        },
        {
            title: 'NETFLIX',
            price: '1.199,00 ARS/mes',
        },
        {
            title: 'AMAZON PRIME',
            price: '899,00 ARS/mes',
        },
        {
            title: 'DISNEY+',
            price: '1.300,00 ARS/mes',
        },
        {
            title: 'NETFLIX',
            price: '1.199,00 ARS/mes',
        },
        {
            title: 'AMAZON PRIME',
            price: '899,00 ARS/mes',
        },
        {
            title: 'DISNEY+',
            price: '1.300,00 ARS/mes',
        },
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

        // El mensaje se formatea con salto de línea (%0A) y se genera el enlace
        const message = `${greeting}%0A%0ADetalles del pedido:%0A${itemsDetails}%0A%0ATotal: ${total} ARS%0A%0AGracias por tu atención!`;
        
        return `https://wa.me/2616615057?text=${message}`;
    };

    return (
        <>
        
                <div className='fixed bg-black bg-opacity-80 z-50 flex right-0 top-0 w-full h-screen'>
                    <div className='absolute right-3 top-3'>
                        <Link
                            className='text-cyan-50 p-3 text-2xl'
                            href={'/'}
                        >
                            X
                        </Link>
                    </div>
                    <div className="m-auto mt-12 w-[70%] p-4 max-w-md space-y-6 h-screen overflow-y-auto">
                        <h2 className="text-2xl font-bold text-center text-gray-300">Tu carrito de compras</h2>

                        {cartItems.length === 0 ? (
                            <p className="text-center text-gray-500">Tu carrito está vacío.</p>
                        ) : (
                            <div className="space-y-4">
                                {cartItems.map((item, index) => (
                                    <div key={index} className="flex justify-between items-center bg-gray-800 text-white rounded-sm p-4">
                                        <div>
                                            <h3 className="text-lg font-semibold">{item.title}</h3>
                                            <p className="text-sm">{item.price}</p>
                                        </div>
                                        <button
                                            className="text-red-500 font-bold"
                                            onClick={() => removeItem(index)}
                                        >
                                            Eliminar
                                        </button>
                                    </div>
                                ))}

                                <div className="bg-gray-900 p-4 rounded-sm">
                                    <h3 className="text-xl font-bold text-white">Total: {calculateTotal().toLocaleString()} ARS</h3>
                                    <a
                                        href={createWhatsAppMessage()} // Enlace para enviar el mensaje
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-4 w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-300"
                                    >
                                        Confirmar Pedido
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
           
        </>
    );
};

export default Cart;
