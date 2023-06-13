import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { CameraProcess } from '../../types/state';
import { fetchCameraAction, fetchCamerasListAction } from '../api-action';

const initialState: CameraProcess = {
  camerasList: [],
  isCamerasListCompleting: false,
  camera: null,
  isCameraCompleting: false,
};

export const cameraProcess = createSlice({
  name: NameSpace.Camera,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCamerasListAction.pending, (state) => {
        state.isCamerasListCompleting = true;
      })
      .addCase(fetchCamerasListAction.fulfilled, (state, action) => {
        state.camerasList = action.payload;
        state.isCamerasListCompleting = false;
      })
      .addCase(fetchCamerasListAction.rejected, (state) => {
        state.isCamerasListCompleting = true;
      })
      .addCase(fetchCameraAction.pending, (state) => {
        state.isCameraCompleting = true;
      })
      .addCase(fetchCameraAction.fulfilled, (state, action) => {
        state.camera = action.payload;
        state.isCameraCompleting = false;
      })
      .addCase(fetchCameraAction.rejected, (state) => {
        state.isCameraCompleting = true;
      });
  }
});
