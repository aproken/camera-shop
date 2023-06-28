import { render, screen, fireEvent } from '@testing-library/react';
import ProductTabs from './product-tabs';
import { makeFakeCameras } from '../../utils/mocks-cameras';

describe('ProductTabs', () => {
  it('должен переключать активную вкладку при клике на соответствующую кнопку', () => {
    const camera = makeFakeCameras()[0];

    render(<ProductTabs product={camera} />);

    const tabButtons = screen.getAllByRole('button');

    fireEvent.click(tabButtons[1]);
    let activeTabContent = screen.getByText('Характеристики');
    expect(activeTabContent).toBeInTheDocument();

    fireEvent.click(tabButtons[0]);
    activeTabContent = screen.getByText('Описание');
    expect(activeTabContent).toBeInTheDocument();
  });
});

