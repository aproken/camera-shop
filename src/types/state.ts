import { store } from '../store';
import { Cameras } from './camera';

export type CameraProcess = {
  camerasList: Cameras;
  isCamerasListCompleting: boolean;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
