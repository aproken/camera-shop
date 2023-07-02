import { useEffect } from 'react';
import { Cameras } from '../../types/camera';
import Pagination from '../pagination/pagination';
import ProductCard from '../product-card/product-card';
import Sorting from '../sorting/sorting';
import { AppRoute, PRODUCTS_COUNT_ON_PAGE } from '../../const';
import { getProductsCurrentPage, getPageNumbers } from '../../utils/utils';
import { useAppDispatch } from '../../hooks';
import { redirectToRoute } from '../../store/action';

type CatalogContentProps = {
  products: Cameras;
  currentPageIndex: number;
}

function CatalogContent({ products, currentPageIndex }: CatalogContentProps): JSX.Element {
  const dispatch = useAppDispatch();

  const pageNumbers = getPageNumbers(products.length, PRODUCTS_COUNT_ON_PAGE);

  useEffect(() => {
    if (!currentPageIndex || currentPageIndex > pageNumbers.length) {
      dispatch(redirectToRoute(AppRoute.NotFound));
    }
  }, [currentPageIndex, dispatch, pageNumbers.length]);

  const productsCurrentPage = getProductsCurrentPage(products, currentPageIndex, PRODUCTS_COUNT_ON_PAGE);

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
