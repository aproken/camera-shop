import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { PromoProcess } from '../../types/state';
import { fetchPromoProductAction } from '../api-action';

export const initialState: PromoProcess = {
  promoProduct: null,
  isProductCompleting: false,
};

export const promoProcess = createSlice({
  name: NameSpace.PromoProduct,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPromoProductAction.pending, (state) => {
        state.isProductCompleting = false;
      })
      .addCase(fetchPromoProductAction.fulfilled, (state, action) => {
        state.promoProduct = action.payload;
        state.isProductCompleting = true;
      })
      .addCase(fetchPromoProductAction.rejected, (state) => {
        state.isProductCompleting = true;
      });
  }
});
