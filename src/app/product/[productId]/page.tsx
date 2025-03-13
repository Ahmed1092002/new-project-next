export default function ProductPage({
  params,
}: {
  params: { ProductId: string };
}) {
  return (
    <div>
      <h1>Product{params.ProductId}</h1>
    </div>
  );
}
