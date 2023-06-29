import { render, screen } from '@testing-library/react';
import ReviewCard from './review-card';
import { makeFakeReviews } from '../../utils/mocks-reviews';
import { Reviews } from '../../types/review';

describe('ReviewCard component', () => {
  const fakeReviews: Reviews = makeFakeReviews();

  it('должен правильно отображать карточку отзыва', () => {
    const comment = fakeReviews[0];
    render(<ReviewCard comment={ comment } />);

    expect(screen.getByText(comment.userName)).toBeInTheDocument();
    expect(screen.getByText(comment.advantage)).toBeInTheDocument();
    expect(screen.getByText(comment.disadvantage)).toBeInTheDocument();
    expect(screen.getByText(comment.review)).toBeInTheDocument();
  });
});
