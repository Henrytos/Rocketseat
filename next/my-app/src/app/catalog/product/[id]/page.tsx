interface ProductDetailsProps {
  params: {
    id: string;
  };
}

export default function ProductDetails({ params }: ProductDetailsProps) {
  return (
    <main>
      <p>product:{params.id}</p>
    </main>
  );
}
