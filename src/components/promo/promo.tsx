import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getPromoProduct } from '../../store/promo-process/selectors';
import { fetchPromoProductAction } from '../../store/api-action';
import { store } from '../../store';
import LoadingScreen from '../../pages/loading-screen/loading-screen';

function Promo(): JSX.Element {
  const dispatch = useAppDispatch();

  const promoProduct = useAppSelector(getPromoProduct);

  useEffect(() => {
    store.dispatch(fetchPromoProductAction());
  }, [dispatch]);

  if (!promoProduct) {
    return (
      <LoadingScreen />
    );
  }

  const { id, name, previewImg, previewImg2x, previewImgWebp, previewImgWebp2x, } = promoProduct;

  return (
    <div className="banner">
      <picture>
        <source type="image/webp" srcSet={`/${ previewImgWebp }, /${ previewImgWebp2x }`} />
        <img
          src={`/${ previewImg }`}
          srcSet={`/${ previewImg2x }`}
          width="1280"
          height="280"
          alt="баннер"
        />
      </picture>
      <p className="banner__info">
        <span className="banner__message">Новинка!</span>
        <span className="title title--h1">{ name }</span>
        <span className="banner__text">Профессиональная камера от&nbsp;известного производителя</span>
        <Link className="btn" to={`/cameras/${ id }`}>Подробнее</Link>
      </p>
    </div>
  );
}

export default Promo;
