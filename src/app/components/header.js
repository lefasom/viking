'use client'
import Image from 'next/image';
import fondo from '../public/2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faTelegram, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Header() {
  return (
    <header className="relative w-full h-[50vh] p-16">
      {/* Fondo con desenfoque */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${fondo.src})`, filter: 'blur(23px)' }}></div>


      <div className="relative max-w-6xl mx-auto flex flex-col justify-center items-center h-full text-center text-white">
        {/* Título con sombra */}
        <h1 className="text-5xl sm:text-6xl text-slate-200 font-extrabold mb-6 drop-shadow-lg">Viking store</h1>

        {/* Flecha animada */}
        <h3 className="pb-6 text-stone-50 font-semibold"></h3>
        <div className="animate-bounce mb-6">
          <svg className="w-12 h-12 text-solid-400 animate-point-to-icons" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M18.5861 8.0858C18.1956 7.69528 17.5624 7.69528 17.1719 8.0858L11.879 13.3787L6.58609 8.0858C6.19556 7.69528 5.5624 7.69528 5.17187 8.0858L4.46477 8.79291C4.07424 9.18343 4.07424 9.8166 4.46477 10.2071L10.8183 16.5607C11.4041 17.1465 12.3539 17.1465 12.9396 16.5607L19.2932 10.2071C19.6837 9.8166 19.6837 9.18343 19.2932 8.79291L18.5861 8.0858Z" className="fill-current" />
          </svg>
        </div>

        {/* Navegación con iconos de redes sociales */}
        <nav className="flex justify-center space-x-6">
          <ul className="flex space-x-8">
            <li>
              <a href="https://t.me/@Josesitocu" target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-200 hover:text-blue-400 transition transform hover:scale-110 duration-300">
                <FontAwesomeIcon icon={faTelegram} className="h-14 w-14" />
              </a>
            </li>
            <li>
              <a href="https://wa.me/2612725968" target="_blank" rel="noopener noreferrer" className="flex items-center animate-pulse text-green-400 hover:text-green-400 transition transform hover:scale-110 duration-300">
                <FontAwesomeIcon icon={faWhatsapp} className="h-14 w-14" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/yourinstagramusername" target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-100 hover:text-pink-400 transition transform hover:scale-110 duration-300">
                <FontAwesomeIcon icon={faInstagram} className="h-14 w-14" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
