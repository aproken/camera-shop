import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import HistoryRouter from '../history-route/history-route';
import App from './app';
import { AppRoute, RequestStatus } from '../../const';
import { configureMockStore } from '@jedmao/redux-mock-store';
import thunk from 'redux-thunk';

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
  it('should render "MainPage" when user navigate to "/"', () => {
    history.push(AppRoute.Main);

    render(fakeApp);

    const mainElement = screen.getByRole('main'); // Поиск тега <main>

    expect(mainElement).toBeInTheDocument();
    expect(mainElement.classList.contains('loading-container')).toBe(true);
    expect(mainElement.id).toBe('main-page');
  });

  it('should render when user navigate the product path', () => {
    history.push('/cameras/1');

    render(fakeApp);

    const mainElement = screen.getByRole('main'); // Поиск тега <main>
    expect(mainElement).toBeInTheDocument();
    expect(mainElement.id).toBe('product-page');
  });

  it('should render not found page when user navigate the unknown path', () => {
    history.push('/non-existent-route');

    render(fakeApp);

    expect(screen.getByText('page not found')).toBeInTheDocument();
    expect(screen.getByText('Вернуться на главную')).toBeInTheDocument();
  });
});
