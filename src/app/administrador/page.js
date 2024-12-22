'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faPlus, faHome } from '@fortawesome/free-solid-svg-icons';

export default function AdminPanel() {
  return (
    <header className="relative w-full h-[100vh] p-16 bg-gray-800">
      <div className="relative max-w-6xl mx-auto flex flex-col justify-center items-center h-full text-center text-white">
        {/* Título */}
        <h1 className="text-5xl sm:text-6xl text-slate-200 font-extrabold mb-6">Panel de Administración</h1>

        {/* Navegación con enlaces */}
        <div className="flex flex-col space-y-8 mt-6">
          {/* Enlace para el Sitio Web con icono */}
          <a
            href="/"
            className="text-2xl text-white bg-blue-600 hover:bg-blue-800 px-6 py-3 rounded-lg border-2 border-blue-600 hover:border-blue-800 transition transform hover:scale-110 duration-300 flex items-center"
          >
            <FontAwesomeIcon icon={faHome} className="mr-2 h-8 w-8" />
            Sitio Web
          </a>
          {/* Enlace para Listar Productos */}
          <a
            href="/list"
            className="text-2xl text-white bg-blue-600 hover:bg-blue-800 px-6 py-3 rounded-lg border-2 border-blue-600 hover:border-blue-800 transition transform hover:scale-110 duration-300 flex items-center"
          >
            <FontAwesomeIcon icon={faList} className="mr-2 h-8 w-8" />
            Listar Productos
          </a>
          {/* Enlace para Crear Producto */}
          <a
            href="/form"
            className="text-2xl text-white bg-green-600 hover:bg-green-800 px-6 py-3 rounded-lg border-2 border-green-600 hover:border-green-800 transition transform hover:scale-110 duration-300 flex items-center"
          >
            <FontAwesomeIcon icon={faPlus} className="mr-2 h-8 w-8" />
            Crear Producto
          </a>
        </div>
      </div>
    </header>
  );
}
