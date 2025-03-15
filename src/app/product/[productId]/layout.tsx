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
      <header style={{ backgroundColor: "lightblue" }}>
        <h2>Product details</h2>
      </header>

      {children}

      <footer style={{ backgroundColor: "lightblue" }}>
        <h2>Features products</h2>
      </footer>
    </div>
  );
}
