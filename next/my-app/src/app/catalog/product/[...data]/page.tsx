interface ProductDetailsProps {
  params: {
    data: string[];
  };
}

export default function productDetails(props: ProductDetailsProps) {
  const [id, color, quantity] = props.params.data;
  return (
    <main>
      <h1>productDetails</h1>
      <p>id: {id}</p>
      <p>color: {color}</p>
      <p>quantity: {quantity}</p>
    </main>
  );
}
