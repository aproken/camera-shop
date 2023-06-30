import React, { forwardRef } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { Review } from '../../types/review';
import StarsRating from '../stars-rating/stars-rating';

type ReviewCardProps = {
  comment: Review;
}

dayjs.locale('ru');

const ReviewCard = forwardRef<HTMLLIElement, ReviewCardProps>(({ comment }, ref) => {
  const { createAt, userName, advantage, disadvantage, review, rating } = comment;

  return (
    <li className="review-card" ref={ ref } data-testid="review-card">
      <div className="review-card__head">
        <p className="title title--h4">{userName}</p>
        <time className="review-card__data" dateTime="2022-04-13">{dayjs(createAt).locale('ru').format('DD MMMM')}</time>
      </div>
      <StarsRating rating={rating} />
      <ul className="review-card__list">
        <li className="item-list">
          <span className="item-list__title">Достоинства:</span>
          <p className="item-list__text">{advantage}</p>
        </li>
        <li className="item-list">
          <span className="item-list__title">Недостатки:</span>
          <p className="item-list__text">{disadvantage}</p>
        </li>
        <li className="item-list">
          <span className="item-list__title">Комментарий:</span>
          <p className="item-list__text">{review}</p>
        </li>
      </ul>
    </li>
  );
});

ReviewCard.displayName = 'ReviewCard';

export default ReviewCard;
