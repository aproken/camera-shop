import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { Camera, Cameras } from '../types/camera';
import { APIRoute, AppRoute } from '../const';
import { Promo } from '../types/promo';
import { redirectToRoute } from './action';
import { Review, Reviews } from '../types/review';
import { toast } from 'react-toastify';
import { ReviewData } from '../types/review-data';

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
  async (_arg, { extra: api }) => {
    try {
      const { data } = await api.get<Promo>(APIRoute.PromoProduct);
      return data;
    } catch (error) {
      return null;
    }
  }
);

//Получение товара
export const fetchCameraAction = createAsyncThunk<Camera | null, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'camera/fetchCamera',
  async (id, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Camera>(`${ APIRoute.CamerasList }/${ id }`);
      return data;
    } catch (error) {
      dispatch(redirectToRoute(AppRoute.NotFound));
      return null;
    }
  }
);

//Получение списка похожих товаров
export const fetchSimilarAction = createAsyncThunk<Cameras, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'camera/fetchSimilar',
  async (id, { extra: api }) => {
    const { data } = await api.get<Cameras>(`${ APIRoute.CamerasList }/${ id }/${ APIRoute.Similar}`);
    return data;
  }
);

//Получение списка отзывов товара
export const fetchReviewsAction = createAsyncThunk<Reviews, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'camera/fetchReviews',
  async (id, { extra: api }) => {
    const { data } = await api.get<Reviews>(`${ APIRoute.CamerasList }/${ id }${ APIRoute.Reviews}`);
    return data;
  }
);

//Добавление отзыва для товара
export const fetchAddNewReviewAction = createAsyncThunk<Review, ReviewData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'camera/fetchAddNewReview',
  async (reviewData, { extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.post<Review>(APIRoute.Reviews, reviewData);
      return data;
    } catch (error) {
      toast.error('Ups! Unable to save review');
      return rejectWithValue(error);
    }
  }
);
