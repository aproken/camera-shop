import { Link } from 'react-router-dom';
import { Camera } from '../../types/camera';
import { getStylizedPrice } from '../../utils/utils';

type ProductCardProps = {
  product: Camera;
  classNames?: string[];
  onBuyClick?: () => void;
}

function ProductCard({ product, classNames = [], onBuyClick, }: ProductCardProps): JSX.Element {
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
        <div className="rate product-card__rate">
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
          <svg width="17" height="16" aria-hidden="true">
            <use xlinkHref="#icon-star"></use>
          </svg>
          <p className="visually-hidden">Рейтинг: 3</p>
          <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{ reviewCount }</p>
        </div>
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
