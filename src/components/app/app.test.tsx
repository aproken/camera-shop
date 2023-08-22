import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import HistoryRouter from '../history-route/history-route';
import App from './app';
import { AppRoute, RequestStatus } from '../../const';
import { configureMockStore } from '@jedmao/redux-mock-store';
import thunk from 'redux-thunk';
import * as Hook from '../../hooks';

const mockStore = configureMockStore([thunk]);

const store = mockStore({
  'CAMERA': {
    camerasList: [],
    isCamerasListCompleting: false,
    camera: null,
    isCameraCompleting: false,
    similar: [],
    isSimilarCompleting: false,
    reviewsList: [],
    isReviewsListCompleting: false,
    addNewReviewStatus: RequestStatus.Unknown,
  },
  'PROMO_PRODUCT': {
    promoProduct: null,
    isProductCompleting: false,
  },
  'ORDER' : {
    ordersList: [],
    coupon: {}
  }
});

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={ history }>
      <App />
    </HistoryRouter>
  </Provider>
);

describe('App', () => {
  it('Отрисовывает "MainPage" когда пользователь переходит к "/"', () => {
    jest.mock('../../hooks');
    jest.spyOn(Hook, 'useAppDispatch').mockImplementation(jest.fn);

    history.push(AppRoute.Main);

    render(fakeApp);

    const mainElement = screen.getByRole('main'); // Поиск тега <main>

    expect(mainElement).toBeInTheDocument();
    expect(mainElement.classList.contains('loading-container')).toBe(true);
    expect(mainElement.id).toBe('main-page');
  });

  it('Отрисовывает страницу ProductPage', () => {
    jest.mock('../../hooks');
    jest.spyOn(Hook, 'useAppDispatch').mockImplementation(jest.fn);
    history.push('/cameras/1');

    render(fakeApp);

    const mainElement = screen.getByRole('main'); // Поиск тега <main>
    expect(mainElement).toBeInTheDocument();
    expect(mainElement.id).toBe('product-page');
  });

  it('Отрисовывает страницу NotFound', () => {
    history.push('/non-existent-route');

    render(fakeApp);

    expect(screen.getByText('page not found')).toBeInTheDocument();
    expect(screen.getByText('Вернуться на главную')).toBeInTheDocument();
  });
});
