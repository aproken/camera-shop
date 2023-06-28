import { render, RenderResult } from '@testing-library/react';
import LoadingScreen from './loading-screen';

describe('Component: LoadingScreen', () => {
  it('Тестирование компонента LoadingScreen', () => {
    const { container }: RenderResult = render(<LoadingScreen />);
    expect(container).toMatchSnapshot();
  });
});

