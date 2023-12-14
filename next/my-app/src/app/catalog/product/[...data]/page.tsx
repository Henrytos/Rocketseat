import { Test } from "./Test";
import { AddToCart } from "./add-to-cart";

interface ProductDetailsProps {
  params: {
    data: string[];
  };
  children: React.ReactNode;
}

export default async function (props: ProductDetailsProps) {
  const [id, color, priece] = props.params.data;

  const data = await fetch("https://api.github.com/users/henrytos");
  const response = await data.json();

  return (
    <main>
      <h1>productDetails</h1>
      <p>id: {id}</p>
      <p>color: {color}</p>
      <p>priece: {priece}</p>
      <AddToCart>
        <Test />
      </AddToCart>
    </main>
  );
}
