import { render, RenderResult } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PageNumber from './page-number';

describe('PageNumber component', () => {
  it('should render correctly', () => {
    const currentPage = 2;
    const page = 3;

    const { container }: RenderResult = render(
      <MemoryRouter>
        <PageNumber currentPage={currentPage} page={page} />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
