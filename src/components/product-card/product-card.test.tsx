import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProductCard from './product-card';
import { makeFakeCameras } from '../../utils/mocks-cameras';

describe('ProductCard component', () => {
  it('Должен отображать карточку товара с правильной информацией', () => {
    const camera = makeFakeCameras()[0];

    render(
      <BrowserRouter>
        <ProductCard product={ camera } />
      </BrowserRouter>
    );

    const productName = screen.getByText(camera.name);
    expect(productName).toBeInTheDocument();

    const reviewCount = screen.getByText((content, element) => content.startsWith('Всего оценок:'));
    expect(reviewCount).toBeInTheDocument();

    const stylizedPrice = screen.getByText((content, element) => content.endsWith('₽'));
    expect(stylizedPrice).toBeInTheDocument();
  });

  it('должен переходить на правильный URL при клике на кнопку "Подробнее"', () => {
    const camera = makeFakeCameras()[0];

    render(
      <BrowserRouter>
        <ProductCard product={camera} />
      </BrowserRouter>
    );

    const detailsButton = screen.getByText('Подробнее');
    fireEvent.click(detailsButton);

    expect(window.location.pathname).toBe('/cameras/1');
  });
});

