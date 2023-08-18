import { NameSpace } from '../../const';
import { Coupon } from '../../types/coupon';
import { Orders } from '../../types/order';
import { State } from '../../types/state';

export const getDiscount = (state: State): Coupon => state[NameSpace.Order].coupon;

export const getCamerasInBasket = (state: State): Orders => state[NameSpace.Order].ordersList;

export const isProductInBasket = (state: State, cameraId: number): boolean => {
  const orders = getCamerasInBasket(state);
  return orders.some((order) => order.camera.id === cameraId);
};
