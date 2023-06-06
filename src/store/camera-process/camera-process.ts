import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { CameraProcess } from '../../types/state';
import { fetchCamerasListAction } from '../api-action';

const initialState: CameraProcess = {
  camerasList: [],
  isCamerasListCompleting: false,
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
      });
  }
});
