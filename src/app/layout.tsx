export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`kkkkk`}>
        <header style={{ backgroundColor: "lightblue" }}>Header</header>
        {children}
        {/* <footer style={{ backgroundColor: "lightblue" }}>data</footer> */}
      </body>
    </html>
  );
}
