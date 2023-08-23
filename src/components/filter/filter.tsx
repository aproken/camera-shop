import {
  Type,
  Category,
  Level,
  QueryParameterFilter,
  QueryParameterPriceBlock,
  CategoryMapper,
} from '../../const';
import { useSearchParams } from 'react-router-dom';
import PriceBlock from '../price-block/price-block';

type FilterProps = {
  minPrice: number;
  maxPrice: number;
}

const updateCheckbox = (prevFilters: URLSearchParams, name: QueryParameterFilter, checked: boolean, value: string) => {
  const prevValue = prevFilters.getAll(name);
  prevFilters.delete(name);
  const filterEntries = Array.from(prevFilters.entries()).filter(([k,_v]) => k !== name);
  let newValue = [];
  if (checked) {
    newValue = [value, ...prevValue];
  } else {
    newValue = prevValue.filter((i) => i !== value);
  }
  return new URLSearchParams([
    ...filterEntries,
    ...newValue.map((item) => [name, item])]);
};

function Filter({ minPrice, maxPrice }: FilterProps): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryValue = searchParams.get(QueryParameterFilter.category);
  const typesValue = searchParams.getAll(QueryParameterFilter.type) || [];
  const levelsValue = searchParams.getAll(QueryParameterFilter.level) || [];

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event.target;

    setSearchParams((prevFilters) => {
      prevFilters.delete(QueryParameterPriceBlock.MaxPrice);
      prevFilters.delete(QueryParameterPriceBlock.MinPrice);
      return prevFilters;
    });

    if (
      name === QueryParameterFilter.category &&
      value === Category.VideoCamera &&
      checked) {
      setSearchParams((prevValue) => ({
        ...prevValue,
        [QueryParameterFilter.type]: [],
      }));
    }

    if (
      name === QueryParameterFilter.level ||
      name === QueryParameterFilter.type
    ) {
      setSearchParams(
        (prevFilters) => updateCheckbox(prevFilters, name, checked, value)
      );
    }

    if (name === QueryParameterFilter.category) {
      setSearchParams((prevFilters) => {
        if (checked) {
          prevFilters.set(name, value);
        } else {
          prevFilters.delete(name);
        }
        return prevFilters;
      });
    }
  };

  const handleResetFilters = () => {
    setSearchParams((_old) => new URLSearchParams());
  };

  return (
    <form action="#">
      <h2 className="visually-hidden">Фильтр</h2>
      <fieldset className="catalog-filter__block">
        <legend className="title title--h5">Цена, ₽</legend>
        <PriceBlock minPrice={ minPrice } maxPrice={ maxPrice }/>
      </fieldset>
      <fieldset className="catalog-filter__block">
        <legend className="title title--h5">Категория</legend>
        {
          Object.values(Category).map((categoryItem) => (
            <div
              key={ categoryItem }
              className="custom-checkbox catalog-filter__item"
            >
              <label>
                <input
                  onChange={ handleInputChange }
                  checked={ categoryValue === categoryItem }
                  type="checkbox"
                  name={ QueryParameterFilter.category }
                  value={ categoryItem}
                />
                <span className="custom-checkbox__icon"></span>
                <span className="custom-checkbox__label">{ CategoryMapper[categoryItem] }</span>
              </label>
            </div>
          ))
        }
      </fieldset>
      <fieldset className="catalog-filter__block">
        <legend className="title title--h5">Тип камеры</legend>
        {
          Object.values(Type).map((typeItem) => (
            <div
              key={ typeItem }
              className="custom-checkbox catalog-filter__item"
            >
              <label>
                <input
                  onChange={ handleInputChange }
                  checked={ typesValue.includes(typeItem) }
                  type="checkbox"
                  name={ QueryParameterFilter.type }
                  value={ typeItem }
                  disabled={
                    (categoryValue === Category.VideoCamera && typeItem === Type.Membranous) ||
                    (categoryValue === Category.VideoCamera && typeItem === Type.Momentary)
                  }
                />
                <span className="custom-checkbox__icon"></span>
                <span className="custom-checkbox__label">{ typeItem }</span>
              </label>
            </div>
          ))
        }
      </fieldset>
      <fieldset className="catalog-filter__block">
        <legend className="title title--h5">Уровень</legend>
        {
          Object.values(Level).map((levelItem) => (
            <div
              key={ levelItem }
              className="custom-checkbox catalog-filter__item"
            >
              <label>
                <input
                  onChange={ handleInputChange }
                  checked={ levelsValue.includes(levelItem) }
                  type="checkbox"
                  name={ QueryParameterFilter.level }
                  value={ levelItem }
                />
                <span className="custom-checkbox__icon"></span>
                <span className="custom-checkbox__label">{ levelItem }</span>
              </label>
            </div>
          ))
        }
      </fieldset>
      <button
        onClick={ handleResetFilters }
        className="btn catalog-filter__reset-btn"
        type="reset"
      >Сбросить фильтры
      </button>
    </form>
  );
}

export default Filter;
