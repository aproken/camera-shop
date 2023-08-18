import { Camera } from './camera';

export type Order = {
  camera: Camera;
  quantity: number;
};

export type Orders = Order[];
