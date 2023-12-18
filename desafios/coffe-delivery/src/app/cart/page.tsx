import { CoffesSelect } from "@/components/coffesSelect";
import { CatalogContextProvider } from "@/contexts/CatolofContext";

export default function CartPage() {
  return (
    <main className="grid max-w-6xl m-auto grid-cols-12 ">
      <section className="flex flex-col gap-3 col-span-7">
        <h2 className="text-base-subtitle font-bold text-lg">
          Complete seu pedido
        </h2>
      </section>
      <section className=" col-span-5">
        <h2 className="block text-base-subtitle font-bold text-lg">
          Cafés selecionados
        </h2>
        <CatalogContextProvider>
          <CoffesSelect />
        </CatalogContextProvider>
      </section>
    </main>
  );
}
