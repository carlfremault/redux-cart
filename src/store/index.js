import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './ui';
import productsReducer from './products';

const store = configureStore({
  reducer: {
    ui: uiReducer,
    products: productsReducer,
  },
});

export default store;
