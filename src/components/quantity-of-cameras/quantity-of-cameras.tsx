import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { actions } from '../../store/basket-process/basket-process';
import { Camera } from '../../types/camera';
import { useDebounce } from '../../hooks/useDebounce';

type QuantityOfCamerasProps = {
  camera: Camera;
  quantity: number;
}

function QuantityOfCameras({ camera, quantity }: QuantityOfCamerasProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [quantityValue, setQuantityValue] = useState(quantity);
  const debounsedValue = useDebounce(quantityValue, 2000);

  const handlePrevButton = () => {
    if(quantity <= 1) {
      return ;
    }
    dispatch(actions.changeQuantityOfCameras({
      camera,
      quantity: quantity - 1
    }));
  };

  const handleNextButton = () => {
    if(quantity >= 99) {
      return ;
    }
    dispatch(actions.changeQuantityOfCameras({
      camera,
      quantity: quantity + 1
    }));
  };

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if(value === '' || (
      parseInt(value, 10) >= 1 && parseInt(value, 10) <= 99)
    ) {
      setQuantityValue(parseInt(value, 10));
    }
  };

  useEffect(() => {
    if (debounsedValue === quantity) {
      return ;
    }
    if (isNaN(debounsedValue)) {
      setQuantityValue(1);
      return ;
    }

    dispatch(actions.changeQuantityOfCameras({
      camera,
      quantity: debounsedValue
    }));
  }, [debounsedValue, camera]);

  useEffect(() => setQuantityValue(quantity || 1), [debounsedValue, quantity]);

  return (
    <div className="quantity">
      <button
        onClick={ handlePrevButton }
        className="btn-icon btn-icon--prev"
        aria-label="уменьшить количество товара"
      >
        <svg width="7" height="12" aria-hidden="true">
          <use xlinkHref="#icon-arrow"></use>
        </svg>
      </button>
      <label className="visually-hidden" htmlFor="counter1"></label>
      <input
        onChange={ handleChangeInput }
        type="number"
        id="counter1"
        value={ quantityValue }
        min="1"
        max="99"
        aria-label="количество товара"
      />
      <button
        onClick={ handleNextButton }
        className="btn-icon btn-icon--next"
        aria-label="увеличить количество товара"
      >
        <svg width="7" height="12" aria-hidden="true">
          <use xlinkHref="#icon-arrow"></use>
        </svg>
      </button>
    </div>
  );
}

export default QuantityOfCameras;
