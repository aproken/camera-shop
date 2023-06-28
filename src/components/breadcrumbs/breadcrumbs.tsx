import { Link } from 'react-router-dom';

type BreadcrumbItem = {
  href?: string;
  label: string;
}

type BreadcrumbsProps = {
  crumbs: BreadcrumbItem[];
}

function Breadcrumbs({ crumbs }: BreadcrumbsProps): JSX.Element {
  return (
    <div className="breadcrumbs">
      <div className="container">
        <ul className="breadcrumbs__list">
          {crumbs.map((item, index) => (
            <li key={item.label} className="breadcrumbs__item">
              {item.href ? (
                <Link className="breadcrumbs__link" to={item.href}>
                  {item.label}
                  <svg width="5" height="8" aria-hidden="true">
                    <use xlinkHref="#icon-arrow-mini"></use>
                  </svg>
                </Link>
              ) : (
                <span className="breadcrumbs__link breadcrumbs__link--active">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Breadcrumbs;
