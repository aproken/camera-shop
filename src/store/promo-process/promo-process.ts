import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { PromoProcess } from '../../types/state';
import { fetchPromoProductAction } from '../api-action';

export const initialState: PromoProcess = {
  promoProduct: null,
};

export const promoProcess = createSlice({
  name: NameSpace.PromoProduct,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPromoProductAction.fulfilled, (state, action) => {
        state.promoProduct = action.payload;
      });
  }
});
