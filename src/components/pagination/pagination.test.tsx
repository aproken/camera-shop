import { render, RenderResult } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Pagination from './pagination';

test('Тестирование компонента Pagination', () => {
  const currentPageIndex = 2;
  const pageNumbers = [1, 2, 3, 4, 5];

  const { container }: RenderResult = render(
    <MemoryRouter>
      <Pagination currentPageIndex={ currentPageIndex } pageNumbers={ pageNumbers } />
    </MemoryRouter>
  );

  expect(container).toMatchSnapshot();
});
