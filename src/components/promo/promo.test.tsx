import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Promo from './promo';
import { makeFakePromo } from '../../utils/mocks-promo';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { createAPI } from '../../services/api';
import { State } from '../../types/state';
import { Provider } from 'react-redux';

describe('Promo component', () => {
  const api = createAPI();
  const mockStore = configureMockStore<
    State,
    Action<string>,
    ThunkDispatch<State, typeof api, Action>
  >([thunk]);

  const promoProduct = makeFakePromo();

  it('должнен вызваться экшен fetchPromoProductAction для загрузки промо', () => {
    const store = mockStore({
      'PROMO_PRODUCT': {
        promoProduct: null,
        isProductCompleting: false,
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Promo />
        </MemoryRouter>
      </Provider>
    );

    expect(store.getActions()).toHaveLength(1);
    expect(store.getActions()[0].type).toBe('promoProduct/fetchPromoProduct/pending');
  });
  it('должен отображать информацию о продукте и кнопку "Подробнее"', () => {
    const store = mockStore({
      'PROMO_PRODUCT': {
        promoProduct: promoProduct,
        isProductCompleting: false,
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Promo />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(promoProduct.name)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Подробнее' })).toHaveAttribute('href', `/cameras/${promoProduct.id}`);
  });

  it('должен отображать LoadingScreen при отсутствии данных о продукте', () => {
    const store = mockStore({
      'PROMO_PRODUCT': {
        promoProduct: null,
        isProductCompleting: true,
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Promo />
        </MemoryRouter>
      </Provider>
    );

    const loadingScreen = screen.getByRole('status');
    expect(loadingScreen).toBeInTheDocument();
  });
});
