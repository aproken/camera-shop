import { render } from '@testing-library/react';
import BasketCard from './basket-card';
import { makeFakeCameras } from '../../utils/mocks-cameras';
import thunk from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureMockStore([thunk]);
const store = mockStore({
  'ORDER' : {
    ordersList: [],
    coupon: {}
  }
});

describe('BasketCard', () => {
  it('render', () => {
    const camera = makeFakeCameras()[0];
    const order = {
      camera: camera,
      quantity: 1
    };
    const { container } = render(
      <Provider store={store}>
        <BasketCard order={order}/>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
