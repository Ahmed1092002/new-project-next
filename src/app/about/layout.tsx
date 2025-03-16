export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header style={{ backgroundColor: "lightgreen" }}>Header</header>
        {children}
        {/* <footer style={{ backgroundColor: "lightblue" }}>data</footer> */}
      </body>
    </html>
  );
}
