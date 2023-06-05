import { Link } from 'react-router-dom';

type SocialItemProps = {
  xlinkHref: string;
}

function SocialItem({ xlinkHref }: SocialItemProps): JSX.Element {
  return (
    <li className="social__item">
      <Link className="link" to="#todo" aria-label="Переход на страницу ">
        <svg width="20" height="20" aria-hidden="true">
          <use xlinkHref={ xlinkHref }></use>
        </svg>
      </Link>
    </li>
  );
}

export default SocialItem;
