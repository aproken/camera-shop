import { NameSpace } from '../../const';
import { Camera, Cameras } from '../../types/camera';
import { State } from '../../types/state';

export const getCamerasList = (state: State): Cameras => state[NameSpace.Camera].camerasList;

export const getCamerasListCompletingStatus = (state: State): boolean => state[NameSpace.Camera].isCamerasListCompleting;

export const getCamera = (state: State): Camera | null => state[NameSpace.Camera].camera;

export const getCameraComletingStatus = (state: State): boolean => state[NameSpace.Camera].isCameraCompleting;

export const getSimilar = (state: State): Cameras => state[NameSpace.Camera].similar;

export const getSimilarCompletingStatus = (state: State): boolean => state[NameSpace.Camera].isSimilarCompleting;
