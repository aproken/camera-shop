import { Link } from 'react-router-dom';
import LogoFooter from '../logo-footer/logo-footer';
import SocialItem from '../social-item/social-item';
import { IconSocial } from '../../const';

function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__info">
          <LogoFooter />
          <p className="footer__description">Интернет-магазин фото- и видеотехники</p>
          <ul className="social">
            <SocialItem xlinkHref={ IconSocial.VK }/>
            <SocialItem xlinkHref={ IconSocial.VK }/>
            <SocialItem xlinkHref={ IconSocial.VK }/>
          </ul>
        </div>
        <ul className="footer__nav">
          <li className="footer__nav-item">
            <p className="footer__title">Навигация</p>
            <ul className="footer__list">
              <li className="footer__item">
                <Link className="link" to="#todo">Каталог</Link>
              </li>
              <li className="footer__item">
                <Link className="link" to="#todo">Гарантии</Link>
              </li>
              <li className="footer__item">
                <Link className="link" to="#todo">Доставка
                </Link>
              </li>
              <li className="footer__item">
                <Link className="link" to="#todo">О компании
                </Link>
              </li>
            </ul>
          </li>
          <li className="footer__nav-item">
            <p className="footer__title">Ресурсы</p>
            <ul className="footer__list">
              <li className="footer__item">
                <Link className="link" to="#todo">Курсы операторов
                </Link>
              </li>
              <li className="footer__item">
                <Link className="link" to="#todo">Блог
                </Link>
              </li>
              <li className="footer__item">
                <Link className="link" to="#todo">Сообщество
                </Link>
              </li>
            </ul>
          </li>
          <li className="footer__nav-item">
            <p className="footer__title">Поддержка</p>
            <ul className="footer__list">
              <li className="footer__item">
                <Link className="link" to="#todo">FAQ
                </Link>
              </li>
              <li className="footer__item">
                <Link className="link" to="#todo">Задать вопрос
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
