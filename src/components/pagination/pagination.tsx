import LinkBack from '../link-back/link-back';
import LinkForward from '../link-forward/link-forward';
import PageNumber from '../page-number/page-number';

type PaginationProps = {
  currentPageIndex: number;
  pageNumbers: number[];
}

function Pagination({ currentPageIndex, pageNumbers, }: PaginationProps): JSX.Element {
  const currentPage = Number(currentPageIndex);

  return (
    <div className="pagination">
      <ul className="pagination__list">
        <LinkBack currentPage={ currentPage } pageNumbers={ pageNumbers }/>
        {
          pageNumbers.map((page) => (
            <PageNumber key={ page } currentPage={ currentPage } page={ page } />
          ))
        }
        <LinkForward currentPage={ currentPage } pageNumbers={ pageNumbers } />
      </ul>
    </div>
  );
}

export default Pagination;
