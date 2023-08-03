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
import { QueryParameterFilter } from '../../const';
import { getMinPrice, getMaxPrice } from '../../utils/utils';

function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const cameras = useAppSelector(getCamerasList);
  const isCamerasListCompleting = useAppSelector(getCamerasListCompletingStatus);
  const { pageIndex } = useParams();
  const [searchParams] = useSearchParams();
  const currentPageIndex = Number(pageIndex);
  const minPrice = getMinPrice(cameras || []);
  const maxPrice = getMaxPrice(cameras || []);

  useEffect(() => {
    dispatch(fetchCamerasWithAverageRatingAction());
  }, [dispatch]);

  const filteredCameras = useMemo(() => {
    const category = searchParams.get(QueryParameterFilter.category);
    const level = searchParams.getAll(QueryParameterFilter.level);
    const priceGte = searchParams.get(QueryParameterFilter.priceGte);
    const priceLte = searchParams.get(QueryParameterFilter.priceLte);
    const type = searchParams.getAll(QueryParameterFilter.type);

    let camerasByFilter = cameras;

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

    if (priceGte) {
      camerasByFilter = camerasByFilter.filter(
        (item) => item.price >= Number(priceGte)
      );
    }

    if (priceLte) {
      camerasByFilter = camerasByFilter.filter(
        (item) => item.price <= Number(priceLte)
      );
    }

    return camerasByFilter;
  }, [searchParams, cameras]);

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
