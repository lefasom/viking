export default function CardGroup() {
  return (
    <div className="flex flex-col items-center space-y-8 pt-12 pb-12">
      {/* Tarjeta de Netflix */}
      <div className="max-w-sm mx-auto bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-white">NETFLIX</h2>
          <p className="text-gray-300 mt-2 text-lg">1.199,00 ARS/mes</p>
          <p className="text-xs text-gray-400">+ impuestos aplicables</p>

          <button className="w-full bg-red-600 text-white font-bold py-2 px-4 rounded mt-4 hover:bg-red-500 transition duration-300">
            Comenzar prueba gratuita
          </button>

          <p className="mt-4 text-gray-200">
            Disfruta de películas y series sin límites.
          </p>

          <ul className="mt-4 text-gray-300">
            <li className="flex items-center">
              <span className="text-green-400 mr-2">✔</span> Acceso a todo el catálogo
            </li>
            <li className="flex items-center">
              <span className="text-green-400 mr-2">✔</span> Ver en cualquier dispositivo
            </li>
          </ul>
        </div>
      </div>

      {/* Tarjeta de Amazon Prime */}
      <div className="mx-auto  bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-white">AMAZON PRIME</h2>
          <p className="text-gray-300 mt-2 text-lg">899,00 ARS/mes</p>
          <p className="text-xs text-gray-400">+ impuestos aplicables</p>

          <button className="w-full bg-yellow-600 text-black font-bold py-2 px-4 rounded mt-4 hover:bg-yellow-500 transition duration-300">
            Comenzar prueba gratuita
          </button>

          <p className="mt-4 text-gray-200">
            Acceso a series y películas exclusivas.
          </p>

          <ul className="mt-4 text-gray-300">
            <li className="flex items-center">
              <span className="text-green-400 mr-2">✔</span> Envíos gratuitos en Amazon
            </li>
            <li className="flex items-center">
              <span className="text-green-400 mr-2">✔</span> Acceso a Prime Music
            </li>
          </ul>
        </div>
      </div>

      {/* Tarjeta de YouTube Premium */}
      <div className="max-w-sm mx-auto bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-white">YOUTUBE PREMIUM</h2>
          <p className="text-gray-300 mt-2 text-lg">119,00 ARS/mes</p>
          <p className="text-xs text-gray-400">+ impuestos aplicables</p>

          <button className="w-full bg-red-600 text-white font-bold py-2 px-4 rounded mt-4 hover:bg-red-500 transition duration-300">
            Comenzar prueba gratuita
          </button>

          <p className="mt-4 text-gray-200">
            Disfruta de videos sin anuncios y acceso a YouTube Music.
          </p>

          <ul className="mt-4 text-gray-300">
            <li className="flex items-center">
              <span className="text-green-400 mr-2">✔</span> Acceso a YouTube Originals
            </li>
            <li className="flex items-center">
              <span className="text-green-400 mr-2">✔</span> Reproducción en segundo plano
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
