import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { Camera, Cameras, RatingItem } from '../types/camera';
import { APIRoute, AppRoute, CouponStatus } from '../const';
import { Promo } from '../types/promo';
import { redirectToRoute } from './action';
import { Review, Reviews } from '../types/review';
import { ReviewData } from '../types/review-data';
import { Coupon } from '../types/coupon';
import { OrderData } from '../types/order-data';

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

//Получение среднего рейтинга для товара
export const fetchAverageRatingAction = createAsyncThunk<RatingItem, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'camera/fetchAvarageRatings',
  async (id, { extra: api }) => {
    try {
      const { data } = await api.get<Reviews>(`${ APIRoute.CamerasList }/${ id }${ APIRoute.Reviews}`);

      const rating = data.map((review) => review.rating);
      const averageRating = rating.reduce((total, raiting) => (total + raiting), 0) / rating.length;

      return {
        rating: Math.ceil(averageRating),
        id
      };
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Ошибка при получении среднего рейтинга:', error);
      return {
        rating: null,
        id
      };
    }
  }
);

// Получение списка всех камер с добавлением среднего рейтинга
export const fetchCamerasWithAverageRatingAction = createAsyncThunk<null, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'camera/fetchCamerasWithAverageRating',
  async (_, { dispatch }) => {
    try {
      // Получаем список всех камер с помощью действия fetchCamerasListAction
      const cameras: Cameras = await dispatch(fetchCamerasListAction()).unwrap();

      // Для каждой камеры получаем средний рейтинг и добавляем его в каждую камеру
      for (const camera of cameras) {
        const { id } = camera;
        await dispatch(fetchAverageRatingAction(id)).unwrap();
      }
      return null;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Ошибка при получении камер с средним рейтингом:', error);
      return null;
    }
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
      return rejectWithValue(error);
    }
  }
);

//Заказ: получение процента скидки по купону
export const fetchDiscountAction = createAsyncThunk<Coupon, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'discount/fetchDiscount',
  async (couponData, { extra: api }) => {
    try {
      const { data } = await api.post<number>(APIRoute.Coupon, {coupon: couponData});
      return {
        coupon: couponData,
        discount: data,
        status: CouponStatus.Success
      } as Coupon;
    } catch {
      return {
        coupon: null,
        discount: 0,
        status: CouponStatus.Error
      } as Coupon;
    }
  }
);

//Заказ: создание нового заказа
export const fetchAddNewOrderAction = createAsyncThunk<boolean, OrderData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'order/fetchAddNewOrder',
  async(orderData, { extra: api }) => {
    try {
      await api.post<boolean>(APIRoute.Order, orderData);
      return true;
    } catch {
      return false;
    }
  }
);
