export const BASE_URL = 'https://camera-shop.accelerator.pages.academy';
export const REQUEST_TIMEOUT = 5000;

export enum AppRoute {
  Main = '/',
  NotFound = '*',
  Product = '/cameras/:cameraId',
}

export enum APIRoute {
  CamerasList = '/cameras',
  PromoProduct = '/promo',
}

export enum NameSpace {
  Camera = 'CAMERA',
  PromoProduct = 'PROMO_PRODUCT',
}

export enum Type {
  Collectible ='Коллекционная',
  Momentary = 'Моментальная',
  Digital = 'Цифровая',
  Membranous ='Плёночная',
}

export enum Category {
  VideoCamera = 'Видеокамера',
  PhotoCamera = 'Фотоаппарат',
}

export enum Level {
  Zero = 'Нулевой',
  Amateur = 'Любительский',
  Professional = 'Профессиональный',
}

export enum IconSocial {
  VK = '#icon-vk',
  Pinterest = '#icon-pinterest',
  Reddit = '#icon-reddit',
}
