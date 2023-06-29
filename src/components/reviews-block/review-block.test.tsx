import { render, screen } from '@testing-library/react';
import ReviewsBlock from './reviews-block';
import { makeFakeReviews } from '../../utils/mocks-reviews';
import { Reviews } from '../../types/review';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { createAPI } from '../../services/api';
import { State } from '../../types/state';

describe('ReviewBlock component', () => {
  const productId = 1;
  const fakeReviews: Reviews = makeFakeReviews();

  const api = createAPI();
  const mockStore = configureMockStore<
    State,
    Action<string>,
    ThunkDispatch<State, typeof api, Action>
  >([thunk]);
  const store = mockStore({});

  test('отображает карточки отзывов и кнопку «Показать больше»', () => {
    render(
      <Provider store={store}>
        <ReviewsBlock productId={ productId } comments={ fakeReviews } />
      </Provider>
    );

    const reviewCards = screen.getAllByTestId('review-card');
    expect(reviewCards.length).toBe(3); // В интерфесе выводим по 3 отзыва

    const showMoreButton = screen.getByText('Показать больше отзывов');
    expect(showMoreButton).toBeInTheDocument();
  });

  test('отображает сообщение «Нет отзывов», когда нет комментариев', () => {
    render(
      <Provider store={store}>
        <ReviewsBlock productId={productId} comments={[]} />
      </Provider>
    );

    const noReviewsMessage = screen.getByText('Отзывов на эту камеру пока еще нет :(');
    expect(noReviewsMessage).toBeInTheDocument();
  });
});
