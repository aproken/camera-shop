import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LinkForward from './link-forward';

describe('LinkForward component', () => {
  test('должен отображать ссылку "Далее" если currentPage не равно последнему элементу в pageNumbers', () => {
    const currentPage = 4;
    const pageNumbers = [1, 2, 3, 4, 5, 6, 7];

    render(
      <BrowserRouter>
        <LinkForward currentPage={ currentPage } pageNumbers={ pageNumbers } />
      </BrowserRouter>
    );

    const link = screen.getByText('Далее');

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/page/5');
    expect(link).toHaveClass('pagination__link');
    expect(link).toHaveClass('pagination__link--text');
  });

  test('не должен отображать ссылку "Далее" если currentPage равно последнему элементу в pageNumbers', () => {
    const currentPage = 5;
    const pageNumbers = [1, 2, 3, 4, 5];

    render(
      <BrowserRouter>
        <LinkForward currentPage={currentPage} pageNumbers={pageNumbers} />
      </BrowserRouter>
    );

    const link = screen.queryByText('Далее');
    expect(link).not.toBeInTheDocument();
  });
});
