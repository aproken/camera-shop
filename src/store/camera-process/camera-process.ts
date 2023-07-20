import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../const';
import { CameraProcess } from '../../types/state';
import { fetchAddNewReviewAction, fetchAverageRatingAction, fetchCameraAction, fetchCamerasListAction, fetchCamerasWithAverageRatingAction, fetchReviewsAction, fetchSimilarAction } from '../api-action';

export const initialState: CameraProcess = {
  camerasList: [],
  isCamerasListCompleting: false,
  camera: null,
  isCameraCompleting: false,
  similar: [],
  isSimilarCompleting: false,
  reviewsList: [],
  isReviewsListCompleting: false,
  addNewReviewStatus: RequestStatus.Unknown,
};

export const cameraProcess = createSlice({
  name: NameSpace.Camera,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCamerasWithAverageRatingAction.pending, (state) => {
        state.isCamerasListCompleting = false;
      })
      .addCase(fetchCamerasWithAverageRatingAction.fulfilled, (state, action) => {
        state.camerasList = action.payload;
        state.isCamerasListCompleting = true;
      })
      .addCase(fetchCamerasWithAverageRatingAction.rejected, (state) => {
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
        state.isReviewsListCompleting = false;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviewsList = action.payload;
        state.isReviewsListCompleting = true;
      })
      .addCase(fetchReviewsAction.rejected, (state) => {
        state.isReviewsListCompleting = true;
      })
      .addCase(fetchAddNewReviewAction.pending, (state) => {
        state.addNewReviewStatus = RequestStatus.Pending;
      })
      .addCase(fetchAddNewReviewAction.fulfilled, (state, action) => {
        state.addNewReviewStatus = RequestStatus.Success;
        state.reviewsList = [...state.reviewsList, action.payload];
      })
      .addCase(fetchAddNewReviewAction.rejected, (state) => {
        state.addNewReviewStatus = RequestStatus.Failure;
      });
  }
});
