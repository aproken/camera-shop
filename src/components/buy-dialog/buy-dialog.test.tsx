import { render } from '@testing-library/react';
import BuyDialog from './buy-dialog';
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
const camera = makeFakeCameras()[0];

describe('Тестирование компонента BuyDialog', () => {
  it('render', () => {
    const { container} = render(
      <Provider store={store}>
        <BuyDialog product={camera} onClose={jest.fn} isOpen />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});

