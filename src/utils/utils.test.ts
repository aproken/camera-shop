import { getPageNumbers, getProductsCurrentPage, getStylizedPrice } from './utils';

describe('getPageNumbers function', () => {
  it('should return array of page number', () => {
    const countTotal = 20;
    const countOnPage = 9;
    const result = getPageNumbers(countTotal, countOnPage);

    expect(result).toEqual([1, 2, 3]);
  });
});

describe('getProductsCurrentPage function', () => {
  it('should return products for the current page', () => {
    const products = ['product1', 'product2', 'product3', 'product4', 'product5', 'product6'];
    const pageNumberCurrentPage = 2;
    const productCountOnPage = 3;
    const result = getProductsCurrentPage(products, pageNumberCurrentPage, productCountOnPage);

    expect(result).toEqual(['product4', 'product5', 'product6']);
  });
});

describe('getStylizedPrice function', () => {
  it('should return a stylized price string', () => {
    const price = 17895;
    const result = getStylizedPrice(price);

    expect(result).toEqual('17 895'); // \u00A0
  });
});
