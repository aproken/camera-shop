import { act, fireEvent, render, screen } from '@testing-library/react';
import PriceBlock from './price-block';
import { createBrowserHistory } from 'history';
import HistoryRouter from '../../components/history-route/history-route';

const history = createBrowserHistory();
history.push('/');

describe('PriceBlock', ()=> {
  beforeAll(() => {
    jest.useFakeTimers();
  });
  afterAll(() => {
    jest.clearAllMocks();
  });
  beforeEach(() => {
    history.replace('/');
  });

  it('Отрисовка пустой формы', () => {
    const minPrice = 5000;
    const maxPrice = 100000;

    history.push('/');
    render(
      <HistoryRouter history={ history }>
        <PriceBlock minPrice={ minPrice } maxPrice={ maxPrice }/>
      </HistoryRouter>
    );

    const inputMin = screen.getByLabelText('Цена от');
    const inputMax = screen.getByLabelText('Цена до');

    expect(inputMin.getAttribute('placeholder')).toBe('5000');
    expect(inputMin.getAttribute('value')).toBe('');
    expect(inputMax.getAttribute('placeholder')).toBe('100000');
    expect(inputMax.getAttribute('value')).toBe('');
  });

  it('Отрисовка заполненой формы', () => {
    const minPrice = 5000;
    const maxPrice = 100000;

    history.push('/?price_gte=5500&price_lte=8000');
    render(
      <HistoryRouter history={ history }>
        <PriceBlock minPrice={ minPrice } maxPrice={ maxPrice }/>
      </HistoryRouter>
    );

    const inputMin = screen.getByLabelText('Цена от');
    const inputMax = screen.getByLabelText('Цена до');

    expect(inputMin.getAttribute('placeholder')).toBe('5000');
    expect(inputMin.getAttribute('value')).toBe('5500');
    expect(inputMax.getAttribute('placeholder')).toBe('100000');
    expect(inputMax.getAttribute('value')).toBe('8000');
  });

  it('Смена URL сбрасывает состояние формы', () => {
    const minPrice = 5000;
    const maxPrice = 100000;

    history.push('/?price_gte=5500&price_lte=8000');
    render(
      <HistoryRouter history={ history }>
        <PriceBlock minPrice={ minPrice } maxPrice={ maxPrice }/>
      </HistoryRouter>
    );

    act(() => history.push('/'));

    const inputMin = screen.getByLabelText('Цена от');
    const inputMax = screen.getByLabelText('Цена до');

    expect(inputMin.getAttribute('placeholder')).toBe('5000');
    expect(inputMin.getAttribute('value')).toBe('');
    expect(inputMax.getAttribute('placeholder')).toBe('100000');
    expect(inputMax.getAttribute('value')).toBe('');
  });

  it('Обнуление URL сбрасывает состояние формы', () => {
    const minPrice = 5000;
    const maxPrice = 100000;

    history.push('/');
    render(
      <HistoryRouter history={ history }>
        <PriceBlock minPrice={ minPrice } maxPrice={ maxPrice }/>
      </HistoryRouter>
    );

    const inputMin = screen.getByLabelText('Цена от');
    const inputMax = screen.getByLabelText('Цена до');

    fireEvent.change(inputMin, {target: {value: '6000'}});
    //fireEvent.blur(inputMin);

    act(() => {
      jest.runAllTimers();
    });

    act(() => history.push('/'));

    expect(inputMin.getAttribute('placeholder')).toBe('5000');
    expect(inputMin.getAttribute('value')).toBe('');
    expect(inputMax.getAttribute('placeholder')).toBe('100000');
    expect(inputMax.getAttribute('value')).toBe('');
  });

  it('MinValue сохраняется в URL по таймауту', () => {
    const minPrice = 5000;
    const maxPrice = 100000;

    render(
      <HistoryRouter history={ history }>
        <PriceBlock minPrice={ minPrice } maxPrice={ maxPrice }/>
      </HistoryRouter>
    );

    const inputMin = screen.getByLabelText('Цена от');

    fireEvent.change(inputMin, {target: {value: '6000'}});
    // fireEvent.blur(inputMin);

    act(() => {
      jest.runAllTimers();
    });
    expect(window.location.search).toBe('?price_gte=6000');
    expect(inputMin.getAttribute('value')).toBe('6000');
  });

  it('MinValue сохраняется в URL по onBlur', () => {
    const minPrice = 5000;
    const maxPrice = 100000;

    render(
      <HistoryRouter history={ history }>
        <PriceBlock minPrice={ minPrice } maxPrice={ maxPrice }/>
      </HistoryRouter>
    );

    const inputMin = screen.getByLabelText('Цена от');

    fireEvent.change(inputMin, {target: {value: '6000'}});
    fireEvent.blur(inputMin);

    act(() => {
      jest.runAllTimers();
    });
    expect(window.location.search).toBe('?price_gte=6000');
    expect(inputMin.getAttribute('value')).toBe('6000');
  });

  it('MaxValue сохраняется в URL', () => {
    const minPrice = 5000;
    const maxPrice = 100000;

    history.push('/');
    render(
      <HistoryRouter history={ history }>
        <PriceBlock minPrice={ minPrice } maxPrice={ maxPrice }/>
      </HistoryRouter>
    );

    const inputMax = screen.getByLabelText('Цена до');

    fireEvent.change(inputMax, {target: {value: '8000'}});
    fireEvent.blur(inputMax);

    act(() => {
      jest.runAllTimers();
    });

    expect(window.location.search).toBe('?price_lte=8000');
    expect(inputMax.getAttribute('value')).toBe('8000');
  });


  it('value < MinValue = MinValue', () => {
    const minPrice = 5000;
    const maxPrice = 100000;

    expect(window.location.search).toBe('');
    render(
      <HistoryRouter history={ history }>
        <PriceBlock minPrice={ minPrice } maxPrice={ maxPrice }/>
      </HistoryRouter>
    );

    const inputMin = screen.getByLabelText('Цена от');
    const inputMax = screen.getByLabelText('Цена до');

    fireEvent.change(inputMin, {target: {value: '1'}});
    fireEvent.blur(inputMin);

    act(() => {
      jest.runAllTimers();
    });

    expect(inputMin.getAttribute('value')).toBe('');
    expect(inputMin.getAttribute('placeholder')).toBe('5000');
    expect(inputMax.getAttribute('value')).toBe('');
    expect(inputMax.getAttribute('placeholder')).toBe('100000');
    expect(window.location.search).toBe('');
  });

  it('value > MaxValue = MaxValue', () => {
    const minPrice = 5000;
    const maxPrice = 100000;

    render(
      <HistoryRouter history={ history }>
        <PriceBlock minPrice={ minPrice } maxPrice={ maxPrice }/>
      </HistoryRouter>
    );

    const inputMin = screen.getByLabelText('Цена от');
    const inputMax = screen.getByLabelText('Цена до');

    fireEvent.change(inputMax, {target: {value: '999999'}});
    fireEvent.blur(inputMax);

    act(() => {
      jest.runAllTimers();
    });

    expect(inputMin.getAttribute('value')).toBe('');
    expect(inputMin.getAttribute('placeholder')).toBe('5000');
    expect(inputMax.getAttribute('value')).toBe('');
    expect(inputMax.getAttribute('placeholder')).toBe('100000');
    expect(window.location.search).toBe('');
  });

  it('MaxValue не может быть меньше MinValue', () => {
    const minPrice = 5000;
    const maxPrice = 100000;

    render(
      <HistoryRouter history={ history }>
        <PriceBlock minPrice={ minPrice } maxPrice={ maxPrice }/>
      </HistoryRouter>
    );

    const inputMin = screen.getByLabelText('Цена от');
    const inputMax = screen.getByLabelText('Цена до');

    fireEvent.change(inputMin, {target: {value: '6000'}});
    fireEvent.blur(inputMin);
    fireEvent.change(inputMax, {target: {value: '5500'}});
    fireEvent.blur(inputMax);

    act(() => {
      jest.runAllTimers();
    });

    expect(inputMin.getAttribute('value')).toBe('6000');
    expect(inputMin.getAttribute('placeholder')).toBe('5000');
    expect(inputMax.getAttribute('value')).toBe('6000');
    expect(inputMax.getAttribute('placeholder')).toBe('100000');

    const urlParams = new URLSearchParams(window.location.search);
    expect(urlParams.get('price_lte')).toBe('6000');
    expect(urlParams.get('price_gte')).toBe('6000');
  });

  it('MinValue не может быть больше MaxValue', () => {
    const minPrice = 5000;
    const maxPrice = 100000;

    render(
      <HistoryRouter history={ history }>
        <PriceBlock minPrice={ minPrice } maxPrice={ maxPrice }/>
      </HistoryRouter>
    );

    const inputMin = screen.getByLabelText('Цена от');
    const inputMax = screen.getByLabelText('Цена до');

    fireEvent.change(inputMax, {target: {value: '6000'}});
    fireEvent.blur(inputMax);
    fireEvent.change(inputMin, {target: {value: '7000'}});
    fireEvent.blur(inputMin);

    act(() => {
      jest.runAllTimers();
    });

    expect(inputMin.getAttribute('value')).toBe('6000');
    expect(inputMin.getAttribute('placeholder')).toBe('5000');
    expect(inputMax.getAttribute('value')).toBe('6000');
    expect(inputMax.getAttribute('placeholder')).toBe('100000');
    const urlParams = new URLSearchParams(window.location.search);
    expect(urlParams.get('price_lte')).toBe('6000');
    expect(urlParams.get('price_gte')).toBe('6000');
  });

  it('MinValue и MaxValue равный Null не сохраняется в URL', () => {
    const minPrice = 5000;
    const maxPrice = 100000;

    history.push('/?price_gte=5500&price_lte=8000');
    render(
      <HistoryRouter history={ history }>
        <PriceBlock minPrice={ minPrice } maxPrice={ maxPrice }/>
      </HistoryRouter>
    );

    const inputMin = screen.getByLabelText('Цена от');
    const inputMax = screen.getByLabelText('Цена до');

    fireEvent.change(inputMin, {target: {value: ''}});
    fireEvent.blur(inputMin);
    fireEvent.change(inputMax, {target: {value: ''}});
    fireEvent.blur(inputMax);

    act(() => {
      jest.runAllTimers();
    });

    expect(inputMin.getAttribute('value')).toBe('');
    expect(inputMin.getAttribute('placeholder')).toBe('5000');
    expect(inputMax.getAttribute('value')).toBe('');
    expect(inputMax.getAttribute('placeholder')).toBe('100000');
    expect(window.location.search).toBe('');
  });

  it('MinValue и MaxValue равный Props не сохраняется в URL', () => {
    const minPrice = 5000;
    const maxPrice = 100000;

    history.push('/?price_gte=5500&price_lte=8000');
    render(
      <HistoryRouter history={ history }>
        <PriceBlock minPrice={ minPrice } maxPrice={ maxPrice }/>
      </HistoryRouter>
    );

    const inputMin = screen.getByLabelText('Цена от');
    const inputMax = screen.getByLabelText('Цена до');

    fireEvent.change(inputMin, {target: {value: '5000'}});
    fireEvent.blur(inputMin);
    fireEvent.change(inputMax, {target: {value: '100000'}});
    fireEvent.blur(inputMax);

    act(() => {
      jest.runAllTimers();
    });

    expect(inputMin.getAttribute('value')).toBe('');
    expect(inputMin.getAttribute('placeholder')).toBe('5000');
    expect(inputMax.getAttribute('value')).toBe('');
    expect(inputMax.getAttribute('placeholder')).toBe('100000');
    expect(window.location.search).toBe('');
  });
});
