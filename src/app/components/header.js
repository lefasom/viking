import Image from 'next/image';
import React from 'react';
import img from '../public/viking4.png';
import pl from '../public/pl.jpg';

function Header() {
  return (
    <div className="relative w-full pb-5">

      {/* Contenedor para la imagen de fondo */}
      <div className="absolute inset-0 w-full h-96 z-0">
        <Image
          src={pl}
          alt="Descripción de la imagen de fondo"
          layout="fill"
          objectFit="cover" // Hace que la imagen ocupe todo el contenedor de fondo
          className="rounded-lg" 
        />
      </div>

      {/* Contenedor para la imagen principal */}
      <div className="relative bg-[#FEF6DF] bg-opacity-80 w-full h-96 z-10">
        <Image
          src={img}
          alt="Descripción de la imagen principal"
          layout="fill"
          objectFit="contain"
          className="rounded-lg"
        />
      </div>

    </div>
  );
}

export default Header;
