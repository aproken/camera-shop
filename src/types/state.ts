import { RequestStatus } from '../const';
import { store } from '../store';
import { Camera, Cameras } from './camera';
import { Promo } from './promo';
import { Reviews } from './review';

export type CameraProcess = {
  camerasList: Cameras;
  isCamerasListCompleting: boolean;
  camera: Camera | null;
  isCameraCompleting: boolean;
  similar: Cameras;
  isSimilarCompleting: boolean;
  reviewsList: Reviews;
  isReviewsListCompleting: boolean;
  addNewReviewStatus: RequestStatus;
}

export type PromoProcess = {
  promoProduct: Promo | null;
  isProductCompleting: boolean;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
