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
