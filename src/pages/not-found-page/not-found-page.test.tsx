import { render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { createMemoryHistory } from 'history';
import NotFoundPage from './not-found-page';
import HistoryRouter from '../../components/history-route/history-route';

describe('Component: NotFoundScreen', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const {container} = render(
      <HistoryRouter history={history}>
        <HelmetProvider>
          <NotFoundPage />
        </HelmetProvider>
      </HistoryRouter>,
    );

    expect(container).toMatchSnapshot();
  });
});
