import { SortByType, SortByOrder } from '../const';
import { Cameras } from '../types/camera';
import { Orders } from '../types/order';

//Функция для вычисления количества страниц для пагинации
export const getPageNumbers = (countTotal: number, countOnPage: number) =>
  Array
    .from(
      { length: Math.ceil(countTotal / countOnPage) }, (_value, index) => index + 1);

//Функция для получения товаров на конкретную страницу пагинации
export const getProductsCurrentPage = <T>(products: Array<T>, pageNumberCurrentPage: number, productCountOnPage: number): Array<T> => {
  const endIndex = pageNumberCurrentPage * productCountOnPage;
  const beginIndex = endIndex - productCountOnPage;
  return products.slice(beginIndex, endIndex);
};

//Функция для стилизации цены товара
export const getStylizedPrice = (price: number): string => new Intl.NumberFormat('ru-Ru').format(price);

//Функция для сортировки товаров
export const sortProducts = (
  products: Cameras,
  sortByType: string,
  sortByOrder: string,
): Cameras => {
  // сортировка по цене
  if (sortByType === SortByType.Price) {
    if (sortByOrder === SortByOrder.Down) {
      return [...products].sort((a, b) => b.price - a.price);
    } else {
      return [...products].sort((a, b) => a.price - b.price);
    }
  }

  // Сортировка по популярности (среднему рейтингу)
  if (sortByType === SortByType.Popularity) {
    return [...products].sort((a, b) => {
      if (a.averageRating === null && b.averageRating === null) {
        return 0;
      }
      if (a.averageRating === null) {
        return 1;
      }
      if (b.averageRating === null) {
        return -1;
      }

      const popularityComparison = b.averageRating - a.averageRating;

      if (popularityComparison === 0) {
        if (sortByOrder === SortByOrder.Down) {
          return b.price - a.price;
        } else {
          return a.price - b.price;
        }
      }

      return popularityComparison;
    });
  }

  return products;
};

//Возвращает минимальную цену из списка продуктов
export const getMinPrice = (products: Cameras) => {
  if(products.length !== 0) {
    const prices = products.map((product) => product.price);
    return Math.min(...prices);
  } else {
    return 0;
  }
};

//Возвращает максимальную цену из списка продуктов
export const getMaxPrice = (products: Cameras) => {
  if(products.length !== 0) {
    const prices = products.map((product) => product.price);
    return Math.max(...prices);
  } else {
    return 0;
  }
};

//Возвращает общее количество товаров в корзине
export const getTotalQuantity = (orders: Orders) => {
  if(orders.length) {
    return orders.reduce((totalQuantity, order) => totalQuantity + order.quantity, 0);
  }
};

//Вычисляет итоговую стоимость, учитывая количество товара
export const getTotalPrice = (orders: Orders): number => {
  const total = orders.reduce(
    (totalPrice, order) => totalPrice + order.camera.price * order.quantity,
    0
  );
  return total;
};

//Вычисляет скидку
export const getTotalDiscount = (orders: Orders, discount: number): number => {
  const total = getTotalPrice(orders);
  return Math.floor(total / 100 * discount);
};

//Вычисляет итоговую стоимость, учитывая количество товара и скидку
export const getFinalPrice = (orders: Orders, discount: number): number => {
  const price = getTotalPrice(orders);
  const discountValue = getTotalDiscount(orders, discount);
  return price - discountValue;
};

