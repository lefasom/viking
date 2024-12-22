'use client';
import { useEffect, useState } from 'react';
import { get_card, delete_card } from '../redux/dataAction'; // Importa las funciones
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';

const page = () => {
    const card = useSelector(state => state.data.data_array)

    const dispatch = useDispatch()

    const getCard = () => {
        dispatch(get_card())
    }

    // Función para obtener todos los elementos al cargar la página
    useEffect(() => {
        getCard()
    }); // Añadido el arreglo vacío para ejecutar solo al cargar la página

    // Función para eliminar un ítem
    const handleDelete = async (id) => {
        const isConfirmed = window.confirm("¿Estás seguro de que quieres eliminar este producto?");
        if (isConfirmed) {
            await delete_card(id);  // Función que elimina el ítem de Firebase
        }
    };

    return (
        <div className='p-6'>
            {/* Link para volver atrás */}
            <div className='mb-6'>
                <Link href='/administrador'>
                    <FontAwesomeIcon icon={faArrowLeft} className='text-3xl text-gray-400' />
                </Link>
            </div>

            <h2 className="text-2xl font-bold text-gray-400 mb-4">Lista de Productos</h2>
            <ul className="space-y-4">
                {card.map((card) => (
                    <li key={card.id} className="p-4 bg-gray-800 rounded-lg shadow-lg flex justify-between items-center">
                        <div>
                            <h3 className="text-xl text-white">{card.title}</h3>
                            <p className="text-gray-300">{card.description}</p>
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
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default page;
