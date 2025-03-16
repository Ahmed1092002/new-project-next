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
    <html lang="en">
      <body>
        <div>
          <header style={{ backgroundColor: "lightcyan" }}>
            <h2>Product details</h2>
          </header>

          {children}

          <footer style={{ backgroundColor: "lightblue" }}>
            <h2>Features products</h2>
          </footer>
        </div>
        {/* <footer style={{ backgroundColor: "lightblue" }}>data</footer> */}
      </body>
    </html>
  );
}
