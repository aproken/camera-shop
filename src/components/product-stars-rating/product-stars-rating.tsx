import { MAX_RATING_STARS } from '../../const';

type ProductStarsRatingProps = {
  rating: number;
  totalReview: number;
}

function ProductStarsRating({ rating, totalReview }: ProductStarsRatingProps): JSX.Element {
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
        key={ rating + index }
        width="17"
        height="16"
        aria-hidden="true"
      >
        <use xlinkHref="#icon-star"></use>
      </svg>
    ));

  return (
    <div className="rate product__rate">
      {
        [...fullStarIcons, ...emptyStarIcons]
      }
      <p className="visually-hidden">Рейтинг: { fullStarIcons.length }</p>
      <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{ totalReview }</p>
    </div>
  );
}

export default ProductStarsRating;
