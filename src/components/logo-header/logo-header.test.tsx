import { render, RenderResult } from '@testing-library/react';
import LogoHeader from './logo-header';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Component: Footer', () => {
  it('Тестирование компонента Footer', () => {
    const { container }: RenderResult = render(
      <Router>
        <LogoHeader />
      </Router>
    );
    expect(container).toMatchSnapshot();
  });
});
