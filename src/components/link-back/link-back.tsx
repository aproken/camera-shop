import { Link } from 'react-router-dom';

type LinkBackProps = {
  currentPage: number;
  pageNumbers: number[];
}

function LinkBack({ currentPage, pageNumbers }: LinkBackProps): JSX.Element {
  return (
    currentPage !== pageNumbers[0]
      ?
      <li className="pagination__item">
        <Link
          to={ `/page/${currentPage - 1}`}
          className="pagination__link pagination__link--text"
        >Назад
        </Link>
      </li>
      :
      <li className="pagination__item"></li>
  );
}

export default LinkBack;
