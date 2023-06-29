import { render, screen } from '@testing-library/react';
import HistoryRouter from '../../components/history-route/history-route';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { createAPI } from '../../services/api';
import { State } from '../../types/state';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import App from '../../components/app/app';

describe('App component', () => {
  const api = createAPI();
  const mockStore = configureMockStore<
    State,
    Action<string>,
    ThunkDispatch<State, typeof api, Action>
  >([thunk]);

  it('должнен вызваться экшен fetchCamerasListAction для загрузки продукта', () => {
    const store = mockStore({
      'CAMERA': {
        camera: null,
        isCameraCompleting: false,
      },
    });

    const history = createMemoryHistory();
    history.push('/');

    render(
      <Provider store={store}>
        <HistoryRouter history={ history }>
          <App />
        </HistoryRouter>
      </Provider>
    );

    expect(store.getActions()).toHaveLength(1);

    expect(store.getActions().map((item) => item.type)).toEqual([
      'camera/fetchCamerasList/pending'
    ]);
  });

  it('должен отображать LoadingScreen при отсутствии данных о продукте', () => {
    const store = mockStore({
      'CAMERA': {
        isCamerasListCompleting: false,
      },
    });

    const history = createMemoryHistory();
    history.push('/');

    render(
      <Provider store={store}>
        <HistoryRouter history={ history }>
          <App />
        </HistoryRouter>
      </Provider>
    );

    const loadingScreen = screen.getByRole('status');
    expect(loadingScreen).toBeInTheDocument();
  });
});
