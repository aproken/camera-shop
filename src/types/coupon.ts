import { CouponStatus } from '../../src/const';

export type Coupon = {
  coupon: string | null;
  discount: number;
  status: CouponStatus;
};
