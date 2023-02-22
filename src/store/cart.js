import { createSlice } from '@reduxjs/toolkit';

const initialCartState = { products: {}, changed: false };

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    replaceCart(state, action) {
      return {
        ...state,
        products: action.payload.products
          ? action.payload.products
          : initialCartState.products,
      };
    },
    addProduct(state, action) {
      if (state.products[action.payload.title]) {
        return {
          products: {
            ...state.products,
            [action.payload.title]: {
              ...state.products[action.payload.title],
              quantity: state.products[action.payload.title].quantity + 1,
            },
          },
          changed: true,
        };
      } else {
        return {
          products: {
            ...state.products,
            [action.payload.title]: {
              title: action.payload.title,
              quantity: 1,
              price: action.payload.price,
            },
          },
          changed: true,
        };
      }
    },
    addQuantity(state, action) {
      return {
        ...state,
        products: {
          ...state.products,
          [action.payload]: {
            ...state.products[action.payload],
            quantity: state.products[action.payload].quantity + 1,
          },
        },
        changed: true,
      };
    },
    removeQuantity(state, action) {
      if (state.products[action.payload].quantity > 1) {
        return {
          ...state,
          products: {
            ...state.products,
            [action.payload]: {
              ...state.products[action.payload],
              quantity: state.products[action.payload].quantity - 1,
            },
          },
          changed: true,
        };
      } else {
        delete state.products[action.payload];
        return state;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
