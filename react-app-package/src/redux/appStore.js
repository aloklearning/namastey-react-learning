import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

// Creating a store to have it available for the Provided application
// To perform dispatch, subscription to the data
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
