import Header from "./components/header";
import Card from "./components/card";
import Cart from "./components/cart";
import Footer from "./components/footer";
import GetData from "./components/getdata";

export default function Home() {

  
  return (
      <div className="grid place-items-center">
        <GetData />
        <Header />
        <Cart />

        <h2 className=" text-2xl w-[80%] mt-14 text-center font-bold text-slate-300">
          Suscríbete a mas de una plataforma al precio de una.
        </h2>
        <h2 className="text-xl w-[80%] mt-12 text-center font-bold text-slate-200">
          Envia tu pedido  a nuestro WhatsApp.
        </h2>

        <Card />
        <Footer />
      </div>


  );

}
