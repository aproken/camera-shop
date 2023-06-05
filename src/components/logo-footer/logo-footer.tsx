import { Link } from 'react-router-dom';

function LogoFooter(): JSX.Element {
  return (
    <Link className="footer__logo" to="/" aria-label="Переход на главную">
      <svg width="100" height="36" aria-hidden="true">
        <use xlinkHref="#icon-logo-mono"></use>
      </svg>
    </Link>
  );
}

export default LogoFooter;
