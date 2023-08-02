import classNames from 'classnames';
import { ChangeEvent, KeyboardEvent, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getCamerasList } from '../../store/camera-process/selectors';
import { Camera } from '../../types/camera';

function SearchForm(): JSX.Element {
  const navigate = useNavigate();
  const closeBtn = useRef<HTMLButtonElement>(null);
  const searchInput = useRef<HTMLInputElement>(null);

  const cameras = useAppSelector(getCamerasList);
  const camerasNames = cameras.map((camera) => camera.name);

  const [shouldShowResults, setShouldShowResults] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [, setSelectedProduct] = useState<string | null>(null);
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const listRef = useRef<HTMLUListElement>(null);

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    setSearchTerm(value);
    setShouldShowResults(true);
    setFocusedIndex(-1);
  };

  const resetSearch = () => {
    setSearchTerm('');
    setFocusedIndex(-1);
    setSelectedProduct(null);
  };

  const resultNames = camerasNames.filter((name) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement> | KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      setShouldShowResults(false);
    }
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setFocusedIndex((prevIndex) => prevIndex + 1);
      if (focusedIndex >= resultNames.length - 1 && closeBtn.current) {
        closeBtn.current.focus();
      }
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setFocusedIndex((prevIndex) => prevIndex - 1);
      if (focusedIndex <= 0 && searchInput.current) {
        searchInput.current.focus();
      }
    } else if (event.key === 'Enter') {
      if (focusedIndex >= 0 && focusedIndex < resultNames.length) {
        event.preventDefault();
        const selectedCamera: Camera | undefined = cameras.find(
          (camera) => camera.name === resultNames[focusedIndex]
        );
        if(selectedCamera) {
          setSelectedProduct(selectedCamera.name);
          navigate(`/cameras/${selectedCamera.id}`);
          resetSearch();
        }
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
            // tabIndex={ -1 }
            ref={searchInput}
            value={ searchTerm }
            onChange={ handleInputChange }
            onKeyDown={ handleKeyDown }
            aria-label='Поиск'
          />
        </label>
        {
          shouldShowResults && searchTerm.length > 0 && (
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
        ref={ closeBtn }
        onClick={ resetSearch }
      >
        <svg width="10" height="10" aria-hidden="true">
          <use xlinkHref="#icon-close"></use>
        </svg>
        <span className="visually-hidden">Сбросить поиск</span>
      </button>
    </div>
  );
}

export default SearchForm;
