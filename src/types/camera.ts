import { Type, Category, Level, } from '../const';

export type Camera = {
  id: number;
  name: string;
  vendorCode: string;
  type: Type;
  category: Category;
  description: string;
  level: Level;
  price: number;
  reviewCount: number;
  averageRating?: number;
  previewImg: string;
  previewImg2x: string;
  previewImgWebp: string;
  previewImgWebp2x: string;
}

export type Cameras = Camera[];
