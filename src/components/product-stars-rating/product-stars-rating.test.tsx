import { render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ProductStarsRating from './product-stars-rating';

describe('ProductStarsRating', () => {
  test('рендерит правильное количество звезд', () => {
    const rating = 3.5;
    const totalReview = 10;

    const { container }: RenderResult = render(<ProductStarsRating rating={rating} totalReview={totalReview} />);

    expect(container).toMatchSnapshot();
  });
});
