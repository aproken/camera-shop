import { useState, useEffect } from 'react';
import { Cameras } from '../../types/camera';
import Pagination from '../pagination/pagination';
import ProductCard from '../product-card/product-card';
import Sorting from '../sorting/sorting';
import {
  AppRoute,
  PRODUCTS_COUNT_ON_PAGE,
  SortByType,
  SortByOrder,
} from '../../const';
import { getProductsCurrentPage, getPageNumbers, sortProducts } from '../../utils/utils';
import { useAppDispatch } from '../../hooks';
import { redirectToRoute } from '../../store/action';

type CatalogContentProps = {
  products: Cameras;
  currentPageIndex: number;
}

function CatalogContent({ products, currentPageIndex }: CatalogContentProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [sortByType, setSortByType] = useState<string>(SortByType.Default);
  const [sortByOrder, setSortByOrder] = useState<string>(SortByOrder.Default);

  const pageNumbers = getPageNumbers(products.length, PRODUCTS_COUNT_ON_PAGE);

  useEffect(() => {
    if (!currentPageIndex || currentPageIndex > pageNumbers.length) {
      dispatch(redirectToRoute(AppRoute.NotFound));
    }
  }, [currentPageIndex, dispatch, pageNumbers.length]);

  const handleSortingChange = (newSortByType: string, newSortByOrder: string) => {
    setSortByType(newSortByType);
    setSortByOrder(newSortByOrder);
  };

  const sortedProducts = sortProducts(products, sortByType, sortByOrder);
  const productsCurrentPage = getProductsCurrentPage(
    sortedProducts,
    currentPageIndex,
    PRODUCTS_COUNT_ON_PAGE
  );

  return (
    <div className="catalog__content">

      <div className="catalog-sort">
        <Sorting onChange={ handleSortingChange } />
      </div>

      <div className="cards catalog__cards">
        {
          productsCurrentPage.map((product) => (
            <ProductCard
              key={ product.id }
              product={ product }
              onBuyClick={ () => null }
            />
          ))
        }
      </div>

      <Pagination currentPageIndex={ currentPageIndex } pageNumbers={ pageNumbers } />
    </div>
  );
}

export default CatalogContent;
