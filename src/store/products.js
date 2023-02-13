import { createSlice } from '@reduxjs/toolkit';

const initialProductsState = {};

const productsSlice = createSlice({
  name: 'products',
  initialState: initialProductsState,
  reducers: {
    addProduct(state, action) {
      if (state[action.payload.title]) {
        return {
          ...state,
          [action.payload.title]: {
            ...action.payload,
            quantity: state[action.payload.title].quantity + 1,
          },
        };
      } else {
        return {
          ...state,
          [action.payload.title]: { ...action.payload, quantity: 1 },
        };
      }
    },
    addQuantity(state, action) {
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          quantity: state[action.payload].quantity + 1,
        },
      };
    },
    removeQuantity(state, action) {
      if (state[action.payload].quantity > 1) {
        return {
          ...state,
          [action.payload]: {
            ...state[action.payload],
            quantity: state[action.payload].quantity - 1,
          },
        };
      } else {
        delete state[action.payload];
        return state;
        // return {
        //   ...state,
        //   [action.payload]: null,
        // };
      }
    },
  },
});

export const productsActions = productsSlice.actions;
export default productsSlice.reducer;
