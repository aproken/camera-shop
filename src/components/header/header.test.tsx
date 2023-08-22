import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './header';
import { createAPI } from '../../services/api';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { State } from '../../types/state';
import { Provider } from 'react-redux';

// исключаем search-form, что бы не мешал в тесте
jest.mock('../../components/search-form/search-form', () => ({
  __esModule: true,
  default: () => <input placeholder='Поиск по сайту' />
}));

const api = createAPI();
const mockStore = configureMockStore<
  State,
  Action<string>,
  ThunkDispatch<State, typeof api, Action>
>([thunk]);

const store = mockStore({
  'CAMERA': {
    isCamerasListCompleting: false,
  },
  'ORDER' : {
    ordersList: [],
    coupon: {}
  }
});

describe('Header', () => {
  test('должен отображать навигационные ссылки', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
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
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );

    const searchInput = screen.getByPlaceholderText('Поиск по сайту');
    expect(searchInput).toBeInTheDocument();
  });

  test('должен отображать ссылку на корзину', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );

    const basketLink = screen.getByTestId('basket-link');
    expect(basketLink).toBeInTheDocument();
  });
});
