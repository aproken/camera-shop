import LinkBack from '../link-back/link-back';
import LinkForward from '../link-forward/link-forward';
import PageNumber from '../page-number/page-number';

type PaginationProps = {
  currentPage: number;
  pageNumbers: number[];
}

function Pagination({ currentPage, pageNumbers, }: PaginationProps): JSX.Element {
  return (
    <div className="pagination">
      <ul className="pagination__list">
        <LinkBack currentPage={currentPage} pageNumbers={ pageNumbers }/>
        {
          pageNumbers.map((page) => (
            <PageNumber key={page} currentPage={ currentPage } page={page} />
          ))
        }
        <LinkForward currentPage={ currentPage } pageNumbers={ pageNumbers } />
      </ul>
    </div>
  );
}

export default Pagination;
