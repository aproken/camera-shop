import classNames from 'classnames';
import FocusLock from 'react-focus-lock';
import { ChangeEvent, KeyboardEvent, useState, useRef, useEffect } from 'react';
import { useAppSelector } from '../../hooks';
import { getCamerasList } from '../../store/camera-process/selectors';

function SearchForm(): JSX.Element {
  const cameras = useAppSelector(getCamerasList);

  const [searchTerm, setSearchTerm] = useState<string>('');
  const camerasNames = cameras.map((camera) => camera.name);
  const [focusedIndex, setFocusedIndex] = useState<number>(0);
  const listRef = useRef<HTMLUListElement>(null);

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    setSearchTerm(value);
    setFocusedIndex(0);
  };

  const resetSearch = () => {
    setSearchTerm('');
    setFocusedIndex(0);
  };

  useEffect(() => {
    // eslint-disable-next-line
    console.log('NewValue', focusedIndex);
  }, [focusedIndex]);

  const resultNames = camerasNames.filter((name) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement> | KeyboardEvent<HTMLElement>) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setFocusedIndex((prevIndex) => {
        if (prevIndex === -1) {
          return 0;
        }
        return prevIndex < resultNames.length ? prevIndex + 1 : 0;
      });
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setFocusedIndex((prevIndex) => {
        if (prevIndex === -1) {
          return resultNames.length - 1;
        }
        return prevIndex > 0 ? prevIndex - 1 : resultNames.length - 1;
      });
    } else if (event.key === 'Tab') {
      if (event.shiftKey) {
        if (focusedIndex === 0) {
          event.preventDefault();
          setFocusedIndex(resultNames.length - 1);
        }
      } else {
        if (focusedIndex === resultNames.length - 1) {
          event.preventDefault();
          setFocusedIndex(0);
        }
      }
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
            searchTerm && (
              <ul ref={ listRef } className="form-search__select-list" tabIndex={-1}>
                {
                  resultNames.map((camera, index) => (
                    <li
                      key={ camera }
                      className="form-search__select-item"
                      tabIndex={ index + 1 }
                      ref={(ref) => {
                        if (focusedIndex === index) {
                          ref?.focus();
                        }
                      }}
                      onKeyDown={ handleKeyDown }
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
