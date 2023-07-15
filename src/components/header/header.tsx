import { Link } from 'react-router-dom';
import LogoHeader from '../logo-header/logo-header';
import SearchForm from '../search-form/search-form';

function Header(): JSX.Element {
  return (
    <header className="header" id="header">
      <div className="container">
        <LogoHeader />
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <Link className="main-nav__link" to="/">Каталог</Link>
            </li>
            <li className="main-nav__item">
              <Link className="main-nav__link" to="#todo">Гарантии</Link>
            </li>
            <li className="main-nav__item">
              <Link className="main-nav__link" to="#todo">Доставка</Link>
            </li>
            <li className="main-nav__item">
              <Link className="main-nav__link" to="#todo">О компании</Link>
            </li>
          </ul>
        </nav>
        <SearchForm />
        <Link className="header__basket-link" to="#todo" data-testid="basket-link">
          <svg width="16" height="16" aria-hidden="true">
            <use xlinkHref="#icon-basket"></use>
          </svg>
        </Link>
      </div>
    </header>
  );
}

export default Header;
