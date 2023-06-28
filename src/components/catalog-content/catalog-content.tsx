import { Cameras } from '../../types/camera';
import Pagination from '../pagination/pagination';
import ProductCard from '../product-card/product-card';
import Sorting from '../sorting/sorting';
import { PRODUCTS_COUNT_ON_PAGE } from '../../const';
import { getProductsCurrentPage, getPageNumbers } from '../../utils/utils';

type CatalogContentProps = {
  products: Cameras;
  currentPage: number;
}

function CatalogContent({ products, currentPage }: CatalogContentProps): JSX.Element {
  const pageNumbers = getPageNumbers(products.length, PRODUCTS_COUNT_ON_PAGE);
  const productsCurrentPage = getProductsCurrentPage(products, currentPage, PRODUCTS_COUNT_ON_PAGE);

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

      <Pagination currentPage={ currentPage } pageNumbers={ pageNumbers } />
    </div>
  );
}

export default CatalogContent;
