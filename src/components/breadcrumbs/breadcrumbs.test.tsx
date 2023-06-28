import { render, RenderResult } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Breadcrumbs from './breadcrumbs';

test('Тестирование компонента Breadcrumbs', () => {
  const crumbs = [
    {label: 'Главная', href: '/'},
    {label: 'Каталог', href: '/'},
    {label: 'Продукт'}
  ];

  const { container }: RenderResult = render(
    <MemoryRouter>
      <Breadcrumbs
        crumbs={ crumbs }
      />
    </MemoryRouter>
  );

  expect(container).toMatchSnapshot();
});
