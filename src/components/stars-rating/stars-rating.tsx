import { MAX_RATING_STARS } from '../../const';

type StarRatingProps = {
  rating: number;
}

function StarsRating({ rating }: StarRatingProps): JSX.Element {
  const fullStarIcons = Array.from(
    { length: Math.floor(rating) }, (_, index) => (
      <svg
        key={ index }
        width="17"
        height="16"
        aria-hidden="true"
      >
        <use xlinkHref="#icon-full-star"></use>
      </svg>
    ));

  const emptyStarIcons = Array.from(
    { length: (MAX_RATING_STARS - Math.floor(rating)) }, (_, index) => (
      <svg
        key={ index }
        width="17"
        height="16"
        aria-hidden="true"
      >
        <use xlinkHref="#icon-star"></use>
      </svg>
    ));

  return (
    <div className="rate review-card__rate">
      {
        [...fullStarIcons, ...emptyStarIcons]
      }
      <p className="visually-hidden">Оценка: { rating }</p>
    </div>
  );
}

export default StarsRating;
