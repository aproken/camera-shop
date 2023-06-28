import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './header';

describe('Header', () => {
  test('должен отображать навигационные ссылки', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const catalogLink = screen.getByText('Каталог');
    expect(catalogLink).toBeInTheDocument();

    const warrantiesLink = screen.getByText('Гарантии');
    expect(warrantiesLink).toBeInTheDocument();

    const deliveryLink = screen.getByText('Доставка');
    expect(deliveryLink).toBeInTheDocument();

    const aboutLink = screen.getByText('О компании');
    expect(aboutLink).toBeInTheDocument();
  });

  test('должен отображать форму поиска', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const searchInput = screen.getByPlaceholderText('Поиск по сайту');
    expect(searchInput).toBeInTheDocument();

    const resetButton = screen.getByRole('button', { name: 'Сбросить поиск' });
    expect(resetButton).toBeInTheDocument();
  });

  test('должен отображать ссылку на корзину', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const basketLink = screen.getByTestId('basket-link');
    expect(basketLink).toBeInTheDocument();
  });
});
