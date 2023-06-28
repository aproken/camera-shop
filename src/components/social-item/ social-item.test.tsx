import { render, RenderResult } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SocialItem from './social-item';

test('Тестирование компонента SocialItem', () => {
  const xlinkHref = '#icon-facebook';

  const { container }: RenderResult = render(
    <MemoryRouter>
      <SocialItem xlinkHref={xlinkHref} />
    </MemoryRouter>
  );

  expect(container).toMatchSnapshot();
});
