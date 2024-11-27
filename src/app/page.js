import Image from "next/image";
import Header from "./components/header";
import Card from "./components/card";
import Cart from "./components/cart";
import Footer from "./components/footer";

import img2 from './public/viking.png'


export default function Home() {
  return (
    <div className="grid place-items-center">
      <Header />
      <Cart />
      <h2 className=" text-2xl w-[80%] mt-12 text-center font-bold text-slate-400">
        Tu centro de entretenimiento con las mejores plataformas de streaming.
      </h2>
      <h2 className=" text-2xl w-[80%] mt-12 text-center font-bold text-slate-300">
        Suscríbete a tus plataformas favoritas
      </h2>
      <h2 className=" text-2xl w-[80%] mt-12 text-center font-bold text-slate-400">
        Tu centro de entretenimiento con las mejores plataformas de streaming.
      </h2>
      <h2 className=" text-2xl w-[80%] mt-12 text-center font-bold text-slate-300">
        Suscríbete a tus plataformas favoritas
      </h2>
      <Card />
      <Footer />
    </div>
  );
}
