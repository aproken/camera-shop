import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { QueryParameterPriceBlock } from '../../const';
import { useDebounce } from '../../hooks/useDebounce';

type PriceBlockProps = {
  minPrice: number;
  maxPrice: number;
}

type PriceState = {
  minPrice: number | null;
  maxPrice: number | null;
}

function PriceBlock({ minPrice, maxPrice }: PriceBlockProps): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();

  const minPriceParams = searchParams.get(QueryParameterPriceBlock.MinPrice);
  const maxPriceParams = searchParams.get(QueryParameterPriceBlock.MaxPrice);

  let minPriceValue = minPrice;
  if(minPriceParams) {
    minPriceValue = parseInt(minPriceParams, 10);
  }

  let maxPriceValue = maxPrice;
  if(maxPriceParams) {
    maxPriceValue = parseInt(maxPriceParams, 10);
  }

  const [price, setPrice] = useState<PriceState>({
    minPrice: null,
    maxPrice: null
  });

  // useEffect(() => {
  //   setPrice({
  //     minPrice: minPriceValue,
  //     maxPrice: maxPriceValue,
  //   });
  // } , [minPriceValue, maxPriceValue]);

  const debouncedValue = useDebounce(price, 2000);

  const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (!/^([1-9][0-9]*)*$/.test(value)){
      return;
    }

    const newValue = parseInt(value, 10);

    if(newValue > maxPriceValue) {
      setPrice((prevPrice) => ({
        ...prevPrice,
        minPrice:maxPriceValue
      }));
    } else {
      setPrice((prevPrice) => ({
        ...prevPrice,
        minPrice:newValue
      }));
    }
  };

  const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (!/^([1-9][0-9]*)*$/.test(value)){
      return;
    }

    const newValue = parseInt(value, 10);


    if(newValue > maxPrice) {
      setPrice((prevPrice) => ({
        ...prevPrice,
        maxPrice: maxPrice
      }));
    } else {
      setPrice((prevPrice) => ({
        ...prevPrice,
        maxPrice: newValue
      }));
    }
  };

  useEffect(() => {
    if (
      debouncedValue.maxPrice?.toString() === maxPriceParams &&
      debouncedValue.minPrice?.toString() === minPriceParams
    ) {
      return;
    }

    let maxPriceToPersist = debouncedValue.maxPrice;
    if (isNaN(debouncedValue.maxPrice || NaN) || (debouncedValue.maxPrice || NaN) > maxPrice) {
      maxPriceToPersist = maxPrice;
    }

    let minPriceToPersist = debouncedValue.minPrice;
    if (isNaN(debouncedValue.minPrice || NaN) || (debouncedValue.minPrice || NaN) < minPriceValue) {
      minPriceToPersist = minPriceValue;
    }

    if (
      (debouncedValue.maxPrice !== null && debouncedValue.minPrice !== null) &&
      (debouncedValue.maxPrice < debouncedValue.minPrice)
    ) {
      maxPriceToPersist = debouncedValue.minPrice;
    }

    // setPrice({
    //   minPrice: minPriceToPersist,
    //   maxPrice: maxPriceToPersist,
    // });

    setSearchParams((prevParams) => {
      prevParams.set(QueryParameterPriceBlock.MaxPrice, String(maxPriceToPersist));
      prevParams.set(QueryParameterPriceBlock.MinPrice, String(minPriceToPersist));
      return prevParams;
    });
  }, [debouncedValue]);

  return (
    <div className="catalog-filter__price-range">
      <div className="custom-input">
        <label>
          <input
            onChange={ handleMinPriceChange }
            type="number"
            name={ QueryParameterPriceBlock.MinPrice }
            value={ price.minPrice || ''}
            placeholder={ `${ minPrice }`}
          />
        </label>
      </div>
      <div className="custom-input">
        <label>
          <input
            onChange={ handleMaxPriceChange }
            type="number"
            name={ QueryParameterPriceBlock.MaxPrice }
            value={ price.maxPrice || ''}
            placeholder={ `${ maxPrice }`}
          />
        </label>
      </div>
    </div>
  );
}

export default PriceBlock;
