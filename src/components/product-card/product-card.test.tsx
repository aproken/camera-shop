import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProductCard from './product-card';
import { makeFakeCameras } from '../../utils/mocks-cameras';
import { createAPI } from '../../services/api';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { State } from '../../types/state';
import { Provider } from 'react-redux';

const api = createAPI();
const mockStore = configureMockStore<
  State,
  Action<string>,
  ThunkDispatch<State, typeof api, Action>
>([thunk]);

const store = mockStore({
  'ORDER' : {
    ordersList: [],
    coupon: {}
  }
});

describe('ProductCard component', () => {
  it('Должен отображать карточку товара с правильной информацией', () => {
    const camera = makeFakeCameras()[0];

    render(
      <Provider store={store}>
        <BrowserRouter>
          <ProductCard product={ camera } />
        </BrowserRouter>
      </Provider>
    );

    const productName = screen.getByText(camera.name);
    expect(productName).toBeInTheDocument();

    const reviewCount = screen.getByText((content, element) => content.startsWith('Всего оценок:'));
    expect(reviewCount).toBeInTheDocument();

    const stylizedPrice = screen.getByText((content, element) => content.endsWith('₽'));
    expect(stylizedPrice).toBeInTheDocument();
  });

  it('должен переходить на правильный URL при клике на кнопку "Подробнее"', () => {
    const camera = makeFakeCameras()[0];

    render(
      <Provider store={store}>
        <BrowserRouter>
          <ProductCard product={ camera } />
        </BrowserRouter>
      </Provider>
    );

    const detailsButton = screen.getByText('Подробнее');
    fireEvent.click(detailsButton);

    expect(window.location.pathname).toBe('/cameras/1');
  });
});

