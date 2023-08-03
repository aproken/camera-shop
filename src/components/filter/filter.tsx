import { useEffect, useState } from 'react';
import { Type, Category, Level, FilterData, QueryParameterFilter } from '../../const';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDebounce } from '../../hooks/useDebounce';

type FilterProps = {
  minPrice: number;
  maxPrice: number;
}

function Filter({ minPrice, maxPrice }: FilterProps): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const initialState = {
    [QueryParameterFilter.category]: searchParams.get(QueryParameterFilter.category),
    [QueryParameterFilter.type]: searchParams.getAll(QueryParameterFilter.type) || [],
    [QueryParameterFilter.level]: searchParams.getAll(QueryParameterFilter.level) || [],
    [QueryParameterFilter.priceGte]: searchParams.get(QueryParameterFilter.priceGte) || minPrice,
    [QueryParameterFilter.priceLte]: searchParams.get(QueryParameterFilter.priceLte) || maxPrice,
  } as FilterData;

  const [filters, setFilters] = useState<FilterData>(initialState);
  const debouncedValue = useDebounce<FilterData>(filters, 2000);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;

    const updateCheckbox = (prevFilters: FilterData) => {
      const filterNameParam = QueryParameterFilter[name as keyof typeof QueryParameterFilter];
      const oldValue = prevFilters[filterNameParam] as string[];
      if (checked) {
        return { ...prevFilters, [name]: [value, ...oldValue] };
      } else {
        return { ...prevFilters, [name]: oldValue.filter((i) => i !== value) };
      }
    };

    if (type === 'checkbox') {
      if (
        name === QueryParameterFilter.category &&
        value === Category.VideoCamera &&
        checked && (
          filters.type?.includes(Type.Collectible) || filters.type?.includes(Type.Membranous)
        )
      ) {
        filters[QueryParameterFilter.type] = [];
      } else if (name === QueryParameterFilter.level || name === QueryParameterFilter.type) {
        setFilters((prevFilters) => updateCheckbox(prevFilters));
      } else {
        setFilters((prevFilters) => ({
          ...prevFilters,
          [name]: checked ? value : null,
        }));
      }
    } else {
      const isValidValue = /^[1-9][0-9]*$/.test(value);
      const numberValue = parseInt(value, 10);

      if(!isValidValue) {
        setFilters((prevFilters) => ({
          ...prevFilters,
          [name]: null,
        }));
      } else {
        if (
          QueryParameterFilter.priceGte.toString() === name ||
          QueryParameterFilter.priceLte.toString() === name
        ) {
          const newFilterValue = {
            ...filters,
            [name]: numberValue,
          };
          const priceLte = newFilterValue[QueryParameterFilter.priceLte] || 0;
          const priceGte = newFilterValue[QueryParameterFilter.priceGte] || 0;
          newFilterValue[QueryParameterFilter.priceLte] = priceLte;
          newFilterValue[QueryParameterFilter.priceGte] = priceGte;

          if (name === QueryParameterFilter.priceGte.toString()) {
            // Если введенная цена меньше минимальной, установите минимальную
            if (numberValue < minPrice) {
              setFilters((prevFilters) => ({
                ...prevFilters,
                [name]: minPrice,
              }));
            } else {
              // Если введенная цена больше максимальной, установите максимальную
              if (numberValue > maxPrice) {
                setFilters((prevFilters) => ({
                  ...prevFilters,
                  [name]: maxPrice,
                }));
              }
              // Если значение "до" меньше значения "от", установите значение "до" равным значению "от"
              if (filters[QueryParameterFilter.priceGte] < numberValue) {
                setFilters((prevFilters) => ({
                  ...prevFilters,
                  [QueryParameterFilter.priceLte]: numberValue,
                }));
              }
            }
          } else if (name === QueryParameterFilter.priceLte.toString()) {
            // Если введенная цена больше максимальной, установите максимальную
            if (numberValue > maxPrice) {
              setFilters((prevFilters) => ({
                ...prevFilters,
                [name]: maxPrice,
              }));
            } else {
              // Если введенная цена меньше минимальной, установите минимальную
              if (numberValue < minPrice) {
                setFilters((prevFilters) => ({
                  ...prevFilters,
                  [name]: minPrice,
                }));
              }
              // Если значение "от" больше значения "до", установите значение "от" равным значению "до"
              if (filters[QueryParameterFilter.priceGte] > numberValue) {
                setFilters((prevFilters) => ({
                  ...prevFilters,
                  [QueryParameterFilter.priceGte]: numberValue,
                }));
              }
            }
          }
        }
        setFilters((prevFilters) => ({
          ...prevFilters,
          [name]: numberValue,
        }));
      }
    }
  };

  const handleResetFilters = () => {
    setSearchParams((_old) => new URLSearchParams());
    setFilters({
      [QueryParameterFilter.priceGte]: minPrice,
      [QueryParameterFilter.priceLte]: maxPrice,
      [QueryParameterFilter.level]: [],
      [QueryParameterFilter.type]: []
    } as FilterData);
  };

  useEffect(() => {
    navigate('/page/1');
    setSearchParams((params) => {
      params = new URLSearchParams();
      Object.entries(debouncedValue).forEach(([key, value]) => {
        if (value === null ) {
          params.delete(key);
        } else if ( value instanceof Array ) {
          value.forEach((item) => params.append(key, item));
        } else {
          params.set(key, value.toString());
        }
      });
      return params;
    });
  }, [debouncedValue, navigate, setSearchParams]);

  return (
    <form action="#">
      <h2 className="visually-hidden">Фильтр</h2>
      <fieldset className="catalog-filter__block">
        <legend className="title title--h5">Цена, ₽</legend>
        <div className="catalog-filter__price-range">
          <div className="custom-input">
            <label>
              <input
                onChange={ handleInputChange }
                type="number"
                name={ QueryParameterFilter.priceGte }
                value={ filters[QueryParameterFilter.priceGte] || '' }
                placeholder={ `от ${ minPrice }`}
              />
            </label>
          </div>
          <div className="custom-input">
            <label>
              <input
                onChange={ handleInputChange }
                type="number"
                name={ QueryParameterFilter.priceLte }
                value={ filters[QueryParameterFilter.priceLte] || '' }
                placeholder={ `до ${ maxPrice }`}
              />
            </label>
          </div>
        </div>
      </fieldset>
      <fieldset className="catalog-filter__block">
        <legend className="title title--h5">Категория</legend>
        {
          Object.values(Category).map((categoryValue) => (
            <div
              key={ categoryValue }
              className="custom-checkbox catalog-filter__item"
            >
              <label>
                <input
                  onChange={ handleInputChange }
                  checked={ filters[QueryParameterFilter.category] === categoryValue }
                  type="checkbox"
                  name={ QueryParameterFilter.category }
                  value={ categoryValue }
                />
                <span className="custom-checkbox__icon"></span>
                <span className="custom-checkbox__label">{ categoryValue }</span>
              </label>
            </div>
          ))
        }
      </fieldset>
      <fieldset className="catalog-filter__block">
        <legend className="title title--h5">Тип камеры</legend>
        {
          Object.values(Type).map((typeValue) => (
            <div
              key={ typeValue }
              className="custom-checkbox catalog-filter__item"
            >
              <label>
                <input
                  onChange={ handleInputChange }
                  checked={ filters[QueryParameterFilter.type]?.includes(typeValue) }
                  type="checkbox"
                  name={ QueryParameterFilter.type }
                  value={ typeValue }
                  disabled={
                    (filters[QueryParameterFilter.category] === Category.VideoCamera && typeValue === Type.Membranous) || (filters[QueryParameterFilter.category] === Category.VideoCamera && typeValue === Type.Momentary)
                  }
                />
                <span className="custom-checkbox__icon"></span>
                <span className="custom-checkbox__label">{ typeValue }</span>
              </label>
            </div>
          ))
        }
      </fieldset>
      <fieldset className="catalog-filter__block">
        <legend className="title title--h5">Уровень</legend>
        {
          Object.values(Level).map((levelValue) => (
            <div
              key={ levelValue }
              className="custom-checkbox catalog-filter__item"
            >
              <label>
                <input
                  onChange={ handleInputChange }
                  checked={ filters[QueryParameterFilter.level]?.includes(levelValue) }
                  type="checkbox"
                  name={ QueryParameterFilter.level }
                  value={ levelValue }
                />
                <span className="custom-checkbox__icon"></span>
                <span className="custom-checkbox__label">{ levelValue }</span>
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
