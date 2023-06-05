import ReviewCard from '../review-card/review-card';

function ReviewsList(): JSX.Element {
  return (
    <ul className="review-block__list">
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
    </ul>
  );
}

export default ReviewsList;
