import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Camera } from '../../types/camera';
import { getStylizedPrice } from '../../utils/utils';
import ProductStarsRating from '../product-stars-rating/product-stars-rating';
import BuyDialog from '../buy-dialog/buy-dialog';
import { useAppSelector } from '../../hooks';
import { isProductInBasket } from '../../store/basket-process/selectors';
import CameraInOrderButton from '../buttons/camera-in-order/camera-in-order';
import BuyButton from '../buttons/buy-button/buy-button';

type ProductCardProps = {
  product: Camera;
  classNames?: string[];
}

function ProductCard({ product, classNames = [], }: ProductCardProps): JSX.Element {
  const className = [ ...classNames, 'product-card'];
  const productClassName = className.join(' ');
  const {
    id,
    name,
    reviewCount,
    averageRating,
    previewImg,
    previewImg2x,
    previewImgWebp,
    previewImgWebp2x,
    price,
  } = product;

  const rating = averageRating ?? 0;

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const isProductInOrder = useAppSelector((state) => isProductInBasket(state, product.id));

  return (
    <div
      className={ productClassName }
      data-testid="product-card"
    >
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
        <ProductStarsRating rating={ rating } totalReview={ reviewCount } />
        <p className="product-card__title">{ name }</p>
        <p className="product-card__price">
          <span className="visually-hidden">Цена:</span>{`${ getStylizedPrice(price) } ₽`}
        </p>
      </div>
      <div className="product-card__buttons">
        {
          isProductInOrder
            ?
            <CameraInOrderButton />
            :
            <BuyButton onClick={ toggle }/>
        }
        <Link className="btn btn--transparent" to={`/cameras/${ id }`}>Подробнее</Link>
      </div>
      <BuyDialog product={ product } isOpen={ isOpen } onClose={ toggle }/>
    </div>
  );
}

export default ProductCard;
