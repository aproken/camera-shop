import { Link } from 'react-router-dom';

type LinkForwardProps = {
  currentPage: number;
  pageNumbers: number[];
}

function LinkForward({ currentPage, pageNumbers }: LinkForwardProps): JSX.Element {
  return (
    currentPage !== pageNumbers.length
      ?
      <li className="pagination__item">
        <Link
          to={ `/page/${currentPage + 1}`}
          className="pagination__link pagination__link--text"
        >Далее
        </Link>
      </li>
      :
      <li className="pagination__item"></li>
  );
}

export default LinkForward;
