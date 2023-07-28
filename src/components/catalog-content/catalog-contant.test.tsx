
import { render, screen } from '@testing-library/react';
import CatalogContent from './catalog-content';
import { makeFakeCameras } from '../../utils/mocks-cameras';
import * as Hook from '../../hooks';
import HistoryRouter from '../history-route/history-route';
import { createMemoryHistory } from 'history';

jest.mock('../../hooks');

describe('Компонент CatalogContent', () => {
  const cameras = makeFakeCameras();
  const currentPageIndex = 1;

  it('Визуализация компонента', () => {
    jest.spyOn(Hook, 'useAppDispatch').mockImplementation(jest.fn);
    render(
      <HistoryRouter history={createMemoryHistory()}>
        <CatalogContent products={ cameras } currentPageIndex={ currentPageIndex } />
      </HistoryRouter>
    );
  });

  it('Отображает правильное количество компонентов ProductCard', () => {
    const mockDispatch = jest.fn();
    jest.mock('../../hooks', () => ({
      useAppDispatch: () => mockDispatch,
    }));
    render(
      <HistoryRouter history={createMemoryHistory()}>
        <CatalogContent products={ cameras } currentPageIndex={ currentPageIndex } />
      </HistoryRouter>
    );
    const productCards = screen.getAllByTestId('product-card');

    expect(productCards).toHaveLength(cameras.length);
  });
});
