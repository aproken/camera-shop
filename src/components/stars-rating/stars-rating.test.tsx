import { render, RenderResult } from '@testing-library/react';
import StarsRating from './stars-rating';

test('Тестирование компонента StarsRating', () => {
  const rating = 3.5;

  const { container }: RenderResult = render(
    <StarsRating rating={rating} />
  );

  expect(container).toMatchSnapshot();
});
