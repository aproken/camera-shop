import { Link } from 'react-router-dom';

type PageNumberProps = {
  currentPage: number;
  page: number;
}

function PageNumber({ currentPage, page }: PageNumberProps): JSX.Element {
  return (
    <li className="pagination__item">
      {
        (page === currentPage) ?
          <Link className="pagination__link pagination__link--active" to={ `/page/${page}`} >{ page }</Link>
          :
          <Link className="pagination__link" to={ `/page/${page}`}>{ page }</Link>
      }

    </li>
  );
}

export default PageNumber;
