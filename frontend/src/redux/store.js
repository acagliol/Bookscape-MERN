// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import booksApi from './features/cart/bookApi';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [booksApi.reducerPath] : booksApi.reducer,

  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(booksApi.middleware)
});
