import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { Cameras } from '../types/camera';
import { APIRoute } from '../const';
import { Promo } from '../types/promo';


//получение списка камер
export const fetchCamerasListAction = createAsyncThunk<Cameras, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'camera/fetchCamerasList',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Cameras>(APIRoute.CamerasList);
    return data;
  }
);

//Получение данных промо предложения
export const fetchPromoProductAction = createAsyncThunk<Promo | null, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'promoProduct/fetchPromoProduct',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Promo>(APIRoute.PromoProduct);
      return data;
    } catch (error) {
      return null;
    }
  }
);
