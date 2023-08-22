import { cameraProcess } from '../camera-process/camera-process';
import { CameraProcess } from '../../types/state';
import { RequestStatus } from '../../const';
import { makeFakeCameras } from '../../utils/mocks-cameras';
import { makeFakeReviews, makeFakeReviewItem } from '../../utils/mocks-reviews';
import { makeFakeReviewData } from '../../utils/mocks-review-data';
import {
  fetchCamerasListAction,
  fetchCameraAction,
  fetchSimilarAction,
  fetchReviewsAction,
  fetchAddNewReviewAction,
} from '../api-action';

describe('cameraProcess reducer', () => {
  it('handles fetchCamerasListAction.pending', () => {
    const nextState = cameraProcess.reducer(
      undefined,
      fetchCamerasListAction.pending('', undefined)
    );
    expect(nextState.isCamerasListCompleting).toBe(false);
  });

  it('handles fetchCamerasListAction.rejected', () => {
    const error = new Error('Failed to fetch cameras list');
    const nextState = cameraProcess.reducer(
      undefined,
      fetchCamerasListAction.rejected(error, '', undefined)
    );
    expect(nextState.camerasList).toEqual([]);
    expect(nextState.isCamerasListCompleting).toBe(true);
  });

  it('handles fetchCamerasListAction.fulfilled', () => {
    const camerasList = makeFakeCameras();
    const nextState = cameraProcess.reducer(
      undefined,
      fetchCamerasListAction.fulfilled(camerasList, '', undefined)
    );

    expect(nextState.camerasList).toEqual(camerasList);
    expect(nextState.isCamerasListCompleting).toBe(true);
  });

  it('handles fetchCameraAction.fulfilled', () => {
    const camera = makeFakeCameras()[0];
    const nextState = cameraProcess.reducer(
      undefined,
      fetchCameraAction.fulfilled(camera, '', 0)
    );

    expect(nextState.camera).toEqual(camera);
    expect(nextState.isCameraCompleting).toBe(true);
  });

  it('handles fetchSimilarAction.fulfilled', () => {
    const similarCameras = makeFakeCameras().slice(1, 3);
    const nextState = cameraProcess.reducer(
      undefined,
      fetchSimilarAction.fulfilled(similarCameras, '', 0)
    );
    expect(nextState.similar).toEqual(similarCameras.map((i) => i.id));
    expect(nextState.isSimilarCompleting).toBe(true);
  });

  it('handles fetchReviewsAction.fulfilled', () => {
    const reviewsList = makeFakeReviews();
    const nextState = cameraProcess.reducer(
      undefined,
      fetchReviewsAction.fulfilled(reviewsList, '', 0)
    );
    expect(nextState.reviewsList).toEqual(reviewsList);
    expect(nextState.reviewsList).toEqual(reviewsList);
    expect(nextState.isReviewsListCompleting).toBe(true);
  });

  it('handles fetchAddNewReviewAction.fulfilled', () => {
    const newReview = makeFakeReviewItem();

    const previousReviewsList = makeFakeReviews();
    const previousState: CameraProcess = {
      ...cameraProcess.getInitialState(),
      reviewsList: previousReviewsList,
    };
    const fulfilledAction = fetchAddNewReviewAction.fulfilled(
      // Возвращаемые данные
      makeFakeReviewItem(),
      'requestId',
      makeFakeReviewData()
    );

    const nextState = cameraProcess.reducer(
      previousState,
      fulfilledAction
    );

    expect(nextState.addNewReviewStatus).toBe(RequestStatus.Success);
    expect(nextState.reviewsList).toEqual([...previousReviewsList, newReview]);
  });
});
