export default function Docs({ params }: { params: { slug: string[] } }) {
  const { slug } = params;

  return (
    <div>
      {slug.map((slug) => (
        <h1 key={slug}>{slug}</h1>
      ))}
      <h1>Profile</h1>
    </div>
  );
}
