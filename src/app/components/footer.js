import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faTelegram, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="w-full mt-10 bg-gradient-to-t from-slate-950 via-gray-800 to-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        {/* Título Redes Sociales */}
        <h2 className="text-3xl font-bold text-gray-200 mb-6">Síguenos en nuestras redes</h2>
        
        {/* Iconos Redes Sociales */}
        <div className="flex space-x-8 mb-6">
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-400 hover:text-green-500 transition duration-300 transform hover:scale-110"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="h-8 w-8" />
          </a>
          <a
            href="https://t.me/yourtelegramusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-400 hover:text-blue-500 transition duration-300 transform hover:scale-110"
          >
            <FontAwesomeIcon icon={faTelegram} className="h-8 w-8" />
          </a>
          <a
            href="https://instagram.com/yourinstagramusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-400 hover:text-pink-500 transition duration-300 transform hover:scale-110"
          >
            <FontAwesomeIcon icon={faInstagram} className="h-8 w-8" />
          </a>
        </div>

        {/* Separador */}
        <div className="border-t border-gray-600 w-full mb-6"></div>

        {/* Información sobre el creador */}
        <h2 className="text-lg font-semibold text-gray-300 mb-2">Creado por [Tu Nombre]</h2>

        {/* Icono GitHub */}
        <a 
          href="https://github.com/yourgithubusername" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center text-gray-400 hover:text-white transition duration-300 transform hover:scale-110 mb-4"
        >
          <FontAwesomeIcon icon={faGithub} className="h-8 w-8 mr-2" />
          <span>Visita mi GitHub</span>
        </a>

        {/* Derechos de Autor */}
        <p className="text-xs text-gray-400">© {new Date().getFullYear()} Streaming Hub. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
