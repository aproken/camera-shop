import { Cameras } from '../../types/camera';
import ProductCard from '../product-card/product-card';
import Swiper from 'react-id-swiper';
import 'swiper/css';
import SwiperCore, { Navigation } from 'swiper';
import './style.css';

SwiperCore.use([Navigation]);

type ProductSliderProps = {
  similar: Cameras;
}

export const SliderDefaultParams = {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  renderPrevButton: () => (
    <button className="swiper-button-prev">
      <svg width="7" height="12" aria-hidden="true">
        <use xlinkHref="#icon-arrow"></use>
      </svg>
    </button>
  ),
  renderNextButton: () => (
    <button className="swiper-button-next">
      <svg width="7" height="12" aria-hidden="true">
        <use xlinkHref="#icon-arrow"></use>
      </svg>
    </button>
  )
};

function ProductSlider({ similar }: ProductSliderProps): JSX.Element {
  return (
    <section>
      <div className="container">
        <h2 className="title title--h3">Похожие товары</h2>
        <div style={{
          position: 'relative',
          margin: '0 auto',
          width: 'calc(100% + 16px)',
          maxWidth: '936px',
        }}
        >
          <Swiper {...SliderDefaultParams}>
            {similar.map((product) => (
              <div key={product.id} >
                <ProductCard
                  product={product}
                  onBuyClick={() => null}
                />
              </div>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default ProductSlider;
