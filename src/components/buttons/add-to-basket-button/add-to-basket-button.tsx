type AddToBasketButtonProps = {
  onClick: () => void;
}

function AddToBasketButton({ onClick }: AddToBasketButtonProps): JSX.Element {
  return (
    <button
      className="btn btn--purple"
      type="button"
      onClick={ onClick }
    >
      <svg width="24" height="16" aria-hidden="true">
        <use xlinkHref="#icon-add-basket"></use>
      </svg>Добавить в корзину
    </button>
  );
}

export default AddToBasketButton;
