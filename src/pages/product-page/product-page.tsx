import { /*Link,*/ useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import ProductTabs from '../../components/product-tabs/product-tabs';
import Slider from '../../components/slider/slider';
import ReviewsList from '../../components/reviews-list/reviews-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getCamera, getCameraComletingStatus } from '../../store/camera-process/selectors';
import LoadingScreen from '../loading-screen/loading-screen';
import { fetchCameraAction } from '../../store/api-action';
import NotFoundPage from '../not-found-page/not-found-page';
import { getStylizedPrice, CRUMBS, getBreadcrumbs } from '../../const';


function ProductPage(): JSX.Element {
  const { cameraId } = useParams();
  const currentProductId = Number(cameraId);
  const dispatch = useAppDispatch();

  const currentProduct = useAppSelector(getCamera);
  const isProductCompleting = useAppSelector(getCameraComletingStatus);

  useEffect(() => {
    if (currentProductId) {
      dispatch(fetchCameraAction(currentProductId));
    }
  }, [dispatch, currentProductId]);

  if (!currentProductId) {
    return (
      <NotFoundPage />
    );
  }

  if (isProductCompleting || !currentProduct) {
    return (
      <LoadingScreen />
    );
  }

  const { name, price, reviewCount, previewImg, previewImg2x, previewImgWebp, previewImgWebp2x, } = currentProduct;

  const stylizedPrice = getStylizedPrice(price);

  const productCrumbs = getBreadcrumbs(name, CRUMBS);

  return (
    <main>
      <div className="page-content">
        <Breadcrumbs crumbs={ productCrumbs }/>
        <div className="page-content__section">
          <section className="product">
            <div className="container">
              <div className="product__img">
                <picture>
                  <source type="image/webp" srcSet={`/${ previewImgWebp }, /${ previewImgWebp2x }`} />
                  <img
                    src={`/${ previewImg }`}
                    srcSet={`/${ previewImg2x }`}
                    width="560"
                    height="480"
                    alt="Ретрокамера Das Auge IV"
                  />
                </picture>
              </div>
              <div className="product__content">
                <h1 className="title title--h3">{ name }</h1>
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
                  <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{ reviewCount }</p>
                </div>
                <p className="product__price"><span className="visually-hidden">Цена:</span>{ stylizedPrice } ₽</p>
                <button className="btn btn--purple" type="button">
                  <svg width="24" height="16" aria-hidden="true">
                    <use xlinkHref="#icon-add-basket"></use>
                  </svg>Добавить в корзину
                </button>
                <ProductTabs product={ currentProduct } />
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
