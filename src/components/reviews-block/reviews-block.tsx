import { useState } from 'react';
import { VISIBLE_REVIEWS } from '../../const';
import { Review, Reviews } from '../../types/review';
import ReviewCard from '../review-card/review-card';
import ReviewDialog from '../review-dialog/review-dialog';

type ReviewsProps = {
  productId: number;
  comments: Reviews;
}

function sortReviewsByDate(reviews: Reviews) {
  const items = [...reviews];
  items.sort((a: Review, b: Review) => new Date(b.createAt).valueOf() - new Date(a.createAt).valueOf());
  return items;
}

function ReviewsBlock({ productId, comments }: ReviewsProps): JSX.Element {
  const [ visibleReviews, setVisibleReviews ] = useState<number>(VISIBLE_REVIEWS);
  const [ isOpen, setIsOpen ] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const handleMoreReviewClick = () => {
    setVisibleReviews((prevVisibleReviews: number) => prevVisibleReviews + VISIBLE_REVIEWS);
  };

  const reviewsSort = sortReviewsByDate(comments);
  const reviewsToShow = reviewsSort.slice(0, visibleReviews);

  return (
    <section className="review-block">
      <div className="container">
        <div className="page-content__headed">
          <h2 className="title title--h3">Отзывы</h2>
          <button
            onClick={ toggle }
            className="btn"
            type="button"
          >
            Оставить свой отзыв
          </button>
        </div>
        {
          reviewsToShow.length > 0
            ?
            (
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
            )
            :
            <p className="title title--h5">Отзывов на эту камеру пока еще нет :(</p>
        }
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
      <ReviewDialog productId={productId} isOpen={isOpen} hide={toggle} />
    </section>
  );
}

export default ReviewsBlock;

