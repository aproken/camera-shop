import MockAdapter from 'axios-mock-adapter';
import { Action } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createAPI } from '../services/api';
import { APIRoute } from '../const';
import { State } from '../types/state';
import { fetchCamerasListAction } from './api-action';

describe('fetchCamerasListAction', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    State,
    Action<string>,
    ThunkDispatch<State, typeof api, Action>
  >(middlewares);

  it('should fetch camerasList when server return 200', async () => {
    const store = mockStore();

    mockAPI
      .onGet(APIRoute.CamerasList)
      .reply(200, []);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(fetchCamerasListAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchCamerasListAction.pending.type,
      fetchCamerasListAction.fulfilled.type,
    ]);
  });
});
