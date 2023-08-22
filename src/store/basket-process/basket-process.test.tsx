import { basketProcess } from '../basket-process/basket-process';
import { actions } from './basket-process';
import { FakeCamera } from '../../utils/mocks-cameras';

describe('basketProcess reducer', () => {
  it('add Order', () => {
    const camera = FakeCamera;
    const nextState = basketProcess.reducer(
      undefined,
      actions.addCameraToBasket(camera)
    );
    expect(nextState.ordersList[0].camera).toBe(camera);
    expect(nextState.ordersList[0].quantity).toBe(1);
  });

  it('Clear Orders', () => {
    const camera = FakeCamera;
    const initState = basketProcess.getInitialState();

    const nextState = basketProcess.reducer(
      initState,
      actions.addCameraToBasket(camera)
    );

    const finalState = basketProcess.reducer(
      nextState,
      actions.clearBasket()
    );

    expect(finalState.ordersList.length).toBe(0);
  });

  it('set Quantity', () => {
    const camera = FakeCamera;
    const nextState = basketProcess.reducer(
      undefined,
      actions.addCameraToBasket(camera)
    );

    const finalState = basketProcess.reducer(
      nextState,
      actions.changeQuantityOfCameras({camera: camera, quantity: 7})
    );
    expect(finalState.ordersList[0].quantity).toBe(7);
  });
});
