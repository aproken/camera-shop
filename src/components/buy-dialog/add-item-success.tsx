import { Link, useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';

type AddItemSuccessModalProps = {
  onClose: () => void;
}

function AddItemSuccessModal({ onClose }: AddItemSuccessModalProps): JSX.Element {
  const navigate = useNavigate();

  const handleGoToBuscket = () => {
    navigate(AppRoute.Basket);
  };

  const handleGoToBuyClick = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    onClose();
  };

  return (
    <>
      <p className="title title--h4">Товар успешно добавлен в корзину</p>
      <svg className="modal__icon" width="86" height="80" aria-hidden="true">
        <use xlinkHref="#icon-success"></use>
      </svg>
      <div className="modal__buttons">
        <Link
          onClick={ handleGoToBuyClick }
          className="btn btn--transparent modal__btn"
          to="#"
        >Продолжить покупки
        </Link>
        <button
          onClick={ handleGoToBuscket }
          className="btn btn--purple modal__btn modal__btn--fit-width"
        >Перейти в корзину
        </button>
      </div>
      <button className="cross-btn" type="button" aria-label="Закрыть попап">
        <svg width="10" height="10" aria-hidden="true">
          <use xlinkHref="#icon-close"></use>
        </svg>
      </button>
    </>
  );
}

export default AddItemSuccessModal;
