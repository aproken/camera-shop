import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ReviewForm from './review-form';

describe('Тестирование компонента ReviewForm', () => {
  it('Форма выдает ошибки при незаполненных обязательных полях', async () => {
    const mockOnSubmit = jest.fn((_evt) => null);
    render(<ReviewForm productId={1} onSubmit={mockOnSubmit} />);

    fireEvent.submit(screen.getByRole('button'));

    await waitFor(() => expect(mockOnSubmit.mock.calls.length).toBe(0));
    expect(await screen.findByText('Нужно оценить товар')).toBeInTheDocument();
    expect(await screen.findByText('Нужно указать имя')).toBeInTheDocument();
    expect(await screen.findByText('Нужно указать достоинства')).toBeInTheDocument();
    expect(await screen.findByText('Нужно указать недостатки')).toBeInTheDocument();
    expect(await screen.findByText('Введите не менее 5 символов')).toBeInTheDocument();
  });

  it('Форма вызывает OnSubmit при корректном заполнении', async () => {
    const mockOnSubmit = jest.fn((_evt) => null);

    render(<ReviewForm productId={1} onSubmit={mockOnSubmit} />);

    fireEvent.click(screen.getAllByRole('radio')[0]);
    fireEvent.change(screen.getByLabelText('Ваше имя'), {target: {value: 'Вася'}});
    fireEvent.change(screen.getByLabelText('Достоинства'), {target: {value: 'Текст достоинств'}});
    fireEvent.change(screen.getByLabelText('Недостатки'), {target: {value: 'Текст недостатков'}});
    fireEvent.change(screen.getByLabelText('Комментарий'), {target: {value: 'Развернутый комментарий'}});

    fireEvent.submit(screen.getByRole('button'));

    await waitFor(() => {
      expect(mockOnSubmit.mock.calls.length).toBe(1);
    });

    expect(mockOnSubmit).toHaveBeenCalledWith({
      'advantage': 'Текст достоинств',
      'cameraId': 1,
      'disadvantage': 'Текст недостатков',
      'rating': 5,
      'review': 'Развернутый комментарий',
      'userName': 'Вася'
    });
  });
});

