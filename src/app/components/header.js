import Image from 'next/image';
import fondo from '../public/2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faTelegram, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Header() {
  return (
    <header className="relative w-full h-96 m-12">
      <Image 
        src={fondo} 
        alt="Fondo Viking" 
        layout="fill" 
        objectFit="cover" 
        className="absolute inset-0" 
      />
      <div className="absolute inset-0 bg-black opacity-55"></div>
      <div className="relative max-w-6xl mx-auto flex flex-col justify-center items-center h-full text-center text-white">
        <h1 className="text-4xl text-pink-600 font-bold mb-4">Streaming Hub</h1>
            <nav className='flex justify-center m-5'>
          <ul className="flex space-x-12">
            <li>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center text-green-400 hover:text-green-300 transition duration-300">
                <FontAwesomeIcon icon={faWhatsapp} className="h-12 w-12" />
              </a>
            </li>
            <li>
              <a href="https://t.me/yourtelegramusername" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-400 hover:text-blue-300 transition duration-300">
                <FontAwesomeIcon icon={faTelegram} className="h-12 w-12" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/yourinstagramusername" target="_blank" rel="noopener noreferrer" className="flex items-center text-pink-400 hover:text-pink-300 transition duration-300">
                <FontAwesomeIcon icon={faInstagram} className="h-12 w-12" />
              </a>
            </li>
          </ul>
        </nav>
      </div>

        
    </header>
  );
}
