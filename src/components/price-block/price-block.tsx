import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import useState from 'react-usestateref';
import { QueryParameterPriceBlock } from '../../const';

type PriceBlockProps = {
  minPrice: number;
  maxPrice: number;
}

type PriceState = {
  [QueryParameterPriceBlock.MinPrice]: number | null;
  [QueryParameterPriceBlock.MaxPrice]: number | null;
}

const normolizeUrl = (url: URLSearchParams) => {
  const filterEntries = Array.from(url.entries()).filter(([_k,v]) => ![null, 'null', ''].includes(v));
  return new URLSearchParams([...filterEntries]);
};

function PriceBlock({ minPrice, maxPrice }: PriceBlockProps): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  let timoutMin: ReturnType<typeof setTimeout> ;
  let timoutMax: ReturnType<typeof setTimeout> ;

  const minPriceParams = searchParams.get(QueryParameterPriceBlock.MinPrice);
  const maxPriceParams = searchParams.get(QueryParameterPriceBlock.MaxPrice);

  const minPriceValue = parseInt(minPriceParams || '', 10) || null;
  const maxPriceValue = parseInt(maxPriceParams || '', 10) || null;

  const [price, setPrice, priceRef] = useState<PriceState>({
    [QueryParameterPriceBlock.MinPrice]: null,
    [QueryParameterPriceBlock.MaxPrice]: null
  });

  const process = (valueType: QueryParameterPriceBlock) => {
    const currentPrice = priceRef.current;

    const alterValueType = (valueType === 'price_gte') ?
      QueryParameterPriceBlock.MaxPrice
      :
      QueryParameterPriceBlock.MinPrice;

    const value = currentPrice[valueType];
    const alterValue = currentPrice[alterValueType];

    //rules
    // Если значение меньше minPrice
    if ((value || -Infinity) < minPrice) {
      currentPrice[valueType] = minPrice;
    }
    // Если значение больше maxPrice
    if ((value || Infinity) > maxPrice) {
      currentPrice[valueType] = maxPrice;
    }

    if (
      value && alterValue &&
      valueType === QueryParameterPriceBlock.MaxPrice &&
      value < alterValue
    ) {
      currentPrice[valueType] = alterValue;
    }

    if (
      value && alterValue &&
      valueType === QueryParameterPriceBlock.MinPrice &&
      value > alterValue
    ) {
      currentPrice[valueType] = alterValue;
    }

    if (
      valueType === QueryParameterPriceBlock.MaxPrice &&
      (value === maxPrice || value === null)
    ) {
      currentPrice[valueType] = null;
    }
    if (
      valueType === QueryParameterPriceBlock.MinPrice &&
      (value === minPrice || value === null)
    ) {
      currentPrice[valueType] = null;
    }
    setSearchParams((prevParams) => {
      prevParams.set(
        QueryParameterPriceBlock.MaxPrice, String(currentPrice[QueryParameterPriceBlock.MaxPrice])
      );
      prevParams.set(
        QueryParameterPriceBlock.MinPrice, String(currentPrice[QueryParameterPriceBlock.MinPrice])
      );
      return normolizeUrl(prevParams);
    });
  };

  const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (!/^([1-9][0-9]*)*$/.test(value)){
      return;
    }

    if (timoutMin) {
      clearTimeout(timoutMin);
    } else {
      timoutMin = setTimeout(() => process(QueryParameterPriceBlock.MinPrice), 2000);
    }

    if (!value) {
      setPrice((prevPrice) => ({
        ...prevPrice,
        [QueryParameterPriceBlock.MinPrice]: null
      }));
      return ;
    }

    const newValue = parseInt(value, 10);
    setPrice((prevPrice) => ({
      ...prevPrice,
      [QueryParameterPriceBlock.MinPrice]:newValue
    }));
  };

  const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (!/^([1-9][0-9]*)*$/.test(value)){
      return;
    }

    if (timoutMin) {
      clearTimeout(timoutMax);
    } else {
      timoutMax = setTimeout(() => process(QueryParameterPriceBlock.MaxPrice), 2500);
    }

    if (!value) {
      setPrice((prevPrice) => ({
        ...prevPrice,
        [QueryParameterPriceBlock.MaxPrice]: null
      }));
      return ;
    }

    const newValue = parseInt(value, 10);

    setPrice((prevPrice) => ({
      ...prevPrice,
      [QueryParameterPriceBlock.MaxPrice]: newValue
    }));
  };

  // Выставляем значение формы если у нас есть сохраненные данные в URL
  useEffect(() => {
    if (
      minPriceValue === priceRef.current[QueryParameterPriceBlock.MinPrice] &&
      maxPriceValue === priceRef.current[QueryParameterPriceBlock.MaxPrice]
    ){
      // Если состония эквивалентны - завершаем
      return ;
    }
    const update = {} as Partial<PriceState>;
    if (minPriceValue !== price[QueryParameterPriceBlock.MinPrice] ) {
      update[QueryParameterPriceBlock.MinPrice] = minPriceValue;
    }
    if (maxPriceValue !== price[QueryParameterPriceBlock.MaxPrice] ) {
      update[QueryParameterPriceBlock.MaxPrice] = maxPriceValue;
    }
    setPrice({...price, ...update});
  }, [minPriceValue, maxPriceValue]);

  return (
    <div className="catalog-filter__price-range">
      <div className="custom-input">
        <label>
          <input
            aria-label="Цена от"
            onChange={ handleMinPriceChange }
            type="number"
            name={ QueryParameterPriceBlock.MinPrice }
            value={ price[QueryParameterPriceBlock.MinPrice] || ''}
            placeholder={ `${ minPrice }`}
            onBlur={() => {
              clearTimeout(timoutMin);
              process(QueryParameterPriceBlock.MinPrice);
            }}
          />
        </label>
      </div>
      <div className="custom-input">
        <label>
          <input
            aria-label="Цена до"
            onChange={ handleMaxPriceChange }
            type="number"
            name={ QueryParameterPriceBlock.MaxPrice }
            value={ price[QueryParameterPriceBlock.MaxPrice] || ''}
            placeholder={ `${ maxPrice }`}
            onBlur={() => {
              clearTimeout(timoutMax);
              process(QueryParameterPriceBlock.MaxPrice);
            }}
          />
        </label>
      </div>
    </div>
  );
}

export default PriceBlock;
