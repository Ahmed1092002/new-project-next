import Link from "next/link";

export default function Home() {
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Link href="/product">product</Link>
      <Link href={`/product/${"1"}`}>product id</Link>
      <Link href={`/product/${"1"}/review/${15}`}>review id</Link>
      <Link href={`/about`}>about</Link>
      <Link href={`/docs/1`}>docs</Link>
    </div>
  );
}
///18 video ------ 21 video ---- not found video ----- 22 