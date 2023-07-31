type ReviewSuccessModalProps = {
  onClose: () => void;
};

function ReviewSuccessModal({ onClose }: ReviewSuccessModalProps): JSX.Element {
  return (
    <>
      <p className="title title--h4">Спасибо за отзыв</p>
      <svg className="modal__icon" width="80" height="78" aria-hidden="true">
        <use xlinkHref="#icon-review-success"></use>
      </svg>
      <div className="modal__buttons">
        <button
          onClick={ onClose }
          className="btn btn--purple modal__btn modal__btn--fit-width"
          type="button"
        >
            Вернуться к покупкам
        </button>
      </div>
    </>
  );
}

export default ReviewSuccessModal;
