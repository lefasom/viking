import React from 'react'

function message() {
  return (
    <div>
           <div className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Título */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center">
          ¿Qué puedes hacer con nuestras plataformas de suscripción?
        </h2>

        {/* Descripción */}
        <p className="text-lg sm:text-xl md:text-2xl text-center text-gray-300">
          En nuestro sitio, puedes acceder a las mejores plataformas de streaming y servicios de entretenimiento. Ofrecemos una variedad de opciones como Netflix, Amazon Prime, Disney+ y HBO Max para que disfrutes de lo mejor del cine, series y mucho más. ¡Todo a tu alcance, con una suscripción mensual y la posibilidad de probar sin compromiso!
        </p>

        <div className="space-y-6 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-12">
          {/* Beneficio 1 */}
          <div className="flex flex-col items-center text-center bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-500 mb-4">Acceso Instantáneo</h3>
            <p className="text-sm sm:text-base text-gray-400">
              ¡Con solo un clic, obtienes acceso instantáneo a tus series y películas favoritas! Sin largas esperas ni complicaciones.
            </p>
          </div>

          {/* Beneficio 2 */}
          <div className="flex flex-col items-center text-center bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-blue-500 mb-4">Prueba Gratuita</h3>
            <p className="text-sm sm:text-base text-gray-400">
              Disfruta de una prueba gratuita en todas las plataformas para que puedas explorar el contenido disponible sin compromisos.
            </p>
          </div>

          {/* Beneficio 3 */}
          <div className="flex flex-col items-center text-center bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-green-500 mb-4">Sin Restricciones</h3>
            <p className="text-sm sm:text-base text-gray-400">
              Accede a contenido sin restricciones: películas, series y documentales que puedes ver cuando quieras y en cualquier dispositivo.
            </p>
          </div>

          {/* Beneficio 4 */}
          <div className="flex flex-col items-center text-center bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-red-500 mb-4">Variedad de Contenido</h3>
            <p className="text-sm sm:text-base text-gray-400">
              Desde contenido exclusivo hasta los mejores clásicos, tenemos algo para todos los gustos. Explora géneros y títulos a tu propio ritmo.
            </p>
          </div>
        </div>

        {/* Llamado a la acción */}
        <div className="text-center mt-8">
          <a href="#plans" className="text-lg sm:text-xl font-bold text-white bg-blue-600 py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300">
            ¡Empieza ahora y disfruta del mejor entretenimiento!
          </a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default message