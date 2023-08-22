import { render, fireEvent, screen } from '@testing-library/react';
import BuyButton from './buy-button';

describe('BuyButton', () => {
  test('должен отображать кнопку "Купить"', () => {
    const onClickMock = jest.fn();

    render(<BuyButton onClick={ onClickMock } />);

    const buyButton: HTMLElement = screen.getByText('Купить');

    fireEvent.click(buyButton);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
