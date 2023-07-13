import { Link } from 'react-router-dom';
import { Camera } from '../../types/camera';
import { getAverageRating } from '../../store/camera-process/selectors';
import { fetchAvarageRatingsAction } from '../../store/api-action';
import { getStylizedPrice } from '../../utils/utils';
import ProductStarsRating from '../product-stars-rating/product-stars-rating';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';

type ProductCardProps = {
  product: Camera;
  classNames?: string[];
  onBuyClick?: () => void;
}

function ProductCard({ product, classNames = [], onBuyClick, }: ProductCardProps): JSX.Element {
  const dispatch = useAppDispatch();

  const className = [ ...classNames, 'product-card'];
  const productClassName = className.join(' ');
  const {
    id,
    name,
    reviewCount,
    previewImg,
    previewImg2x,
    previewImgWebp,
    previewImgWebp2x,
    price,
  } = product;

  const averageRating = useAppSelector(getAverageRating);

  useEffect(() => {
    dispatch(fetchAvarageRatingsAction(id));
  }, [dispatch, id]);

  return (
    <div className={ productClassName }>
      <div className="product-card__img">
        <picture>
          <source type="image/webp" srcSet={`/${ previewImgWebp }, /${previewImgWebp2x}`} />
          <img
            src={ `/${previewImg}` }
            srcSet={ `/${previewImg2x}` }
            width="280"
            height="240"
            alt={ name }
          />
        </picture>
      </div>
      <div className="product-card__info">
        <ProductStarsRating rating={ averageRating[id] } totalReview={ reviewCount } />
        <p className="product-card__title">{ name }</p>
        <p className="product-card__price">
          <span className="visually-hidden">Цена:</span>{`${ getStylizedPrice(price) } ₽`}
        </p>
      </div>
      <div className="product-card__buttons">
        <button
          onClick={ onBuyClick }
          className="btn btn--purple product-card__btn"
          type="button"
        >Купить
        </button>
        <Link className="btn btn--transparent" to={`/cameras/${ id }`}>Подробнее</Link>
      </div>
    </div>
  );
}

export default ProductCard;
