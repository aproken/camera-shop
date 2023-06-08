import { store } from '../store';
import { Cameras } from './camera';
import { Promo } from './promo';

export type CameraProcess = {
  camerasList: Cameras;
  isCamerasListCompleting: boolean;
}

export type PromoProcess = {
  promoProduct: Promo | null;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
