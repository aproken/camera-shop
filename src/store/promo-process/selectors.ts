import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Promo } from '../../types/promo';

export const getPromoProduct = (state: State): Promo | null => state[NameSpace.PromoProduct].promoProduct;
