import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faTelegram, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 bg-opacity-25 text-white py-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-2xl font-bold mb-4">Síguenos en nuestras redes</h2>
        <div className="flex space-x-6 mb-4">
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-white transition duration-300">
            <FontAwesomeIcon icon={faWhatsapp} className="h-6 w-6" />
          </a>
          <a href="https://t.me/yourtelegramusername" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-white transition duration-300">
            <FontAwesomeIcon icon={faTelegram} className="h-6 w-6" />
          </a>
          <a href="https://instagram.com/yourinstagramusername" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-white transition duration-300">
            <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
          </a>
        </div>
        <h2 className="text-lg font-semibold mb-2">Creado por [Tu Nombre]</h2>
        <a 
          href="https://github.com/yourgithubusername" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center text-gray-300 hover:text-white transition duration-300"
        >
          <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
        </a>
        <p className="mt-4 text-xs text-gray-400">© {new Date().getFullYear()} Streaming Hub. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
