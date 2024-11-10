import Image from "next/image";
import Header from "./components/header";
import Card from "./components/card";
import Galery from "./components/galery";
import Footer from "./components/footer";

import img2 from './public/viking.png'


export default function Home() {
  return (
    <div className="grid place-items-center">
      <Header />
      {/* <Galery/>*/}
        <h2 className="text-2xl w-full mt-6 text-center font-bold  text-zinc-400">Síguenos en nuestras redes</h2>
      <Card />
      <Card />
      <Card />

      {/* <Card/> */}
      <Footer />


    </div>

  );
}
