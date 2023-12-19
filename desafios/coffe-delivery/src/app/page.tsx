import { CatalogCoffe } from "@/components/catalogCoffe";
import { Coffee, Package, ShoppingCart, Timer } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

function Title({ ...props }) {
  return <h1 className="text-5xl font-extrabold font-baloo pb-4" {...props} />;
}

function SubTitle({ ...props }) {
  return (
    <h2
      className="text-xl font-light font-baloo pb-16 text-base-subtitle"
      {...props}
    />
  );
}

function Text({ ...props }) {
  return <p className="font-light text-base-text" {...props} />;
}

function Content({ ...props }) {
  return <div className=" flex gap-3 items-center" {...props} />;
}

function ContainerIcon({
  color,
  children,
}: {
  color: string;
  children: ReactNode;
}) {
  return (
    <span className={`bg-${color} text-white rounded-full p-2 `}>
      {children}
    </span>
  );
}

function StartHome() {
  return (
    <section id="home-initial">
      <div className=" flex max-w-6xl m-auto py-24 justify-between">
        <div>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>

          <SubTitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </SubTitle>

          <div className="grid grid-cols-2 gap-x-10 gap-y-5 ">
            <Content>
              <ContainerIcon color="yellow-dark" key={1}>
                <ShoppingCart />
              </ContainerIcon>
              <Text>Compra simples e segura</Text>
            </Content>
            <Content>
              <ContainerIcon color="base-text" key={2}>
                <Package />
              </ContainerIcon>
              <Text>Embalagem mantém o café intacto</Text>
            </Content>
            <Content>
              <ContainerIcon color="yellow" key={3}>
                <Timer />
              </ContainerIcon>
              <Text>Entrega rápida e rastreada</Text>
            </Content>
            <Content>
              <ContainerIcon color="purple" key={4}>
                <Coffee />
              </ContainerIcon>
              <Text>O café chega fresquinho até você</Text>
            </Content>
          </div>
        </div>
        <Image src="/imgs/bg-home.png" width={500} height={500} alt="cofee" />
      </div>
    </section>
  );
}

export default function HomeStore() {
  return (
    <>
      <StartHome />
      <section className="max-w-6xl m-auto py-8">
        <h2 className="text-base-subtitle text-3xl font-bold mb-9">
          Nosso cafés
        </h2>
        <CatalogCoffe />
      </section>
    </>
  );
}
