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
  Camera = 'camera',
  Similar = 'similar',
  Reviews = '/reviews',
}

export enum NameSpace {
  Camera = 'CAMERA',
  PromoProduct = 'PROMO_PRODUCT',
}

export enum RequestStatus {
  Pending = 'PENDING',
  Success = 'SUCCESS',
  Failure = 'FAILURE',
  Unknown = 'UNKNOWN',
}

export const CRUMBS = ['Главная', 'Каталог',];

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

export const START_INDEX = 0;

export const PRODUCTS_COUNT_ON_PAGE = 9;

export const TABS_TITLE: string[] = ['Описание', 'Характеристики',];

export const SLIDE_WIDTH = 100;

export const SLIDE_DURATION = 300;

export const VISIBLE_CARDS = 3;

export const VISIBLE_REVIEWS = 3;

export const MAX_RATING_STARS = 5;

export const getPageNumbers = (countTotal: number, countOnPage: number) =>
  Array
    .from(
      { length: Math.ceil(countTotal / countOnPage) }, (_value, index) => index + 1);

export const getProductsCurrentPage = <T>(products: Array<T>, pageNumberCurrentPage: number, productCountOnPage: number): Array<T> => {
  const endIndex = pageNumberCurrentPage * productCountOnPage;
  const beginIndex = endIndex - productCountOnPage;
  return products.slice(beginIndex, endIndex);
};

export const getStylizedPrice = (price: number): string => new Intl.NumberFormat('ru-Ru').format(price);

export const getBreadcrumbs = (productName: string, crumbs: string[]): string[] => [ ...crumbs, productName ];
