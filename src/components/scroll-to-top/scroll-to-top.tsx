import { useEffect, useState } from 'react';

function ScrollToTop(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 100);
  };

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / 120; // Задержка прокрутки
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 10);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      data-testid="scroolToTopBtn"
      className={`up-btn ${isVisible ? 'visible' : ''}`}
      onClick={ scrollToTop }
    >
      <svg width="12" height="18" aria-hidden="true">
        <use xlinkHref="#icon-arrow2"></use>
      </svg>
    </div>
  );
}

export default ScrollToTop;
