import Link from "next/link";

export default function Home() {
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Link href="/product">product</Link>
      <Link href={`/product/${"1"}`}>product id</Link>
      <Link href={`/product/${"1"}/review/${15}`}>review id</Link>
    </div>
  );
}
