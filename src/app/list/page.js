'use client';
import { useEffect, useState } from 'react';
import { get_card, delete_card } from '../redux/dataAction'; // Importa las funciones
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';

const page = () => {
    const card = useSelector(state => state.data.data_array);
    const dispatch = useDispatch();

    const getCard = () => {
        dispatch(get_card());
    };

    // Función para obtener todos los elementos al cargar la página
    useEffect(() => {
        getCard();
    }); // Añadido el arreglo vacío para ejecutar solo al cargar la página

    // Función para eliminar un ítem
    const handleDelete = async (id) => {
        const isConfirmed = window.confirm("¿Estás seguro de que quieres eliminar este producto?");
        if (isConfirmed) {
            await delete_card(id);  // Función que elimina el ítem de Firebase
        }
    };

    return (
        <div className='fixed bg-black bg-opacity-80 z-50 flex right-0 top-0 w-full h-full'>
            {/* Reemplazar la "X" con una flecha */}
            <div className='absolute left-3 top-3'>
                <Link className='p-3 text-slate-100 text-3xl' href={'/administrador'}>
                    <FontAwesomeIcon className='' icon={faArrowLeft} />
                </Link>
            </div>

            {/* Contenedor del carrito ocupando toda la pantalla */}
            <div className="m-auto mt-6 w-full max-w-lg p-4 bg-black rounded-lg shadow-lg h-full">
                <h2 className="text-2xl font-bold text-center text-gray-400 mb-4">Lista de Productos</h2>

                {card.length === 0 ? (
                    <p className="text-center text-gray-400">No hay productos en la lista.</p>
                ) : (
                    <div className="space-y-4 h-[87%] overflow-y-auto">
                        {card.map((card) => (
                            <div key={card.id} className="flex justify-between items-center bg-gray-800 rounded p-4">
                                <div className="w-16 h-16 bg-cover bg-center rounded-md" style={{ backgroundImage: `url(${card.image})` }}></div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-300">{card.title}</h3>
                                </div>
                                <div className="flex space-x-3">
                                    {/* Botón de Editar */}
                                    <Link href={`/edit/${card.id}`}>
                                        <FontAwesomeIcon icon={faEdit} className="text-blue-500 hover:text-blue-600" />
                                    </Link>

                                    {/* Botón de Eliminar */}
                                    <button onClick={() => handleDelete(card.id)}>
                                        <FontAwesomeIcon icon={faTrash} className="text-red-500 hover:text-red-600" />
                                    </button>
                                </div>
                            </div>
                        ))}

                    </div>
                )}
            </div>
        </div>
    );
};

export default page;
