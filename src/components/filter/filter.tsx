import { useEffect, useState } from 'react';
import { Type, Category, Level, FilterData, QueryParameter } from '../../const';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDebounce } from '../../hooks/useDebounce';

function Filter(): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const initialState = {
    [QueryParameter.category]: searchParams.get(QueryParameter.category),
    [QueryParameter.type]: searchParams.get(QueryParameter.type),
    [QueryParameter.level]: searchParams.get(QueryParameter.level),
    [QueryParameter.priceGte]: searchParams.get(QueryParameter.priceGte),
    [QueryParameter.priceLte]: searchParams.get(QueryParameter.priceLte),
  } as FilterData;

  const [filters, setFilters] = useState<FilterData>(initialState);
  const debouncedValue = useDebounce<FilterData>(filters, 2000);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;

    if (type === 'checkbox') {
      if (
        name === QueryParameter.category &&
        value === Category.VideoCamera &&
        checked && (
          filters.type === Type.Collectible || filters.type === Type.Membranous
        )
      ) {
        filters[QueryParameter.type] = null;
      }
      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: checked ? value : null,
      }));
    } else {
      const isValidValue = /^[1-9]+$/.test(value);

      if(!isValidValue) {
        setFilters((prevFilters) => ({
          ...prevFilters,
          [name]: null,
        }));
      } else {
        setFilters((prevFilters) => ({
          ...prevFilters,
          [name]: value,
        }));
      }
    }
  };

  const handleResetFilters = () => {
    setFilters({});
    setSearchParams({});
  };

  useEffect(() => {
    navigate('/page/1');
    setSearchParams((params) => {
      // Преобразуем фильтры в массив ключ-значение и обновляем URLSearchParams
      Object.entries(debouncedValue).forEach(([key, value]) => {
        if (value === null ) {
          params.delete(key);
        } else {
          params.set(key, String(value));
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
                name={ QueryParameter.priceGte }
                value={ filters[QueryParameter.priceGte] || '' }
                placeholder="от"
              />
            </label>
          </div>
          <div className="custom-input">
            <label>
              <input
                onChange={ handleInputChange }
                type="number"
                name={ QueryParameter.priceLte }
                value={ filters[QueryParameter.priceLte] || '' }
                placeholder="до"
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
                  checked={ filters[QueryParameter.category] === categoryValue }
                  type="checkbox"
                  name={ QueryParameter.category }
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
                  checked={ filters[QueryParameter.type] === typeValue }
                  type="checkbox"
                  name={ QueryParameter.type }
                  value={ typeValue }
                  disabled={
                    (filters[QueryParameter.category] === Category.VideoCamera && typeValue === Type.Membranous) || (filters[QueryParameter.category] === Category.VideoCamera && typeValue === Type.Collectible)
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
                  checked={ filters[QueryParameter.level] === levelValue }
                  type="checkbox"
                  name={ QueryParameter.level }
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
