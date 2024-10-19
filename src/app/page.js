import Image from "next/image";
import Header from "./components/header";
import img2 from './public/viking.png'


export default function Home() {
  return (
    <div className="grid place-items-center">
      <Header />

      <div class="grid w-3/4 place-items-center grid-cols-2 gap-4 p-4 ">
        <div class="w-40 h-40 bg-gray-200">
          <Image
            src={img2}
            alt="Descripción de la imagen"
            layout="" // Hace que la imagen ocupe todo el espacio del contenedor
            objectFit="contain" // Ajusta cómo se recorta la imagen (puede ser cover, contain, etc.)
            className="rounded-lg" // Aplica clases de Tailwind, como bordes redondeados
          />
        </div>

        <div class="w-40 h-40 bg-gray-200">

          <Image
            src={img2}
            alt="Descripción de la imagen"
            layout="" // Hace que la imagen ocupe todo el espacio del contenedor
            objectFit="contain" // Ajusta cómo se recorta la imagen (puede ser cover, contain, etc.)
            className="rounded-lg" // Aplica clases de Tailwind, como bordes redondeados
          />
        </div>
        <div class="w-40 h-40 bg-gray-200">

          <Image
            src={img2}
            alt="Descripción de la imagen"
            layout="" // Hace que la imagen ocupe todo el espacio del contenedor
            objectFit="contain" // Ajusta cómo se recorta la imagen (puede ser cover, contain, etc.)
            className="rounded-lg" // Aplica clases de Tailwind, como bordes redondeados
          />
        </div>
        <div class="w-40 h-40 bg-gray-200">

          <Image
            src={img2}
            alt="Descripción de la imagen"
            layout="" // Hace que la imagen ocupe todo el espacio del contenedor
            objectFit="contain" // Ajusta cómo se recorta la imagen (puede ser cover, contain, etc.)
            className="rounded-lg" // Aplica clases de Tailwind, como bordes redondeados
          />
        </div>
        <div class="w-40 h-40 bg-gray-200">

          <Image
            src={img2}
            alt="Descripción de la imagen"
            layout="" // Hace que la imagen ocupe todo el espacio del contenedor
            objectFit="contain" // Ajusta cómo se recorta la imagen (puede ser cover, contain, etc.)
            className="rounded-lg" // Aplica clases de Tailwind, como bordes redondeados
          />
        </div>
        <div class="w-40 h-40 bg-gray-200">

          <Image
            src={img2}
            alt="Descripción de la imagen"
            layout="" // Hace que la imagen ocupe todo el espacio del contenedor
            objectFit="contain" // Ajusta cómo se recorta la imagen (puede ser cover, contain, etc.)
            className="rounded-lg" // Aplica clases de Tailwind, como bordes redondeados
          />
        </div>
        <div class="w-40 h-40 bg-gray-200">

          <Image
            src={img2}
            alt="Descripción de la imagen"
            layout="" // Hace que la imagen ocupe todo el espacio del contenedor
            objectFit="contain" // Ajusta cómo se recorta la imagen (puede ser cover, contain, etc.)
            className="rounded-lg" // Aplica clases de Tailwind, como bordes redondeados
          />
        </div>
        <div class="w-40 h-40 bg-gray-200">

          <Image
            src={img2}
            alt="Descripción de la imagen"
            layout="" // Hace que la imagen ocupe todo el espacio del contenedor
            objectFit="contain" // Ajusta cómo se recorta la imagen (puede ser cover, contain, etc.)
            className="rounded-lg" // Aplica clases de Tailwind, como bordes redondeados
          />
        </div>
      </div>
      <footer class=" text-white py-6">
        <div class="container mx-auto text-center">
          <h2 class="text-lg font-bold mb-4">Contáctame</h2>
          <div class="flex justify-center space-x-6 mb-4">
            <a href="https://wa.me/1234567890" target="_blank" class="text-gray-400 hover:text-white" aria-label="WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.114.547 4.16 1.59 5.964L.045 24l6.212-1.627C8.86 23.453 10.43 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm5.564 17.468l-.57 2.448a9.748 9.748 0 01-3.562-.747 15.674 15.674 0 01-7.565-7.565 9.743 9.743 0 01-.747-3.562l2.448-.57c.394-.092.805.136.94.526.383 1.135 1.026 2.167 1.825 2.966s1.83 1.442 2.966 1.825c.39.136.618.546.526.94z" />
              </svg>
            </a>
            <a href="mailto:ejemplo@email.com" class="text-gray-400 hover:text-white" aria-label="Email">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 13.065l-9.364-7.07 18.728.002L12 13.065zM0 20h24V4H0v16z" />
              </svg>
            </a>
            <a href="https://instagram.com/tu_usuario" target="_blank" class="text-gray-400 hover:text-white" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C8.741 0 8.333.012 7.053.074 5.78.135 4.668.46 3.823 1.004c-.868.56-1.559 1.309-2.12 2.178-.544.845-.87 1.957-.93 3.23-.062 1.28-.074 1.688-.074 4.936s.012 3.656.074 4.936c.061 1.272.386 2.384.93 3.23.561.868 1.252 1.617 2.12 2.178.845.544 1.957.869 3.23.93 1.28.062 1.688.074 4.936.074s3.656-.012 4.936-.074c1.272-.061 2.384-.386 3.23-.93.868-.561 1.617-1.252 2.178-2.12.544-.845.87-1.957.93-3.23.062-1.28.074-1.688.074-4.936s-.012-3.656-.074-4.936c-.061-1.272-.386-2.384-.93-3.23-.561-.868-1.252-1.617-2.12-2.178-.845-.544-1.957-.869-3.23-.93C15.656.012 15.259 0 12 0zm0 2.162c1.233.002 1.646.013 2.225.047.855.048 1.322.204 1.63.339.396.165.679.362.97.653.291.291.488.574.653.97.135.308.291.775.339 1.63.034.579.045.992.047 2.225-.002 1.233-.013 1.646-.047 2.225-.048.855-.204 1.322-.339 1.63-.165.396-.362.679-.653.97-.291.291-.574.488-.97.653-.308.135-.775.291-1.63.339-.579.034-.992.045-2.225.047-1.233-.002-1.646-.013-2.225-.047-.855-.048-1.322-.204-1.63-.339-.396-.165-.679-.362-.97-.653-.291-.291-.488-.574-.653-.97-.135-.308-.291-.775-.339-1.63-.034-.579-.045-.992-.047-2.225.002-1.233.013-1.646.047-2.225.048-.855.204-1.322.339-1.63.165-.396.362-.679.653-.97.291-.291.574-.488.97-.653.308-.135.775-.291 1.63-.339.579-.034.992-.045 2.225-.047zm0 1.745c-2.946 0-5.335 2.388-5.335 5.335S9.054 14.577 12 14.577s5.335-2.388 5.335-5.335S14.946 3.907 12 3.907zm0 8.798a3.465 3.465 0 01-3.463-3.463A3.465 3.465 0 0112 5.779a3.465 3.465 0 013.463 3.463A3.465 3.465 0 0112 12.705zm4.712-7.548a1.212 1.212 0 01-1.212-1.212 1.212 1.212 0 112.424 0 1.212 1.212 0 01-1.212 1.212z" />
              </svg>
            </a>
            <a href="https://facebook.com/tu_usuario" target="_blank" class="text-gray-400 hover:text-white" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.5 24V13.153h3.632l.544-4.224h-4.176V6.205c0-1.221.34-2.05 2.09-2.05H17.9V.169A29.67 29.67 0 0015.312 0C12.395 0 10.5 1.757 10.5 4.984v3.945H6.868v4.224H10.5V24h3z" />
              </svg>
            </a>
          </div>
          <p class="text-sm text-gray-400">© 2024 Mi Sitio Web. Todos los derechos reservados.</p>
        </div>
      </footer>

    </div>

  );
}
