import { useNavigate, useSearchParams } from 'react-router-dom';
import { QueryParameterSort, SortByOrder, SortByType } from '../../const';

function Sorting(): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const sortByType = searchParams.get(QueryParameterSort.sortByType) || SortByType.Default;
  const sortByOrder = searchParams.get(QueryParameterSort.sortByOrder) || SortByOrder.Default;
  //тип сортировки популярность или цена
  const handleSortByTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = event.target;

    let newSortByType = sortByType;
    let newSortByOrder = sortByOrder;
    if(sortByOrder === SortByOrder.Default) {
      newSortByOrder = SortByOrder.Up;
    }
    if (id === SortByType.Popularity) {
      newSortByType = SortByType.Popularity;
    } else if (id === SortByType.Price) {
      newSortByType = SortByType.Price;
    }

    navigate('/page/1');
    setSearchParams((params) => {
      params.set(QueryParameterSort.sortByType, newSortByType);
      params.set(QueryParameterSort.sortByOrder, newSortByOrder);
      return params;
    });
  };
  //направление вверх или вних по цене
  const handleSortByOrderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = event.target;

    let newSortByType = sortByType;
    let newSortByOrder = id;

    if (sortByType === SortByType.Popularity) {
      newSortByOrder = id;
    } else if (id === SortByOrder.Up || id === SortByOrder.Down) {
      newSortByType = SortByType.Price;
    }

    navigate('/page/1');
    setSearchParams((params) => {
      params.set(QueryParameterSort.sortByType, newSortByType);
      params.set(QueryParameterSort.sortByOrder, newSortByOrder);
      return params;
    });
  };

  return (
    <form action="#">
      <div className="catalog-sort__inner">
        <p className="title title--h5">Сортировать:</p>
        <div className="catalog-sort__type">
          <div className="catalog-sort__btn-text">
            <input
              type="radio"
              id={ SortByType.Price }
              name="sort"
              checked={ sortByType === SortByType.Price }
              onChange={ handleSortByTypeChange }
            />
            <label htmlFor={ SortByType.Price }>по цене</label>
          </div>
          <div className="catalog-sort__btn-text">
            <input
              type="radio"
              id={ SortByType.Popularity }
              name="sort"
              checked={ sortByType === SortByType.Popularity }
              onChange={ handleSortByTypeChange }
            />
            <label htmlFor={ SortByType.Popularity }>по популярности</label>
          </div>
        </div>
        <div className="catalog-sort__order">
          <div className="catalog-sort__btn catalog-sort__btn--up">
            <input
              type="radio"
              id={ SortByOrder.Up }
              name="sort-icon"
              aria-label="По возрастанию"
              checked={ sortByOrder === SortByOrder.Up }
              onChange={ handleSortByOrderChange }
            />
            <label htmlFor={ SortByOrder.Up }>
              <svg width="16" height="14" aria-hidden="true">
                <use xlinkHref="#icon-sort"></use>
              </svg>
            </label>
          </div>
          <div className="catalog-sort__btn catalog-sort__btn--down">
            <input
              type="radio"
              id={SortByOrder.Down}
              name="sort-icon"
              aria-label="По убыванию"
              checked={ sortByOrder === SortByOrder.Down }
              onChange={ handleSortByOrderChange }
            />
            <label htmlFor={ SortByOrder.Down }>
              <svg width="16" height="14" aria-hidden="true">
                <use xlinkHref="#icon-sort"></use>
              </svg>
            </label>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Sorting;
