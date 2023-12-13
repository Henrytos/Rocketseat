"use client";
interface ProductDetailsProps {
  params: {
    data: string[];
  };
}

export default function productDetails(props: ProductDetailsProps) {
  const [id, color, quantity] = props.params.data;

  console.log("add in cart");

  function addInCart() {
    console.log("add in cart");
  }
  return (
    <main>
      <h1>productDetails</h1>
      <p>id: {id}</p>
      <p>color: {color}</p>
      <p>quantity: {quantity}</p>
      <button onClick={addInCart}>add cart</button>
    </main>
  );
}
