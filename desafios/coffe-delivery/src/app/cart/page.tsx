import { AddressForm } from "@/components/addressForm";
import { CoffesSelect } from "@/components/coffeSelect";

export default function CartPage() {
  const subTitleStyle = "text-base-subtitle font-bold text-lg mb-2";
  return (
    <main className="min-h-[calc(100vh_-_6rem)] grid gap-3 max-w-6xl m-auto grid-cols-12 ">
      <section className="col-span-7">
        <h2 className={subTitleStyle}>Complete seu pedido</h2>
        <AddressForm />
      </section>
      <section className="col-span-5">
        <h2 className={subTitleStyle}>Cafés selecionados</h2>
        <CoffesSelect />
      </section>
    </main>
  );
}
