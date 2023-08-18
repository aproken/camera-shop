import { Camera } from '../../types/camera';
import { CategoryMapper, } from '../../const';
import { getStylizedPrice } from '../../utils/utils';

type AddItemModalProps = {
  product: Camera;
  onClick: () => void;
  onClose: () => void;
}

function AddItemModal({ product, onClick, onClose }: AddItemModalProps): JSX.Element {
  const { name, previewImgWebp, previewImgWebp2x, previewImg, previewImg2x, vendorCode, type, category, level, price, } = product;

  const handleAddToBusket = () => onClick();

  return (
    <>
      <p className="title title--h4">Добавить товар в корзину</p>
      <div className="basket-item basket-item--short">
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
          <p className="basket-item__price"><span className="visually-hidden">Цена:</span>{`${ getStylizedPrice(price) } ₽`}</p>
        </div>
      </div>
      <div className="modal__buttons">
        <button
          onClick={ handleAddToBusket }
          className="btn btn--purple modal__btn modal__btn--fit-width"
          type="button"
        >
          <svg width="24" height="16" aria-hidden="true">
            <use xlinkHref="#icon-add-basket"></use>
          </svg>Добавить в корзину
        </button>
      </div>
      <button
        onClick={ onClose }
        className="cross-btn"
        type="button"
        aria-label="Закрыть попап"
      >
        <svg width="10" height="10" aria-hidden="true">
          <use xlinkHref="#icon-close"></use>
        </svg>
      </button>
    </>
  );
}

export default AddItemModal;
