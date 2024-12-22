'use client';
import { useEffect, useState } from 'react';
import { get_card_by_id, update_card } from '../../redux/dataAction'; // Asegúrate de tener estas funciones
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const EditItem = () => {
    const { id } = useParams(); // Obtener el id desde la URL
    const router = useRouter();

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [features, setFeatures] = useState([]);

    // Función para cargar los datos del ítem
    useEffect(() => {
        const loadItem = async () => {
            const item = await get_card_by_id(id);  // Obtener el ítem por ID
            if (item) {
                setTitle(item.title);
                setPrice(item.price);
                setDescription(item.description);
                setImage(item.image);
                setFeatures(item.features);
            }
        };
        if (id) {
            loadItem();
        }
    }, [id]);

    // Función para manejar cambios en las características
    const handleFeatureChange = (index, value) => {
        const updatedFeatures = [...features];
        updatedFeatures[index] = value;
        setFeatures(updatedFeatures);
    };

    // Función para actualizar el ítem en Firebase
    const handleUpdate = async () => {
        if (title && price && description && image && features.length) {
            await update_card(id, { title, price, description, features, image });  // Actualizar el ítem
            router.push('/');  // Redirigir al listado después de actualizar
        }
    };

    // Función para añadir una nueva característica
    const addFeature = () => {
        setFeatures([...features, '']);
    };

    return (
        <div className='fixed bg-black bg-opacity-80 z-50 flex right-0 top-0 w-full h-full'>
            {/* Volver atrás */}
            <div className='absolute left-3 top-3'>
                <Link className='p-3 text-slate-100 text-3xl' href={'/administrador'}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </Link>
            </div>

            {/* Formulario de edición */}
            <div className="m-auto mt-6 w-full max-w-lg p-4 bg-black rounded-lg shadow-lg h-full">
                <h2 className="text-2xl font-bold text-center text-gray-400 mb-4">Editar Producto</h2>

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

                    {/* Campos para editar las características del ítem */}
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
                        onClick={handleUpdate}
                        className="w-full p-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300 mt-4"
                    >
                        Guardar Cambios
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditItem;
