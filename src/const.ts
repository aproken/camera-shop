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

export const START_PAGE = 1;

export const PRODUCTS_COUNT_ON_PAGE = 9;

export const getPageNumbers = (countTotal: number, countOnPage: number) =>
  Array
    .from(
      { length: Math.ceil(countTotal / countOnPage) }, (_value, index) => index + 1);

export const getProductsCurrentPage = <T>(products: Array<T>, pageNumberCurrentPage: number, productCountOnPage: number): Array<T> => {
  const endIndex = pageNumberCurrentPage * productCountOnPage;
  const beginIndex = endIndex - productCountOnPage;
  return products.slice(beginIndex, endIndex);
};
