import { render, RenderResult, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Sorting from './sorting';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Sorting компонент', () => {
  it('Отрисовка компонента', () => {
    const { container }: RenderResult = render(
      <Router>
        <Sorting />
      </Router>
    );
    expect(container).toMatchSnapshot();
  });

  it('Реагирует на действия пользователя', () => {

    render(
      <Router>
        <Sorting />
      </Router>);

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
});
