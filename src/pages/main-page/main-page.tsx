import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { store } from '../../store';
import LoadingScreen from '../loading-screen/loading-screen';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import Promo from '../../components/promo/promo';
import Filter from '../../components/filter/filter';
import CatalogContent from '../../components/catalog-content/catalog-content';
import { getCamerasList, getCamerasListCompletingStatus } from '../../store/camera-process/selectors';
import { fetchCamerasListAction } from '../../store/api-action';
import { CRUMBS } from '../../const';

function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const cameras = useAppSelector(getCamerasList);
  const isCamerasListCompleting = useAppSelector(getCamerasListCompletingStatus);
  const { pageIndex } = useParams();
  const currentProductsPage = Number(pageIndex);

  useEffect(() => {
    store.dispatch(fetchCamerasListAction());
  }, [dispatch]);


  if (!isCamerasListCompleting) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <main>
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

              <CatalogContent products={ cameras } currentPage={ currentProductsPage }/>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default MainPage;
