type BuyButtonProps = {
  onClick: () => void;
}

function BuyButton({ onClick }: BuyButtonProps): JSX.Element {
  return (
    <button
      onClick={ onClick }
      className="btn btn--purple product-card__btn"
      type="button"
    >Купить
    </button>
  );
}

export default BuyButton;
