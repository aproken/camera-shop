import { useState } from 'react';
import { VISIBLE_REVIEWS } from '../../const';
import { Review, Reviews } from '../../types/review';
import ReviewCard from '../review-card/review-card';

type ReviewsProps = {
  comments: Reviews;
}

function sortReviewsByDate(reviews: Reviews) {
  const items = [...reviews];
  items.sort((a: Review, b: Review) => new Date(b.createAt).valueOf() - new Date(a.createAt).valueOf());
  return items;
}

function ReviewsBlock({ comments }: ReviewsProps): JSX.Element {
  const [visibleReviews, setVisibleReviews] = useState<number>(VISIBLE_REVIEWS);

  const reviewsSort = sortReviewsByDate(comments);

  const handleMoreReviewClick = () => {
    setVisibleReviews((prevVisibleReviews: number) => prevVisibleReviews + VISIBLE_REVIEWS);
  };

  const reviewsToShow = reviewsSort.slice(0, visibleReviews);

  return (
    <section className="review-block">
      <div className="container">
        <div className="page-content__headed">
          <h2 className="title title--h3">Отзывы</h2>
          <button className="btn" type="button">Оставить свой отзыв</button>
        </div>
        <ul className="review-block__list">
          {
            reviewsToShow.map((comment) => (
              <ReviewCard
                key={ comment.id }
                comment={ comment }
              />
            ))
          }
        </ul>
        {
          visibleReviews < reviewsSort.length && (
            <div className="review-block__buttons">
              <button
                onClick={ handleMoreReviewClick }
                className="btn btn--purple"
                type="button"
              >
                Показать больше отзывов
              </button>
            </div>
          )
        }
      </div>
    </section>
  );
}

export default ReviewsBlock;

