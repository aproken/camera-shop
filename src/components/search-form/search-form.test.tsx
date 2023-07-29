import { render, RenderResult, screen, fireEvent } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import thunk from 'redux-thunk';
import SearchForm from './search-form';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import HistoryRouter from '../history-route/history-route';
import { makeFakeCameras } from '../../utils/mocks-cameras';

describe('SearchForm', () => {
  const mockStore = configureMockStore([thunk]);

  it('Корректно отрисовывается пустая строка поиска', () => {
    const store = mockStore({
      'CAMERA': {
        camerasList: [],
      },
    });

    const {container} = render(
      <Provider store={store}>
        <HistoryRouter history={ createMemoryHistory() }>
          <SearchForm />
        </HistoryRouter>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });

  it('Работает поиск', () => {
    const store = mockStore({
      'CAMERA': {
        camerasList: makeFakeCameras(),
      },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={ createMemoryHistory() }>
          <SearchForm />
        </HistoryRouter>
      </Provider>
    );

    const searchInput = screen.getByRole('textbox', {name: 'Поиск'});

    fireEvent.change(searchInput, { target: { value: 'd' }});

    const results = screen.getAllByRole('listitem');
    expect(results.length).toEqual(1);
    expect(results[0]).toHaveTextContent('Ретрокамера Dus Auge lV');
  });
});