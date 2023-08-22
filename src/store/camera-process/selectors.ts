import { NameSpace } from '../../const';
import { Camera, Cameras } from '../../types/camera';
import { Reviews } from '../../types/review';
import { State } from '../../types/state';

export const getState = (state: State): State => state;

export const getCamerasList = (state: State): Cameras => state[NameSpace.Camera].camerasList;

export const getCamerasListCompletingStatus = (state: State): boolean => state[NameSpace.Camera].isCamerasListCompleting;

export const getCamera = (state: State): Camera | null => state[NameSpace.Camera].camera;

export const getCameraComletingStatus = (state: State): boolean => state[NameSpace.Camera].isCameraCompleting;

export const getSimilar = (state: State): Cameras => {
  const subState = state[NameSpace.Camera];
  const ids = subState.similar;
  return subState.camerasList.filter((item) => ids.includes(item.id));
};

export const getSimilarCompletingStatus = (state: State): boolean => state[NameSpace.Camera].isSimilarCompleting;

export const getReviewsList = (state: State): Reviews => state[NameSpace.Camera].reviewsList;

export const getReviewsListCompleting = (state: State): boolean => state[NameSpace.Camera].isReviewsListCompleting;
