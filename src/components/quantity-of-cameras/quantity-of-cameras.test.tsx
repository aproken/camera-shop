import { render, screen, fireEvent } from '@testing-library/react';
import QuantityOfCamera from './quantity-of-cameras';
import { makeFakeCameras } from '../../utils/mocks-cameras';
import thunk from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { actions } from '../../store/basket-process/basket-process';


const mockStore = configureMockStore([thunk]);
const store = mockStore({
  'ORDER' : {
    ordersList: [],
    coupon: {}
  }
});

afterEach(() => {
  store.clearActions();
});

describe('QuantityOfCamera', () => {
  it('render', () => {
    const camera = makeFakeCameras()[0];

    const { container } = render(
      <Provider store={store}>
        <QuantityOfCamera camera={camera} quantity={1}/>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });

  it('Increment', () => {
    const camera = makeFakeCameras()[0];

    render(
      <Provider store={store}>
        <QuantityOfCamera camera={camera} quantity={1}/>
      </Provider>
    );
    const incBtn = screen.getByLabelText('увеличить количество товара');
    fireEvent.click(incBtn);
    expect(store.getActions()).toEqual([{
      type: actions.changeQuantityOfCameras.type,
      payload: {
        camera: camera,
        quantity: 2
      }
    }]);

  });

  it('Decriment', () => {
    store.clearActions();
    const camera = makeFakeCameras()[0];

    render(
      <Provider store={store}>
        <QuantityOfCamera camera={camera} quantity={2}/>
      </Provider>
    );
    const decBtn = screen.getByLabelText('уменьшить количество товара');
    fireEvent.click(decBtn);
    expect(store.getActions()).toEqual([{
      type: actions.changeQuantityOfCameras.type,
      payload: {
        camera: camera,
        quantity: 1
      }
    }]);

  });
});
