import Image from "next/image";
import Header from "./components/header";
import Galery from "./components/galery";
import Footer from "./components/footer";

import img2 from './public/viking.png'


export default function Home() {
  return (
    <div className="grid place-items-center">
      <Header />
      <Galery/>
      <Footer/>
     

    </div>

  );
}
