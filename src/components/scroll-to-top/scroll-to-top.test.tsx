import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ScrollToTop from 'react-scroll-to-top';

describe('Компонент ScrollToTop', () => {
  it('Отрисовывает кнопку при определенной позиции на странице', () => {
    const { container } = render(<ScrollToTop />);
    expect(container).toMatchSnapshot();
  });
});
