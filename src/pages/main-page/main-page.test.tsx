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
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as Actions from '../../store/api-action';

jest.mock('../../store/api-action.ts');
jest.mock('../../components/search-form/search-form'); // исключаем search-form, что бы не мешал в тесте

function fakeAction<T, A>(name: string, payload = {}) {
  return createAsyncThunk<T, A, Record<string, never>>(
    name,
    (_id) => Promise.resolve(payload as T)
  );
}

describe('App компонент', () => {
  const api = createAPI();
  const mockStore = configureMockStore<
    State,
    Action<string>,
    ThunkDispatch<State, typeof api, Action>
  >([thunk]);

  it('должнен вызваться экшен fetchCamerasWithAverageRatingAction для загрузки продукта', () => {
    const fetchCameraAction = jest
      .spyOn(Actions, 'fetchCamerasWithAverageRatingAction')
      .mockImplementation(fakeAction('fetchCamerasWithAverageRatingAction'));
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

    expect(fetchCameraAction).toBeCalled();
  });

  it('должен отображать LoadingScreen при отсутствии данных о продукте', () => {
    jest
      .spyOn(Actions, 'fetchCamerasWithAverageRatingAction')
      .mockImplementation(fakeAction('fetchCamerasWithAverageRatingAction'));
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
