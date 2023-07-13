import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  getAverageRating,
  getCamera,
  getCameraComletingStatus,
  getReviewsList,
  getSimilar,
  getSimilarCompletingStatus
} from '../../store/camera-process/selectors';
import {
  fetchCameraAction,
  fetchReviewsAction,
  fetchSimilarAction,
  fetchAvarageRatingsAction,
} from '../../store/api-action';
import LoadingScreen from '../loading-screen/loading-screen';
import NotFoundPage from '../not-found-page/not-found-page';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import ProductTabs from '../../components/product-tabs/product-tabs';
import ProductSlider from '../../components/product-slider/product-slider';
import ReviewsBlock from '../../components/reviews-block/reviews-block';
import { getStylizedPrice } from '../../utils/utils';
import ProductStarsRating from '../../components/product-stars-rating/product-stars-rating';

function ProductPage(): JSX.Element {
  const { cameraId } = useParams();
  const currentProductId = Number(cameraId);
  const dispatch = useAppDispatch();

  const currentProduct = useAppSelector(getCamera);
  const averageRating = useAppSelector(getAverageRating);
  const isProductCompleting = useAppSelector(getCameraComletingStatus);
  const similarList = useAppSelector(getSimilar);
  const isSimilarCompleting = useAppSelector(getSimilarCompletingStatus);
  const reviewsList = useAppSelector(getReviewsList);

  useEffect(() => {
    if (currentProductId) {
      dispatch(fetchCameraAction(currentProductId));
      dispatch(fetchAvarageRatingsAction(currentProductId));
      dispatch(fetchSimilarAction(currentProductId));
      dispatch(fetchReviewsAction(currentProductId));
    }
  }, [dispatch, currentProductId]);

  if (!currentProductId) {
    return (
      <NotFoundPage />
    );
  }

  if (!isProductCompleting || !currentProduct ) {
    return (
      <main id="product-page" className="loading-container">
        <LoadingScreen />
      </main>
    );
  }

  const { name, price, reviewCount, previewImg, previewImg2x, previewImgWebp, previewImgWebp2x, } = currentProduct;

  const stylizedPrice = getStylizedPrice(price);

  const productCrumbs = [
    {label: 'Главная', href: '/'},
    {label: 'Каталог', href: '/'},
    {label: name}
  ];

  // eslint-disable-next-line no-console
  console.log(averageRating);

  return (
    <main id="product-page">
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
                <ProductStarsRating rating={ averageRating } totalReview={ reviewCount } />
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
          { (similarList || isSimilarCompleting) && <ProductSlider similar={ similarList }/> }
        </div>
        <div className="page-content__section">
          <ReviewsBlock productId={ currentProductId } comments={ reviewsList } />
        </div>
      </div>
    </main>
  );
}

export default ProductPage;
