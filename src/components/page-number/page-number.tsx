import { CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';

type PageNumberProps = {
  currentPage: number;
  page: number;
}

function PageNumber({ currentPage, page }: PageNumberProps): JSX.Element {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/page/${ page }`);
  };

  const pageNumbersStyle: CSSProperties = {
    border: 'none',
  };

  return (
    <li className="pagination__item">
      <button
        onClick={ handleClick }
        className={ currentPage === page ? 'pagination__link pagination__link--active' : 'pagination__link' }
        style={ pageNumbersStyle }
      >
        { page }
      </button>
    </li>
  );
}

export default PageNumber;
