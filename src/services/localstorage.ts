import { Order, } from '../types/order';
import { Coupon } from '../types/coupon';
import { BasketProcess } from '../types/state';

import { CouponStatus, RequestStatus } from '../const';

const KEY = 'basket-state';

const DEFAULT_BASKET_STATE = {
  ordersList: [] as Order[],
  coupon: {
    coupon: null,
    discount: 0,
    status: CouponStatus.Default
  } as Coupon,
  addNewOrdersStatus: RequestStatus.Unknown,
};

export function loadBasketState(): BasketProcess {
  try {
    const serializedState: string | null = localStorage.getItem(KEY);
    if (!serializedState){
      return DEFAULT_BASKET_STATE;
    } else {
      return JSON.parse(serializedState) as BasketProcess;
    }
  } catch (e) {
    return DEFAULT_BASKET_STATE;
  }
}

export function saveBasketState(state: BasketProcess) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(KEY, serializedState);
  } catch (e) {
    // ignore error
  }
}
