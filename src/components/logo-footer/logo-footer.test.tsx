import { render, RenderResult } from '@testing-library/react';
import LogoFooter from './logo-footer';
import { BrowserRouter as Router } from 'react-router-dom';


describe('Компонент LogoFooter', () => {
  it('Тестирование компонента Footer', () => {
    const { container }: RenderResult = render(
      <Router>
        <LogoFooter />
      </Router>
    );
    expect(container).toMatchSnapshot();
  });
});
