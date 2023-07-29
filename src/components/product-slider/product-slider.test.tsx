import { render } from '@testing-library/react';
import { makeFakeCameras } from '../../utils/mocks-cameras';
import ProductSlider from './product-slider';
import * as Module from 'react-id-swiper';
jest.mock('react-id-swiper');

const SwiperMock = jest.fn(() => null);
Module.default = SwiperMock;

describe('ProductSlider', () => {
  it('Компонент принимает камеры и отрисовывает их', () => {

    const fakeCameras = makeFakeCameras();
    render(<ProductSlider similar={fakeCameras} />);

    expect(SwiperMock).toHaveBeenCalled();
  });
});
