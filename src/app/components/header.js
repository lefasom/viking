'use client'
import Image from 'next/image';
import fondo from '../public/2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faTelegram, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Header() {
  return (
    <header className="relative w-full h-[70vh] p-16">
      {/* Fondo con desenfoque */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${fondo.src})`, filter: 'blur(8px)' }}></div>
      <div className="relative max-w-6xl mx-auto flex flex-col justify-center items-center h-full text-center text-white">
        
        {/* Título con sombra */}
        <h1 className="text-5xl sm:text-6xl text-slate-300 font-extrabold mb-6 drop-shadow-lg">Streaming Hub</h1>
        
        {/* Subtítulo opcional */}
        <p className="text-lg sm:text-xl text-gray-200 mb-8">
          Tu centro de entretenimiento con las mejores plataformas de streaming.
        </p>

        {/* Navegación con iconos de redes sociales */}
        <nav className="flex justify-center space-x-6">
          <ul className="flex space-x-8">
            <li>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center text-green-400 hover:text-green-300 transition transform hover:scale-110 duration-300">
                <FontAwesomeIcon icon={faWhatsapp} className="h-14 w-14" />
              </a>
            </li>
            <li>
              <a href="https://t.me/yourtelegramusername" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-400 hover:text-blue-300 transition transform hover:scale-110 duration-300">
                <FontAwesomeIcon icon={faTelegram} className="h-14 w-14" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/yourinstagramusername" target="_blank" rel="noopener noreferrer" className="flex items-center text-pink-400 hover:text-pink-300 transition transform hover:scale-110 duration-300">
                <FontAwesomeIcon icon={faInstagram} className="h-14 w-14" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
