import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './header';

// исключаем search-form, что бы не мешал в тесте
jest.mock('../../components/search-form/search-form', () => ({
  __esModule: true,
  default: () => <input placeholder='Поиск по сайту' />
}));

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
