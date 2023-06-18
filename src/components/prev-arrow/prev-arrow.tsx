import { CSSProperties } from 'react';

const arrowStyle: CSSProperties = {
  pointerEvents: 'auto',
};

function PrevArrow (): JSX.Element {
  return (
    <button className="slider-controls slider-controls--prev" style={ arrowStyle }>
      <svg width="7" height="12" aria-hidden="true">
        <use xlinkHref="#icon-arrow"></use>
      </svg>
    </button>
  );
}

export default PrevArrow;
