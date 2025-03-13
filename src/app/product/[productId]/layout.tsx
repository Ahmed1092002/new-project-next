export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const random = getRandomInt(2);
  // if (random === 1) {
  //   throw new Error("Error loading product");
  // }

  return (
    <div>
      <h2>Product details</h2>
      {children}
      <h2>Features products</h2>
    </div>
  );
}
