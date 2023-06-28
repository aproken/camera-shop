import { promoProcess } from './promo-process';
import { fetchPromoProductAction } from '../api-action';
import { makeFakePromo } from '../../utils/mocks-promo';

describe('promoProcess reducer', () => {
  it('handles fetchPromoProductAction.pending', () => {
    const nextState = promoProcess.reducer(
      undefined,
      fetchPromoProductAction.pending('', undefined)
    );

    expect(nextState.isProductCompleting).toBe(false);
  });

  it('handles fetchPromoProductAction.fulfilled', () => {
    const promoProduct = makeFakePromo();
    const nextState = promoProcess.reducer(
      undefined,
      fetchPromoProductAction.fulfilled(promoProduct, '', undefined)
    );

    expect(nextState.promoProduct).toEqual(promoProduct);
    expect(nextState.isProductCompleting).toBe(true);
  });

  it('handle fetchPromoProductAction.rejected', () => {
    const error = new Error('Failed to fetch promoProduct');
    const nextState = promoProcess.reducer(
      undefined,
      fetchPromoProductAction.rejected(error, '', undefined)
    );

    expect(nextState.promoProduct).toEqual(null);
    expect(nextState.isProductCompleting).toBe(true);
  });
});
