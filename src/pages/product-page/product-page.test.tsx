import { render, screen } from '@testing-library/react';
import HistoryRouter from '../../components/history-route/history-route';
import { configureMockStore } from '@jedmao/redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import App from '../../components/app/app';
import { AppDispatch } from '../../types/state';
import * as Actions from '../../store/api-action';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { Camera } from '../../types/camera';
import { FakeCamera } from '../../utils/mocks-cameras';

jest.mock('../../store/api-action.ts');

const fakeActionDummy = (name: string, payload = {}) => (productId: number) =>
  (dispatch: AppDispatch) => dispatch({ type: name, payload});

const mockFetchCameraAction = createAsyncThunk<Camera | null, number, Record<string, never>>(
  'camera/fetchCamera',
  (_id) => Promise.resolve(FakeCamera as Camera | null)
);

function fakeAction<T>(name: string, payload = {}) {
  return createAsyncThunk<T, number, Record<string, never>>(
    name,
    (_id) => Promise.resolve(payload as T)
  );
}

describe('ProductPage component', () => {
  const mockStore = configureMockStore([thunk]);

  it('должен вызываться экшен fetchCameraAction для загрузки продукта', () => {
    const fetchCameraAction = jest.spyOn(Actions, 'fetchCameraAction').mockImplementation(mockFetchCameraAction);
    const fetchAverageRatingAction = jest.spyOn(Actions, 'fetchAverageRatingAction').mockImplementation(fakeAction('fetchAverageRatingAction'));
    const fetchSimilarAction = jest.spyOn(Actions, 'fetchSimilarAction').mockImplementation(fakeAction('fetchSimilarAction'));
    const fetchReviewsAction = jest.spyOn(Actions, 'fetchReviewsAction').mockImplementation(fakeAction('fetchReviewsAction'));

    // Задаем начальное состояние для мокового store
    const store = mockStore({
      'CAMERA': {
        camera: null,
        isCameraCompleting: false,
        camerasList: [],
      },
    });

    const history = createMemoryHistory();
    history.push('/cameras/1');

    render(
      <Provider store={store}>
        <HistoryRouter history={ history }>
          <App />
        </HistoryRouter>
      </Provider>
    );
    expect(fetchCameraAction).toHaveBeenCalledWith(1);
    expect(fetchAverageRatingAction).toHaveBeenCalledWith(1);
    expect(fetchSimilarAction).toHaveBeenCalledWith(1);
    expect(fetchReviewsAction).toHaveBeenCalledWith(1);
  });

  it('должен отображать LoadingScreen при отсутствии данных о продукте', () => {
    jest.spyOn(Actions, 'fetchCameraAction').mockImplementation(fakeAction('fetchCameraAction'));
    jest.spyOn(Actions, 'fetchAverageRatingAction').mockImplementation(fakeAction('fetchAverageRatingAction'));
    jest.spyOn(Actions, 'fetchSimilarAction').mockImplementation(fakeAction('fetchSimilarAction'));
    jest.spyOn(Actions, 'fetchReviewsAction').mockImplementation(fakeAction('fetchReviewsAction'));

    const store = mockStore({
      'CAMERA': {
        camera: null,
        isCameraCompleting: false,
        camerasList: [],
      },
    });

    const history = createMemoryHistory();
    history.push('/cameras/1');

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
