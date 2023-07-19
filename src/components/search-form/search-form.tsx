import classNames from 'classnames';
import FocusLock from 'react-focus-lock';
import { ChangeEvent, KeyboardEvent, useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getCamerasList } from '../../store/camera-process/selectors';
import { Camera } from '../../types/camera';
//TODO снять блокировку фокуса на инпуте, когда он пустой, чтобы можно было клавиатурой фокусироваться на элементах страницы
function SearchForm(): JSX.Element {
  const navigate = useNavigate();

  const cameras = useAppSelector(getCamerasList);
  const camerasNames = cameras.map((camera) => camera.name);

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [, setSelectedProduct] = useState<string | null>(null);
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const listRef = useRef<HTMLUListElement>(null);

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    setSearchTerm(value);
    setFocusedIndex(-1);
  };

  const resetSearch = () => {
    setSearchTerm('');
    setFocusedIndex(-1);
    setSelectedProduct(null);
  };

  useEffect(() => {
    // eslint-disable-next-line
    console.log('NewValue', focusedIndex);
  }, [focusedIndex]);

  const resultNames = camerasNames.filter((name) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const shouldShowResults = searchTerm.length > 0;

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement> | KeyboardEvent<HTMLElement>) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setFocusedIndex((prevIndex) => (prevIndex < resultNames.length - 1 ? prevIndex + 1 : 0));
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setFocusedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : resultNames.length - 1));
    } else if (event.key === 'Tab') {
      if (
        listRef.current &&
        listRef.current.contains(document.activeElement)
      ) {
        event.preventDefault();
        if (event.shiftKey) {
          setFocusedIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : resultNames.length - 1
          );
        } else {
          setFocusedIndex((prevIndex) =>
            prevIndex < resultNames.length - 1 ? prevIndex + 1 : 0
          );
        }
      } else {
        // Фокус на элементе input
        if (resultNames.length > 0) {
          event.preventDefault();
          setFocusedIndex(0);
        }
      }
    }
    else if (event.key === 'Enter') {
      if (focusedIndex >= 0 && focusedIndex < resultNames.length) {
        event.preventDefault();
        const selectedCamera: Camera = cameras.find((camera) => camera.name === resultNames[focusedIndex])!;
        setSelectedProduct(selectedCamera.name);
        navigate(`/cameras/${selectedCamera.id}`);
        resetSearch();
      }
    }
  };

  const handleProductClick = (productName: string) => {
    setSelectedProduct(productName);
    const selectedItemData = cameras.find((camera) => camera.name === productName);
    if (selectedItemData) {
      const { id } = selectedItemData;
      navigate(`/cameras/${ id }`);
      resetSearch();
    }
  };

  return (
    <div className={ classNames('form-search', { 'list-opened ': searchTerm && resultNames.length}) }>
      <FocusLock>
        <form>
          <label>
            <svg className="form-search__icon" width="16" height="16" aria-hidden="true">
              <use xlinkHref="#icon-lens"></use>
            </svg>
            <input
              className="form-search__input"
              type="text"
              autoComplete="off"
              placeholder="Поиск по сайту"
              tabIndex={ 0 }
              value={ searchTerm }
              onChange={ handleInputChange }
              onKeyDown={ handleKeyDown }
              ref={(ref) => {
                if (focusedIndex === -1) {
                  ref?.focus();
                }
              }}
            />
          </label>
          {
            shouldShowResults && (
              <ul ref={ listRef } className="form-search__select-list" tabIndex={ -1 }>
                {
                  resultNames.map((camera, index) => (
                    <li
                      key={ camera }
                      className="form-search__select-item"
                      tabIndex={ 0 }
                      ref={(ref) => {
                        if (focusedIndex === index) {
                          ref?.focus();
                        }
                      }}
                      onKeyDown={ handleKeyDown }
                      onClick={() => handleProductClick(camera)}
                    >
                      { camera }
                    </li>
                  ))
                }
              </ul>
            )
          }
        </form>
        <button
          className="form-search__reset"
          type="reset"
          onClick={ resetSearch }
        >
          <svg width="10" height="10" aria-hidden="true">
            <use xlinkHref="#icon-close"></use>
          </svg>
          <span className="visually-hidden">Сбросить поиск</span>
        </button>
      </FocusLock>
    </div>
  );
}

export default SearchForm;
