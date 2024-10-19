import Image from 'next/image'
import React from 'react'
import img from '../public/viking.png'

function header() {
  return (
    <div className="bg-[#FEF6DF] w-full h-96 relative">
    <Image
      src={img}
      alt="Descripción de la imagen"
      layout="fill" // Hace que la imagen ocupe todo el espacio del contenedor
      objectFit="contain" // Ajusta cómo se recorta la imagen (puede ser cover, contain, etc.)
      className="rounded-lg" // Aplica clases de Tailwind, como bordes redondeados
    />
  </div>
  )
}

export default header