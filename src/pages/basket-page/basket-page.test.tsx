import { render } from '@testing-library/react';
import BasketPage from './basket-page';
import { makeFakeCameras } from '../../utils/mocks-cameras';
import thunk from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../../components/history-route/history-route';


const mockStore = configureMockStore([thunk]);
const camera = makeFakeCameras()[0];
const order = {
  camera: camera,
  quantity: 1
};
const store = mockStore({
  'ORDER' : {
    ordersList: [order],
    coupon: {
      coupon: 'COUPON_TEXT',
      status: 'error',
      discount: 0
    }
  }
});

describe('BasketPage', () => {
  it('render', () => {
    const history = createMemoryHistory();
    const { container } = render(
      <Provider store={store}>
        <HistoryRouter history={ history }>
          <BasketPage/>
        </HistoryRouter>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
