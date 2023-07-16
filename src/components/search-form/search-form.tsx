import classNames from 'classnames';
import FocusLock from 'react-focus-lock';
import { ChangeEvent, KeyboardEvent, useState, useRef, useEffect } from 'react';
import { useAppSelector } from '../../hooks';
import { getCamerasList } from '../../store/camera-process/selectors';

function SearchForm(): JSX.Element {
  const cameras = useAppSelector(getCamerasList);

  const [searchTerm, setSearchTerm] = useState<string>('');
  const camerasNames = cameras.map((camera) => camera.name);
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const listRef = useRef<HTMLUListElement>(null);

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    setSearchTerm(value);
    setFocusedIndex(0);
  };

  const resetSearch = () => {
    setSearchTerm('');
    setFocusedIndex(-1);
  };

  const resultNames = camerasNames.filter((name) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement> | KeyboardEvent<HTMLElement>) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setFocusedIndex((prevIndex) => (prevIndex < resultNames.length - 1 ? prevIndex + 1 : 0));
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setFocusedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : resultNames.length - 1));
    } else if (event.key === 'Tab') {
      if (listRef.current && listRef.current.contains(document.activeElement)) {
        event.preventDefault();
        if (event.shiftKey) {
          setFocusedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : resultNames.length - 1));
        } else {
          setFocusedIndex((prevIndex) => (prevIndex < resultNames.length - 1 ? prevIndex + 1 : 0));
        }
      } else {
        resetSearch();
      }
    }
  };

  useEffect(() => {
    if (listRef.current && focusedIndex !== -1) {
      const focusedItem = listRef.current.querySelector(`[tabIndex="${focusedIndex + 1}"]`);
      if (focusedItem instanceof HTMLElement) {
        focusedItem.focus();
      }
    }
  }, [focusedIndex]);

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
              value={ searchTerm }
              onChange={ handleInputChange }
              onKeyDown={ handleKeyDown }
            />
          </label>
          {
            searchTerm && (
              <ul ref={ listRef } className="form-search__select-list">
                {
                  resultNames.map((camera, index) => (
                    <li
                      key={ camera }
                      className="form-search__select-item"
                      tabIndex={ index + 1 }
                      ref={(ref) => {
                        if(focusedIndex === index) {
                          ref?.focus();
                        }
                      }}
                      onKeyDown={ handleKeyDown }
                      aria-selected={focusedIndex === index}
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
