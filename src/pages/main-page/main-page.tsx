import { useEffect, useMemo } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks';
import LoadingScreen from '../loading-screen/loading-screen';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import Promo from '../../components/promo/promo';
import Filter from '../../components/filter/filter';
import CatalogContent from '../../components/catalog-content/catalog-content';
import { getCamerasList, getCamerasListCompletingStatus } from '../../store/camera-process/selectors';
import { fetchCamerasWithAverageRatingAction } from '../../store/api-action';
import { QueryParameterFilter, QueryParameterPriceBlock } from '../../const';
import { getMinPrice, getMaxPrice } from '../../utils/utils';
import { Cameras } from '../../types/camera';

const getFilterWithoutPrice = (filters: URLSearchParams) => new URLSearchParams(
  Array.from(filters.entries())
    .filter(
      ([k,v]) => !['price_gte','price_lte'].includes(k)
    )
);

const getCameraByFilter = (cameraList: Cameras, filterParams: URLSearchParams) => {
  const category = filterParams.get(QueryParameterFilter.category);
  const type = filterParams.getAll(QueryParameterFilter.type);
  const level = filterParams.getAll(QueryParameterFilter.level);
  const priceGte = filterParams.get(QueryParameterPriceBlock.MinPrice);
  const priceLte = filterParams.get(QueryParameterPriceBlock.MaxPrice);

  let camerasByFilter = cameraList;

  if (category) {
    camerasByFilter = camerasByFilter.filter(
      (item) => category === item.category
    );
  }

  if (level.length > 0) {
    camerasByFilter = camerasByFilter.filter(
      (item) => level.includes(item.level)
    );
  }

  if (type.length > 0) {
    camerasByFilter = camerasByFilter.filter(
      (item) => type.includes(item.type)
    );
  }

  if (priceGte && priceGte !== '0') {
    camerasByFilter = camerasByFilter.filter(
      (item) => item.price >= Number(priceGte)
    );
  }

  if (priceLte && priceLte !== '0') {
    camerasByFilter = camerasByFilter.filter(
      (item) => item.price <= Number(priceLte)
    );
  }

  return camerasByFilter;
};

function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const cameras = useAppSelector(getCamerasList);
  const isCamerasListCompleting = useAppSelector(getCamerasListCompletingStatus);
  const { pageIndex } = useParams();
  const [searchParams] = useSearchParams();
  const currentPageIndex = Number(pageIndex);

  useEffect(() => {
    dispatch(fetchCamerasWithAverageRatingAction());
  }, [dispatch]);

  const filteredCameras = useMemo(
    () => getCameraByFilter(cameras, searchParams),
    [searchParams, cameras]
  );

  const [minPrice, maxPrice] = useMemo(
    () => {
      const fCameras = getCameraByFilter(cameras, getFilterWithoutPrice(searchParams));
      return [
        getMinPrice(fCameras || []),
        getMaxPrice(fCameras || [])
      ];
    }, [searchParams, cameras]
  );

  if (!isCamerasListCompleting) {
    return (
      <main id="main-page" className="loading-container">
        <LoadingScreen />
      </main>
    );
  }

  const CRUMBS = [
    {label: 'Главная', href: '/'},
    {label: 'Каталог'},
  ];

  return (
    <main id="main-page">
      <Promo />
      <div className="page-content">
        <Breadcrumbs crumbs={ CRUMBS }/>

        <section className="catalog">
          <div className="container">
            <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
            <div className="page-content__columns">
              <div className="catalog__aside">

                <div className="catalog-filter">
                  <Filter minPrice={ minPrice } maxPrice={ maxPrice }/>
                </div>
              </div>

              <CatalogContent products={ filteredCameras } currentPageIndex={ currentPageIndex } />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default MainPage;
