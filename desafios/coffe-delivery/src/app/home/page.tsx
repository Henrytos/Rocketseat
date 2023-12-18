import { CatalogCoffe } from "@/components/catalogCoffe";
import { CatalogContextProvider } from "@/contexts/CatolofContext";
import { Coffee, Package, ShoppingCart, Timer } from "lucide-react";
import Image from "next/image";

export default function HomeStore() {
  return (
    <main>
      <section id="home-initial">
        <div className=" flex max-w-6xl m-auto py-24 justify-between">
          <div>
            <h1 className="text-5xl font-extrabold font-baloo pb-4">
              Encontre o café perfeito para qualquer hora do dia
            </h1>
            <p className="text-xl font-light pb-16 text-base-subtitle">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
            <div className="grid grid-cols-2 gap-x-10 gap-y-5 ">
              <div className=" flex gap-3 items-center">
                <span className=" bg-yellow-dark text-white rounded-full p-2 ">
                  <ShoppingCart />
                </span>
                <p className="font-light text-base-text">
                  Compra simples e segura
                </p>
              </div>
              <div className=" flex gap-3 items-center">
                <span className=" bg-base-text text-white rounded-full p-2 ">
                  <Package />
                </span>
                <p className="font-light text-base-text">
                  Embalagem mantém o café intacto
                </p>
              </div>
              <div className=" flex gap-3 items-center">
                <span className=" bg-yellow text-white rounded-full p-2 ">
                  <Timer />
                </span>
                <p className="font-light text-base-text">
                  Entrega rápida e rastreada
                </p>
              </div>
              <div className=" flex gap-3 items-center">
                <span className=" bg-purple text-white rounded-full p-2 ">
                  <Coffee />
                </span>
                <p className="font-light text-base-text">
                  O café chega fresquinho até você
                </p>
              </div>
            </div>
          </div>
          <Image src="/imgs/bg-home.png" width={500} height={500} alt="cofee" />
        </div>
      </section>
      <section className="max-w-6xl m-auto py-8">
        <h2 className="text-base-subtitle text-3xl font-bold mb-9">
          Nosso cafés
        </h2>
        <CatalogContextProvider>
          <CatalogCoffe />
        </CatalogContextProvider>
      </section>
    </main>
  );
}
