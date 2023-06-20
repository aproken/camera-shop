import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { CameraProcess } from '../../types/state';
import { fetchCameraAction, fetchCamerasListAction, fetchReviewsAction, fetchSimilarAction } from '../api-action';

const initialState: CameraProcess = {
  camerasList: [],
  isCamerasListCompleting: false,
  camera: null,
  isCameraCompleting: false,
  similar: [],
  isSimilarCompleting: false,
  reviewsList: [],
  isReviewsListcompleting: false,
};

export const cameraProcess = createSlice({
  name: NameSpace.Camera,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCamerasListAction.pending, (state) => {
        state.isCamerasListCompleting = false;
      })
      .addCase(fetchCamerasListAction.fulfilled, (state, action) => {
        state.camerasList = action.payload;
        state.isCamerasListCompleting = true;
      })
      .addCase(fetchCamerasListAction.rejected, (state) => {
        state.isCamerasListCompleting = true;
      })
      .addCase(fetchCameraAction.pending, (state) => {
        state.isCameraCompleting = false;
      })
      .addCase(fetchCameraAction.fulfilled, (state, action) => {
        state.camera = action.payload;
        state.isCameraCompleting = true;
      })
      .addCase(fetchCameraAction.rejected, (state) => {
        state.isCameraCompleting = true;
      })
      .addCase(fetchSimilarAction.pending, (state) => {
        state.isSimilarCompleting = false;
      })
      .addCase(fetchSimilarAction.fulfilled, (state, action) => {
        state.similar = action.payload;
        state.isSimilarCompleting = true;
      })
      .addCase(fetchSimilarAction.rejected, (state) => {
        state.isSimilarCompleting = true;
      })
      .addCase(fetchReviewsAction.pending, (state) => {
        state.isReviewsListcompleting = false;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviewsList = action.payload;
        state.isReviewsListcompleting = true;
      })
      .addCase(fetchReviewsAction.rejected, (state) => {
        state.isReviewsListcompleting = true;
      });
  }
});
