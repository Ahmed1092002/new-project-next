export default function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  return (
    <div>
      <h1>Product lds,l;ds{params.productId}</h1>
    </div>
  );
}
