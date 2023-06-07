import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import Banner from '../../components/banner/banner';
import Filter from '../../components/filter/filter';
import CatalogContent from '../../components/catalog-content/catalog-content';
import { getCamerasList, getCamerasListCompletingStatus } from '../../store/camera-process/selectors';
import { useAppSelector, useAppDispatch } from '../../hooks';
import LoadingScreen from '../loading-screen/loading-screen';
import { fetchCamerasListAction } from '../../store/api-action';
import { store } from '../../store';
import { useEffect } from 'react';

function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const cameras = useAppSelector(getCamerasList);
  const isCamerasListCompleting = useAppSelector(getCamerasListCompletingStatus);

  useEffect(() => {
    store.dispatch(fetchCamerasListAction());
  }, [dispatch]);


  if (isCamerasListCompleting) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <main>
      <Banner />
      <div className="page-content">
        <Breadcrumbs />

        <section className="catalog">
          <div className="container">
            <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
            <div className="page-content__columns">
              <div className="catalog__aside">

                <div className="catalog-filter">
                  <Filter />
                </div>
              </div>

              <CatalogContent products={ cameras }/>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default MainPage;
