import { useState, useRef, CSSProperties } from 'react';
import { scroller } from 'react-scroll';
import { Cameras } from '../../types/camera';
import ProductCard from '../product-card/product-card';
import { VISIBLE_CARDS } from '../../const';
import Swiper from 'react-id-swiper';
import 'swiper/css';
import SwiperCore, { Navigation } from 'swiper';
import './style.css';

SwiperCore.use([Navigation]);


type ProductSliderProps = {
  similar: Cameras;
}


function ProductSlider({ similar }: ProductSliderProps): JSX.Element {
  const params = {
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
          <Swiper {...params}>
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ProductSliderOld({ similar }: ProductSliderProps): JSX.Element {
  const totalSets = Math.ceil(similar.length / VISIBLE_CARDS);

  const [activeSetIndex, setActiveSetIndex] = useState<number>(0);
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState<boolean>(false);
  const [isPrevButtonDisabled, setIsPrevButtonDisabled] = useState<boolean>(true);

  const sliderContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: string): void => {
    const container = sliderContainerRef.current;

    if (container instanceof HTMLDivElement) {
      const containerWidth = container.offsetWidth;
      const scrollAmount = direction === 'next' ? containerWidth : -containerWidth;

      scroller.scrollTo('similar', {
        duration: 1700, // Продолжительность анимации прокрутки (в миллисекундах)
        smooth: true, // Включение плавности прокрутки
        containerId: 'productSlider', // Идентификатор родительского контейнера прокрутки
        offset: scrollAmount, // Смещение прокрутки
      });
    }
  };

  const handleClickNext = () => {
    setActiveSetIndex((prevIndex) => prevIndex + 1);
    handleScroll('Next');
    setIsPrevButtonDisabled(false);

    if (activeSetIndex + 1 === totalSets - 1) {
      setIsNextButtonDisabled(true);
    }
  };

  const handleClickPrev = () => {
    setActiveSetIndex((prevIndex) => prevIndex - 1);
    handleScroll('prev');
    setIsNextButtonDisabled(false);

    if (activeSetIndex - 1 === 0) {
      setIsPrevButtonDisabled(true);
    }
  };

  const sliderStyle: CSSProperties = {
    pointerEvents: 'auto',
  };

  return (
    <section className="product-similar">
      <div className="container">
        <h2 className="title title--h3">Похожие товары</h2>
        <div className="product-similar__slider">
          <div id="productSlider" className="product-similar__slider-list" ref={ sliderContainerRef } >

            {
              similar.map((product, index) => {
                const isActiveSet = Math.floor(index / VISIBLE_CARDS) === activeSetIndex;
                const isActiveProductCard = isActiveSet && index % VISIBLE_CARDS < VISIBLE_CARDS;

                return (
                  <ProductCard
                    key={ product.id }
                    classNames={ isActiveProductCard ? ['is-active'] : [] }
                    product={ product }
                    onBuyClick={() => null}
                  />
                );
              })
            }
            <button
              onClick={ handleClickPrev }
              className='slider-controls slider-controls--prev'
              style={ sliderStyle }
              type="button"
              aria-label="Предыдущий слайд"
              disabled={ isPrevButtonDisabled }
            >
              <svg width="7" height="12" aria-hidden="true">
                <use xlinkHref="#icon-arrow"></use>
              </svg>
            </button>
            <button
              onClick={ (handleClickNext) }
              className='slider-controls slider-controls--next'
              style={ sliderStyle }
              type="button"
              aria-label="Следующий слайд"
              disabled={ isNextButtonDisabled }
            >
              <svg width="7" height="12" aria-hidden="true">
                <use xlinkHref="#icon-arrow"></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductSlider;
