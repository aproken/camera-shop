import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';

function CameraInOrderButton(): JSX.Element {
  return (
    <Link
      className="btn btn--purple-border product-card__btn product-card__btn--in-cart"
      to={ AppRoute.Basket }
    >
      <svg width="16" height="16" aria-hidden="true">
        <use xlinkHref="#icon-basket"></use>
      </svg>В корзине
    </Link>
  );
}

export default CameraInOrderButton;
