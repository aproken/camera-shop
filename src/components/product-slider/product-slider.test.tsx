import { RenderResult, render } from '@testing-library/react';
import { makeFakeCameras } from '../../utils/mocks-cameras';
import ProductSlider from './product-slider';
import * as M from 'react-id-swiper';

const SwiperMockComponent: React.FC = (_props) => <div></div>;
jest.mock('react-id-swiper', () => jest.fn(SwiperMockComponent));

describe('ProductSlider', () => {
  it('Компонент принимает камеры и отрисовывает их', () => {
    const fakeCameras = makeFakeCameras();
    const {container}: RenderResult = render(<ProductSlider similar={fakeCameras} />);
    expect(M.default).toBeCalled();
    expect(M.default).toBeCalledTimes(1);
    expect(container).toMatchSnapshot();
  });
});
