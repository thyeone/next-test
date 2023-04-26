import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type productState = {
  brand: string;
  price: number;
};

const initialState: productState = {
  brand: '',
  price: 0,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setInfo: (
      state: productState,
      action: PayloadAction<{ brand: string; price: number }>
    ) => ({
      ...state,
      brand: action.payload.brand,
      price: action.payload.price,
    }),
  },
});

export const { setInfo } = productSlice.actions;

export default productSlice.reducer;
