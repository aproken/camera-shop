import { Cameras } from '../../types/camera';
import Pagination from '../pagination/pagination';
import ProductCard from '../product-card/product-card';
import Sorting from '../sorting/sorting';

type CatalogContentProps = {
  products: Cameras;
}

function CatalogContent({ products }: CatalogContentProps): JSX.Element {

  return (
    <div className="catalog__content">

      <div className="catalog-sort">
        <Sorting />
      </div>

      <div className="cards catalog__cards">
        {
          products.slice(0, 9).map((product) => (
            <ProductCard
              key={ product.id }
              product={ product }
              onBuyClick={ () => null }
            />
          ))
        }
      </div>

      <Pagination />
    </div>
  );
}

export default CatalogContent;
