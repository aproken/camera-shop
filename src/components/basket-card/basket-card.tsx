import { CategoryMapper } from '../../const';
import { useAppDispatch } from '../../hooks';
import { Order } from '../../types/order';
import { getStylizedPrice } from '../../utils/utils';
import QuantityOfCameras from '../quantity-of-cameras/quantity-of-cameras';
import { actions } from '../../store/basket-process/basket-process';

type BasketCardProps = {
  order: Order;
}

function BasketCard({ order }: BasketCardProps): JSX.Element {
  const dispatch = useAppDispatch();
  const { id, name, previewImgWebp, previewImgWebp2x, previewImg, previewImg2x, vendorCode, type, category, level, price, } = order.camera;

  const handlerOnClick = () => {
    dispatch(actions.deleteCameraIntoBasket(id));
  };

  return (
    <li className="basket-item">
      <div className="basket-item__img">
        <picture>
          <source type="image/webp" srcSet={`/${ previewImgWebp }, /${previewImgWebp2x}`} />
          <img
            src={ `/${previewImg}` }
            srcSet={ `/${previewImg2x}` }
            width="140"
            height="120"
            alt={ name }
          />
        </picture>
      </div>
      <div className="basket-item__description">
        <p className="basket-item__title">{ name }</p>
        <ul className="basket-item__list">
          <li className="basket-item__list-item"><span className="basket-item__article">Артикул:</span> <span className="basket-item__number">{ vendorCode }</span>
          </li>
          <li className="basket-item__list-item">{ `${ type }${' '}${ CategoryMapper[category].toLowerCase() } `}</li>
          <li className="basket-item__list-item">{`${ level } уровень`}</li>
        </ul>
      </div>
      <p className="basket-item__price"><span className="visually-hidden">Цена:</span>{`${ getStylizedPrice(price) } ₽`}</p>
      <QuantityOfCameras camera={ order.camera } quantity={ order.quantity }/>
      <div className="basket-item__total-price"><span className="visually-hidden">Общая цена:</span>{`${ getStylizedPrice(price * order.quantity) } ₽`}</div>
      <button
        onClick={ handlerOnClick }
        className="cross-btn"
        type="button"
        aria-label="Удалить товар"
      >
        <svg width="10" height="10" aria-hidden="true">
          <use xlinkHref="#icon-close"></use>
        </svg>
      </button>
    </li>
  );
}

export default BasketCard;
