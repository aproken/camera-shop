import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import ProductTabs from '../../components/product-tabs/product-tabs';
import Slider from '../../components/slider/slider';
import ReviewsList from '../../components/reviews-list/reviews-list';

function ProductPage(): JSX.Element {
  return (
    <main>
      <div className="page-content">
        <Breadcrumbs />
        <div className="page-content__section">
          <section className="product">
            <div className="container">
              <div className="product__img">
                <picture>
                  <source type="image/webp" srcSet="img/content/img1.webp, img/content/img1@2x.webp 2x" />
                  <img
                    src="img/content/img1.jpg"
                    srcSet="img/content/img1@2x.jpg 2x"
                    width="560"
                    height="480"
                    alt="Ретрокамера Das Auge IV"
                  />
                </picture>
              </div>
              <div className="product__content">
                <h1 className="title title--h3">Ретрокамера Das Auge IV</h1>
                <div className="rate product__rate">
                  <svg width="17" height="16" aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg width="17" height="16" aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg width="17" height="16" aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg width="17" height="16" aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg width="17" height="16" aria-hidden="true">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                  <p className="visually-hidden">Рейтинг: 4</p>
                  <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>12</p>
                </div>
                <p className="product__price"><span className="visually-hidden">Цена:</span>73 450 ₽</p>
                <button className="btn btn--purple" type="button">
                  <svg width="24" height="16" aria-hidden="true">
                    <use xlinkHref="#icon-add-basket"></use>
                  </svg>Добавить в корзину
                </button>
                <ProductTabs />
              </div>
            </div>
          </section>
        </div>
        <div className="page-content__section">
          <section className="product-similar">
            <div className="container">
              <h2 className="title title--h3">Похожие товары</h2>
              <Slider />
            </div>
          </section>
        </div>
        <div className="page-content__section">
          <section className="review-block">
            <div className="container">
              <div className="page-content__headed">
                <h2 className="title title--h3">Отзывы</h2>
                <button className="btn" type="button">Оставить свой отзыв</button>
              </div>
              <ReviewsList />
              <div className="review-block__buttons">
                <button className="btn btn--purple" type="button">Показать больше отзывов
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default ProductPage;
