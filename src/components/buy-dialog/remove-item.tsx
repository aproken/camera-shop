import { Link } from 'react-router-dom';
import { Camera } from '../../types/camera';
import { getStylizedPrice } from '../../utils/utils';
import { CategoryMapper } from '../../const';


type RemoveItemModalProps = {
  product: Camera;
  onClick: () => void;
  onClose: () => void;
}

function RemoveItemModal({ product, onClick, onClose }: RemoveItemModalProps): JSX.Element {
  const { name, previewImgWebp, previewImgWebp2x, previewImg, previewImg2x, vendorCode, type, category, level, price, } = product;

  const handleGoToBuyClick = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    onClose();
  };

  return (
    <>
      <p className="title title--h4">Удалить этот товар?</p>
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
          onClick={ onClick }
          className="btn btn--purple modal__btn modal__btn--half-width"
          type="button"
        >Удалить
        </button>
        <Link
          onClick={ handleGoToBuyClick }
          className="btn btn--transparent modal__btn"
          to="#"
        >Продолжить покупки
        </Link>
      </div>
      <button className="cross-btn" type="button" aria-label="Закрыть попап">
        <svg width="10" height="10" aria-hidden="true">
          <use xlinkHref="#icon-close"></use>
        </svg>
      </button>
    </>
  );
}

export default RemoveItemModal;
