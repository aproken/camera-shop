import ProductCard from '../product-card/product-card';

function Slider(): JSX.Element {
  return (
    <div className="product-similar__slider">
      <div className="product-similar__slider-list">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <button className="slider-controls slider-controls--prev" type="button" aria-label="Предыдущий слайд" disabled>
          <svg width="7" height="12" aria-hidden="true">
            <use xlinkHref="#icon-arrow"></use>
          </svg>
        </button>
        <button className="slider-controls slider-controls--next" type="button" aria-label="Следующий слайд">
          <svg width="7" height="12" aria-hidden="true">
            <use xlinkHref="#icon-arrow"></use>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Slider;
