
import { render, screen } from '@testing-library/react';
import CatalogContent from './catalog-content';
import { makeFakeCameras } from '../../utils/mocks-cameras';

describe('Компонент CatalogContent', () => {
  const cameras = makeFakeCameras();
  const currentPageIndex = 1;

  it('Визуализация компонента', () => {
    render(<CatalogContent products={ cameras } currentPageIndex={ currentPageIndex } />);
    expect(screen.getByTestId('catalog-contant')).toBeInTheDocument();
  });

  it('Отображает правильное количество компонентов ProductCard', () => {
    render(<CatalogContent products={ cameras } currentPageIndex={ currentPageIndex } />);
    const productCards = screen.getAllByTestId('product-card');

    expect(productCards).toHaveLength(cameras.length);
  });

  it('Отправляет fetchAvarageRatingsAction для каждой камеры', () => {
    const mockDispatch = jest.fn();
    jest.mock('../../hooks', () => ({
      useAppDispatch: () => mockDispatch,
    }));
    render(<CatalogContent products={ cameras } currentPageIndex={currentPageIndex} />);
    expect(mockDispatch).toHaveBeenCalledTimes(cameras.length);
  });
});
