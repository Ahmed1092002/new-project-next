export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <header style={{ backgroundColor: "lightblue" }}>Header</header> */}
        {children}
        <footer style={{ backgroundColor: "azure" }}>data</footer>
      </body>
    </html>
  );
}
