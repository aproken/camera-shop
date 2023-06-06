import { NameSpace } from '../../const';
import { Cameras } from '../../types/camera';
import { State } from '../../types/state';

export const getCamerasList = (state: State): Cameras => state[NameSpace.Camera].camerasList;

export const getCamerasListCompletingStatus = (state: State): boolean => state[NameSpace.Camera].isCamerasListCompleting;
