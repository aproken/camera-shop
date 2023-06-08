import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { cameraProcess } from './camera-process/camera-process';
import { promoProcess } from './promo-process/promo-process';

export const rootReducer = combineReducers({
  [NameSpace.Camera]: cameraProcess.reducer,
  [NameSpace.PromoProduct]: promoProcess.reducer,
});
