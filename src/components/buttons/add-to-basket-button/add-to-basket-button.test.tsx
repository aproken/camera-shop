import { render, fireEvent, screen } from '@testing-library/react';
import AddToBasketButton from './add-to-basket-button';

describe('AddToBasketButton', () => {
  test('должен отображать кнопку "Добавить в корзину"', () => {
    const onClickMock = jest.fn(); // Создаем mock функцию для onClick

    render(<AddToBasketButton onClick={onClickMock} />);

    const addButton: HTMLElement = screen.getByText('Добавить в корзину');

    fireEvent.click(addButton);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
