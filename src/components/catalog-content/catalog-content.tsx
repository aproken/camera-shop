import { useState, useEffect } from 'react';
import { Camera, Cameras } from '../../types/camera';
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
import { fetchAverageRatingAction } from '../../store/api-action';
import { unwrapResult } from '@reduxjs/toolkit';

type CatalogContentProps = {
  products: Cameras;
  currentPageIndex: number;
}

function CatalogContent({ products, currentPageIndex }: CatalogContentProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [sortByType, setSortByType] = useState<string>(SortByType.Default);
  const [sortByOrder, setSortByOrder] = useState<string>(SortByOrder.Default);
  const [averageRating, setAverageRating] = useState<Record<number, number>>({});

  const pageNumbers = getPageNumbers(products.length, PRODUCTS_COUNT_ON_PAGE);

  useEffect(() => {
    if (!currentPageIndex || currentPageIndex > pageNumbers.length) {
      dispatch(redirectToRoute(AppRoute.NotFound));
    }
  }, [currentPageIndex, dispatch, pageNumbers.length]);

  useEffect(() => {
    const fetchAverageRatings = async () => {
      try {
        const ratingPromises = products.map((product) => {
          return dispatch(fetchAverageRatingAction(product.id))
            .then(unwrapResult) // Распаковываем успешное значение из createAsyncThunk
            .then((result) => ({ id: result.id, averageRating: result.averageRating }));
        });

        const ratings = await Promise.all(ratingPromises);
        const ratingsMap: Record<number, number> = {};

        ratings.forEach((rating) => {
          ratingsMap[rating.id] = rating.averageRating;
        });

        setAverageRating(ratingsMap);
      } catch (error) {
        // Обработка ошибки, если что-то пошло не так при получении среднего рейтинга
        console.error('Ошибка при получении среднего рейтинга:', error);
      }
    };

    fetchAverageRatings();
  }, [dispatch, products]);

  const handleSortingChange = (newSortByType: string, newSortByOrder: string) => {
    setSortByType(newSortByType);
    setSortByOrder(newSortByOrder);
  };

  const sortedProducts = sortProducts(products, sortByType, sortByOrder, averageRating);
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
