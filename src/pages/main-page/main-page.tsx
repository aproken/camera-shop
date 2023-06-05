import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import Banner from '../../components/banner/banner';
import Filter from '../../components/filter/filter';
import Sorting from '../../components/sorting/sorting';
import CatalogCards from '../../components/catalog-cards/catalog-cards';
import Pagination from '../../components/pagination/pagination';

function MainPage(): JSX.Element {
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

              <div className="catalog__content">

                <div className="catalog-sort">
                  <Sorting />
                </div>

                <CatalogCards />
                <Pagination />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default MainPage;
