import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CameraInOrderButton from './camera-in-order';
import { AppRoute } from '../../../const';

describe('CameraInOrderButton', () => {
  it('должен отобразить ссылку на корзину', () => {
    render(
      <MemoryRouter>
        <CameraInOrderButton />
      </MemoryRouter>
    );

    const link = screen.getByText('В корзине');
    expect(link).toBeInTheDocument();

    expect(link.getAttribute('href')).toBe(AppRoute.Basket);
  });
});
