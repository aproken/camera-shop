import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Modal from './modal';

describe('Тестирование компонента Modal', () => {
  it('Открытие модального окна', () => {
    const mockHide = jest.fn(() => null);
    const {container} = render(<Modal isOpen hide={mockHide}>test</Modal>);

    expect(container).toMatchSnapshot();
  });

  it('Закрытие', async () => {
    const mockHide = jest.fn(() => null);
    const {container} = render(<Modal isOpen hide={mockHide}>test</Modal>);

    // Закрытие на крестик
    fireEvent.click(screen.getByRole('button'));
    // Закрытие на overlay
    fireEvent.click(screen.getByLabelText('Закрыть попап', {selector: '.modal__overlay'}));
    // Закрытие на Esc
    fireEvent.keyDown(container, {key: 'Escape'});

    await waitFor(() => {
      expect(mockHide.mock.calls).toHaveLength(3);
    });
  });
});

