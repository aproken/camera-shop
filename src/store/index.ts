import { configureStore } from '@reduxjs/toolkit';
import { createAPI} from '../services/api';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'reduxjs-toolkit-persist';
import { rootReducer } from './root-reducer';
import { redirect } from './middlewares/redirect';
import { loadBasketState, saveBasketState } from '../services/localstorage';
import { NameSpace } from '../const';
import { debounce } from 'ts-debounce';

export const api = createAPI();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
      serializableCheck: {
        /* ignore persistance actions */
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER
        ],
      },
    }).concat(redirect),
  preloadedState: {[NameSpace.Order]: loadBasketState()}
});

const debouncedSave = debounce(() => {
  const state = store.getState();
  saveBasketState(state.ORDER);
}, 1000);

store.subscribe(() => {
  debouncedSave();
});
