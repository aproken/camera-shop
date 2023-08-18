import { useState, useEffect } from 'react';
import { Cameras } from '../../types/camera';
import Pagination from '../pagination/pagination';
import ProductCard from '../product-card/product-card';
import Sorting from '../sorting/sorting';
import {
  PRODUCTS_COUNT_ON_PAGE,
  SortByType,
  SortByOrder,
  AppRoute,
  QueryParameterSort,
} from '../../const';
import { getProductsCurrentPage, getPageNumbers, sortProducts } from '../../utils/utils';
import { useAppDispatch } from '../../hooks';
import { redirectToRoute } from '../../store/action';
import { useSearchParams } from 'react-router-dom';

type CatalogContentProps = {
  products: Cameras;
  currentPageIndex: number;
}

function CatalogContent({ products, currentPageIndex }: CatalogContentProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [sortByType, setSortByType] = useState<string>(SortByType.Default);
  const [sortByOrder, setSortByOrder] = useState<string>(SortByOrder.Default);
  const [searchParams] = useSearchParams();

  const pageNumbers = getPageNumbers(products.length, PRODUCTS_COUNT_ON_PAGE);

  useEffect(() => {
    const sortByTypeParam = searchParams.get(QueryParameterSort.sortByType);
    const sortByOrderParam = searchParams.get(QueryParameterSort.sortByOrder);

    if(sortByTypeParam && sortByOrderParam) {
      setSortByType(sortByTypeParam);
      setSortByOrder(sortByOrderParam);
    }
  }, [searchParams]);

  useEffect(() => {
    if (products.length > 0 && (!currentPageIndex || currentPageIndex > pageNumbers.length)) {
      dispatch(redirectToRoute(AppRoute.NotFound));
    }
  }, [products, currentPageIndex, dispatch, pageNumbers.length]);

  const sortedProducts = sortProducts(products, sortByType, sortByOrder);
  const productsCurrentPage = getProductsCurrentPage(
    sortedProducts,
    currentPageIndex,
    PRODUCTS_COUNT_ON_PAGE
  );

  if(products.length === 0) {
    return (
      <p>Извините, по вашему запросу товаров не найдено :( </p>
    );
  }

  return (
    <div className="catalog__content">

      <div className="catalog-sort">
        <Sorting />
      </div>

      <div className="cards catalog__cards">
        {
          productsCurrentPage.map((product) => (
            <ProductCard
              key={ product.id }
              product={ product }
            />
          ))
        }
      </div>

      <Pagination currentPageIndex={ currentPageIndex } pageNumbers={ pageNumbers } />
    </div>
  );
}

export default CatalogContent;
