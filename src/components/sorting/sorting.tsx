import { useState } from 'react';
import { SortByOrder, SortByType } from '../../const';

type SortingProps = {
  onChange?: (sortByType: string, sortByOrder: string) => void;
}

function Sorting({ onChange }: SortingProps): JSX.Element {
  const [sortByType, setSortByType] = useState<string>(SortByType.Default);
  const [sortByOrder, setSortByOrder] = useState<string>(SortByOrder.Default);

  const handleSortByTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = event.target;
    setSortByType(id);
    if (onChange) {
      onChange(id, sortByOrder);
    }
  };

  const handleSortByOrderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = event.target;
    setSortByOrder(id);
    if (onChange) {
      onChange(sortByType, id);
    }
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
              onChange={ handleSortByTypeChange}
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
