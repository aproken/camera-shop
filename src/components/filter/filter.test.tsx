import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import Filter from './filter';

describe('Filter', () => {
  test('изменение фильтров и сброс', () => {
    render(
      <Router>
        <Filter />
      </Router>
    );

    // Проверяем наличие заголовков фильтров
    expect(screen.getByText('Цена, ₽')).toBeInTheDocument();
    expect(screen.getByText('Категория')).toBeInTheDocument();
    expect(screen.getByText('Тип камеры')).toBeInTheDocument();
    expect(screen.getByText('Уровень')).toBeInTheDocument();

    // Находим элементы фильтров
    const priceGteInput = screen.getByPlaceholderText('от');
    const priceLteInput = screen.getByPlaceholderText('до');
    const categoryCheckboxes = screen.getAllByRole('checkbox', { name: /Видеокамера|Фотоаппарат/ });
    const typeCheckboxes = screen.getAllByRole('checkbox', { name: /Коллекционная|Моментальная|Цифровая|Плёночная/ });
    const levelCheckboxes = screen.getAllByRole('checkbox', { name: /Нулевой|Любительский|Профессиональный/ });
    const resetButton = screen.getByRole('button', { name: 'Сбросить фильтры' });

    // Проверяем начальное состояние фильтров
    expect(priceGteInput).toHaveValue(null);
    expect(priceLteInput).toHaveValue(null);
    expect(categoryCheckboxes).toHaveLength(2);
    expect(typeCheckboxes).toHaveLength(4);
    expect(levelCheckboxes).toHaveLength(3);

    // Изменяем значения фильтров
    fireEvent.change(priceGteInput, { target: { value: '10000' } });
    fireEvent.change(priceLteInput, { target: { value: '50000' } });
    fireEvent.click(categoryCheckboxes[0]);
    fireEvent.click(typeCheckboxes[1]);
    fireEvent.click(levelCheckboxes[2]);

    // Проверяем измененные значения фильтров
    expect(priceGteInput).toHaveValue(10000);
    expect(priceLteInput).toHaveValue(50000);
    expect(categoryCheckboxes[0]).toBeChecked();
    expect(typeCheckboxes[1]).toBeChecked();
    expect(levelCheckboxes[2]).toBeChecked();

    // Сбрасываем фильтры
    fireEvent.click(resetButton);

    // Проверяем, что фильтры были сброшены
    expect(priceGteInput).toHaveValue(null);
    expect(priceLteInput).toHaveValue(null);
    expect(categoryCheckboxes[0]).not.toBeChecked();
    expect(typeCheckboxes[1]).not.toBeChecked();
    expect(levelCheckboxes[2]).not.toBeChecked();
  });
});
