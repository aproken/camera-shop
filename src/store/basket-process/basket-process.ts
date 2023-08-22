import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus, CouponStatus } from '../../const';
import { BasketProcess } from '../../types/state';
import { fetchAddNewOrderAction, fetchDiscountAction } from '../api-action';
import { Camera } from '../../types/camera';
import { Order } from '../../types/order';

export const initialState: BasketProcess = {
  ordersList: [],
  coupon: {
    coupon: null,
    discount: 0,
    status: CouponStatus.Default
  },
  addNewOrdersStatus: RequestStatus.Unknown,
};

export const basketProcess = createSlice({
  name: NameSpace.Order,
  initialState,
  reducers: {
    addCameraToBasket: (state, action: PayloadAction<Camera>) => {
      const order = state.ordersList.find(
        (item) => item.camera.id === action.payload.id
      );
      if (order) {
        order.quantity += 1;
        return ;
      }
      const newOrder: Order = {
        camera: action.payload,
        quantity: 1,
      };
      state.ordersList.push(newOrder);
    },
    deleteCameraIntoBasket: (state, action:PayloadAction<number>) => {
      const cameraId = action.payload;
      state.ordersList = state.ordersList.filter((order) => order.camera.id !== cameraId);
    },
    changeQuantityOfCameras: (state, action: PayloadAction<Order>) => {
      const order = state.ordersList.find(
        (item) => item.camera.id === action.payload.camera.id
      );
      if (order) {
        order.quantity = action.payload.quantity;
      }
    },
    clearBasket: (state) => {
      state.ordersList = [];
      state.coupon.coupon = null;
      state.coupon.discount = 0;
      state.coupon.status = CouponStatus.Default;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchDiscountAction.fulfilled, (state, action) => {
        state.coupon = action.payload;
      })
      .addCase(fetchDiscountAction.rejected, (state) => {
        state.coupon = {
          coupon: null,
          discount: 0,
          status: CouponStatus.Error
        };
      })
      .addCase(fetchAddNewOrderAction.pending, (state) => {
        state.addNewOrdersStatus = RequestStatus.Pending;
      })
      .addCase(fetchAddNewOrderAction.fulfilled, (state) => {
        state.addNewOrdersStatus = RequestStatus.Success;
      })
      .addCase(fetchAddNewOrderAction.rejected, (state) => {
        state.addNewOrdersStatus = RequestStatus.Failure;
      });
  }
});

export const actions = basketProcess.actions;
