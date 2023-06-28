import { render, RenderResult } from '@testing-library/react';
import Footer from './footer';
import { BrowserRouter as Router } from 'react-router-dom';


describe('Component: Footer', () => {
  it('Тестирование компонента Footer', () => {
    const { container }: RenderResult = render(
      <Router>
        <Footer />
      </Router>
    );
    expect(container).toMatchSnapshot();
  });
});
