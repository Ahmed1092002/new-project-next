import NotFound from "./not-found";

export default function Review({ params }: { params: { reviewId: number } }) {
  if (params.reviewId > 11) {
    return NotFound();
  }
  return (
    <div>
      <h1>review 1 {params.reviewId}</h1>
    </div>
  );
}
