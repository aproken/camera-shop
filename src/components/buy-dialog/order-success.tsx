import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks';
import { redirectToRoute } from '../../store/action';

type OrderSuccessModalProps = {
  onClose: () => void;
}

function OrderSuccessModal({ onClose }: OrderSuccessModalProps): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <>
      <p className="title title--h4">Спасибо за покупку</p>
      <svg className="modal__icon" width="80" height="78" aria-hidden="true">
        <use xlinkHref="#icon-review-success"></use>
      </svg>
      <div className="modal__buttons">
        <button
          onClick={ () => dispatch(redirectToRoute(AppRoute.Main)) }
          className="btn btn--purple modal__btn modal__btn--fit-width"
          type="button"
        >Вернуться к покупкам
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

export default OrderSuccessModal;
