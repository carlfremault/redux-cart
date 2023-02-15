import { createSlice } from '@reduxjs/toolkit';
import { uiActions } from './ui';

const initialCartState = {};

const cartSlice = createSlice({
  name: 'products',
  initialState: initialCartState,
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
      }
    },
  },
});

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data.',
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        'https://react-http-e8697-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
        { method: 'PUT', body: JSON.stringify(cart) }
      );

      if (!response.ok) throw new Error('Sending cart data failed.');
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Cart data sent successfully.',
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed.',
        })
      );
    }
  };
};

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
