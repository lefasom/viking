'use client'
import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { add_card } from '../redux/dataAction';

const Pages = () => {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [features, setFeatures] = useState(['']);

    // Función para agregar una nueva característica a la lista
    const addFeature = () => {
        setFeatures([...features, '']);
    };

    // Función para manejar cambios en las características
    const handleFeatureChange = (index, value) => {
        const updatedFeatures = [...features];
        updatedFeatures[index] = value;
        setFeatures(updatedFeatures);
    };

    // Función para agregar un nuevo item al carrito
    const createItem = async () => {
        if (!title || !price || !description || !image || features.some(f => f === '')) {
            // Verifica si alguno de los campos está vacío
            alert("Por favor, complete todos los campos antes de crear el producto.");
            return;
        }

        console.log("elemento creado: ", { title, price, description, features, image });

        await add_card({ title, price, description, features, image });

        setTitle('');
        setPrice('');
        setDescription('');
        setImage('');
        setFeatures(['']);
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
                <h2 className="text-2xl font-bold text-center text-gray-400 mb-4">Crear nuevo producto</h2>

                {/* Formulario para agregar un nuevo ítem */}
                <div className="space-y-4 mb-6">
                    <input
                        type="text"
                        placeholder="Título del ítem"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-2 rounded bg-gray-800 text-gray-300"
                    />
                    <input
                        type="text"
                        placeholder="Precio del ítem (ej: 5.000,00 ARG/mes)"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full p-2 rounded bg-gray-800 text-gray-300"
                    />
                    <input
                        type="text"
                        placeholder="Descripción del ítem"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full p-2 rounded bg-gray-800 text-gray-300"
                    />
                    <input
                        type="text"
                        placeholder="URL de la imagen"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        className="w-full p-2 rounded bg-gray-800 text-gray-300"
                    />

                    {/* Campos para las características del ítem */}
                    {features.map((feature, index) => (
                        <input
                            key={index}
                            type="text"
                            placeholder={`Característica ${index + 1}`}
                            value={feature}
                            onChange={(e) => handleFeatureChange(index, e.target.value)}
                            className="w-full p-2 rounded bg-gray-800 text-gray-300"
                        />
                    ))}
                    <button
                        onClick={addFeature}
                        className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                    >
                        Añadir característica
                    </button>

                    <button
                        onClick={createItem}
                        className="w-full p-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300 mt-4"
                    >
                        Crear
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Pages;
