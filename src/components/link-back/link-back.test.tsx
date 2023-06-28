import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LinkBack from './link-back';

describe('LinkBack', () => {
  test('должен отображать ссылку "Назад" если currentPage не равно первому элементу в pageNumbers', () => {
    const currentPage = 2;
    const pageNumbers = [1, 2, 3, 4, 5, 6, 7];

    render(
      <BrowserRouter>
        <LinkBack currentPage={ currentPage } pageNumbers={ pageNumbers } />
      </BrowserRouter>
    );

    const link = screen.getByText('Назад');

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/page/1');
    expect(link).toHaveClass('pagination__link');
    expect(link).toHaveClass('pagination__link--text');
  });

  test('не должен отображать ссылку "Назад" если currentPage равно первому элементу в pageNumbers', () => {
    const currentPage = 1;
    const pageNumbers = [1, 2, 3, 4, 5];

    render(
      <BrowserRouter>
        <LinkBack currentPage={currentPage} pageNumbers={pageNumbers} />
      </BrowserRouter>
    );

    const link = screen.queryByText('Назад');
    expect(link).not.toBeInTheDocument();
  });
});
