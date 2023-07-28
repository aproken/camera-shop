import { render, RenderResult, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Sorting from './sorting';

describe('Sorting компонент', () => {
  it('Отрисовка компонента', () => {
    const mockOnChange = jest.fn((sortByType: string, sortByOrder: string) => null);

    const { container }: RenderResult = render(<Sorting onChange={ mockOnChange }/>);

    expect(container).toMatchSnapshot();
  });

  it('Реагирует на действия пользователя', () => {
    const mockOnChange = jest.fn((sortByType: string, sortByOrder: string) => null);

    render(<Sorting onChange={ mockOnChange }/>);

    const inputSortByTypePrice = screen.getByRole('radio', {name: 'по цене'});
    const inputSortByTypePopularity = screen.getByRole('radio', {name: 'по популярности'});
    const inputSortByOrderAsc = screen.getByRole('radio', {name: 'По возрастанию'});
    const inputSortByOrderDesc = screen.getByRole('radio', {name: 'По убыванию'});

    fireEvent.click(inputSortByTypePrice);
    expect(inputSortByTypePrice).toBeChecked();
    expect(inputSortByTypePopularity).not.toBeChecked();

    fireEvent.click(inputSortByTypePopularity);
    expect(inputSortByTypePrice).not.toBeChecked();
    expect(inputSortByTypePopularity).toBeChecked();

    fireEvent.click(inputSortByOrderAsc);
    expect(inputSortByOrderAsc).toBeChecked();
    expect(inputSortByOrderDesc).not.toBeChecked();

    fireEvent.click(inputSortByOrderDesc);
    expect(inputSortByOrderAsc).not.toBeChecked();
    expect(inputSortByOrderDesc).toBeChecked();
  });

  it('Корректно передает значения в коллбэк', () => {
    const mockOnChange = jest.fn((sortByType: string, sortByOrder: string) => null);

    render(<Sorting onChange={ mockOnChange }/>);

    const inputSortByTypePrice = screen.getByRole('radio', {name: 'по цене'});
    const inputSortByTypePopularity = screen.getByRole('radio', {name: 'по популярности'});
    const inputSortByOrderAsc = screen.getByRole('radio', {name: 'По возрастанию'});
    const inputSortByOrderDesc = screen.getByRole('radio', {name: 'По убыванию'});

    fireEvent.click(inputSortByTypePrice);
    expect(mockOnChange).toBeCalledWith('по цене', '');

    mockOnChange.mockClear();

    fireEvent.click(inputSortByTypePopularity);
    expect(mockOnChange).toBeCalledWith('по полулярности', '');

    mockOnChange.mockClear();

    fireEvent.click(inputSortByTypePrice);
    fireEvent.click(inputSortByOrderAsc);
    expect(mockOnChange).toBeCalledWith('по цене', 'abs');

    mockOnChange.mockClear();

    fireEvent.click(inputSortByTypePopularity);
    fireEvent.click(inputSortByOrderDesc);
    expect(mockOnChange).toBeCalledWith('по полулярности', 'desc');
  });
});
