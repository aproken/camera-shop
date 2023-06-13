import { Link } from 'react-router-dom';

type BreadcrumbsProps = {
  crumbs: string[];
}

function Breadcrumbs({ crumbs }: BreadcrumbsProps): JSX.Element {
  return (
    <div className="breadcrumbs">
      <div className="container">
        <ul className="breadcrumbs__list">
          {
            crumbs.map((crumb, index) => (
              <li key={ crumb } className="breadcrumbs__item" >
                <Link
                  className={`breadcrumbs__link ${ index === (crumbs.length - 1) ? 'breadcrumbs__link--active' : '' }`}
                  to="/"
                >
                  { crumb }
                  {index !== (crumbs.length - 1) && (
                    <svg width="5" height="8" aria-hidden="true">
                      <use xlinkHref="#icon-arrow-mini"></use>
                    </svg>
                  )}
                </Link>
              </li>
            )
            )
          }
        </ul>
      </div>
    </div>
  );
}

export default Breadcrumbs;
