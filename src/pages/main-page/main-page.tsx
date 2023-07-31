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
import { QueryParameter } from '../../const';

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

  const filteredCameras = useMemo(() => {
    const category = searchParams.get(QueryParameter.category);
    const level = searchParams.get(QueryParameter.level);
    const priceGte = searchParams.get(QueryParameter.priceGte);
    const priceLte = searchParams.get(QueryParameter.priceLte);
    const type = searchParams.get(QueryParameter.type);

    let camerasByFilter = cameras;

    if (category) {
      camerasByFilter = camerasByFilter.filter(
        (item) => category === item.category
      );
    }

    if (level) {
      camerasByFilter = camerasByFilter.filter(
        (item) => level === item.level
      );
    }

    if (type) {
      camerasByFilter = camerasByFilter.filter(
        (item) => type === item.type
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
                  <Filter />
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
