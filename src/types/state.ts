import { RequestStatus } from '../const';
import { store } from '../store';
import { Camera, Cameras } from './camera';
import { Coupon } from './coupon';
import { Orders } from './order';
import { Promo } from './promo';
import { Reviews } from './review';

export type CameraProcess = {
  camerasList: Cameras;
  isCamerasListCompleting: boolean;
  camera: Camera | null;
  isCameraCompleting: boolean;
  similar: number[];
  isSimilarCompleting: boolean;
  reviewsList: Reviews;
  isReviewsListCompleting: boolean;
  addNewReviewStatus: RequestStatus;
}

export type BasketProcess = {
  ordersList: Orders;
  coupon: Coupon;
  addNewOrdersStatus: RequestStatus;
}

export type PromoProcess = {
  promoProduct: Promo | null;
  isProductCompleting: boolean;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
