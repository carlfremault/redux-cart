import { createSlice } from '@reduxjs/toolkit';

const initialCartState = { cartVisible: true };

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    toggleCart(state) {
      state.cartVisible = !state.cartVisible;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
