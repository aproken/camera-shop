export const BASE_URL = 'https://camera-shop.accelerator.pages.academy';
export const REQUEST_TIMEOUT = 5000;

export enum AppRoute {
  Main = '/',
  NotFound = '/not-found',
  Product = '/cameras/:cameraId',
  Basket = '/orders',
}

export enum APIRoute {
  CamerasList = '/cameras',
  PromoProduct = '/promo',
  Camera = 'camera',
  Similar = 'similar',
  Reviews = '/reviews',
  Coupon = '/coupons',
  Order = '/orders',
}

export enum NameSpace {
  Camera = 'CAMERA',
  PromoProduct = 'PROMO_PRODUCT',
  Order = 'ORDER',
}

export enum RequestStatus {
  Pending = 'PENDING',
  Success = 'SUCCESS',
  Failure = 'FAILURE',
  Unknown = 'UNKNOWN',
}

export enum CouponStatus {
  Default = 'default',
  Error = 'error',
  Success = 'success',
}

export enum Type {
  Digital = 'Цифровая',
  Membranous ='Плёночная',
  Momentary = 'Моментальная',
  Collectible ='Коллекционная',
}

export enum Category {
  PhotoCamera = 'Фотоаппарат',
  VideoCamera = 'Видеокамера',
}

export const CategoryMapper = {
  [Category.PhotoCamera]: 'Фотокамера',
  [Category.VideoCamera]: 'Видеокамера'
};

export enum Level {
  Zero = 'Нулевой',
  Amateur = 'Любительский',
  Professional = 'Профессиональный',
}

export enum QueryParameterFilter {
  type = 'type',
  level = 'level',
  category = 'category',
}

export enum QueryParameterPriceBlock {
  MinPrice = 'price_gte',
  MaxPrice = 'price_lte',
}

export enum QueryParameterSort {
  sortByType = 'sortByType',
  sortByOrder = 'sortByOrder',
}

export type QueryParameter = QueryParameterFilter | QueryParameterPriceBlock | QueryParameterSort;

export type FilterData = {
  price_gte: number; // Больше или равно
  price_lte: number; // Меньше или равно
  type: Type[];
  category?: Category | null;
  level: Level[];
}

export enum SortByType {
  Default = '',
  Price = 'по цене',
  Popularity = 'по полулярности',
}

export enum SortByOrder {
  Default = '',
  Up = 'abs',
  Down = 'desc',
}

export enum IconSocial {
  VK = '#icon-vk',
  Pinterest = '#icon-pinterest',
  Reddit = '#icon-reddit',
}

export const START_PAGE = 1;

export const START_INDEX = 0;

export const PRODUCTS_COUNT_ON_PAGE = 9;

export const TABS_TITLE: string[] = ['Характеристики', 'Описание'];

export const SLIDE_WIDTH = 100;

export const SLIDE_DURATION = 300;

export const VISIBLE_CARDS = 3;

export const VISIBLE_REVIEWS = 3;

export const MAX_RATING_STARS = 5;
