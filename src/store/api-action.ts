import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { Cameras } from '../types/camera';
import { APIRoute } from '../const';


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
