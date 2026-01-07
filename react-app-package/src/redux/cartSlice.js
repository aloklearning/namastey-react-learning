import { createSlice, current } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      /**
       * As per RTK (Redux Tool Kit)
       * Either return a new object or mutate the state right away
       * state.items.push(action.payload);
       *
       * current() helps you to make the state readable, as normal state
       * will be a Redux Proxy which is not readable and throws error
       */
      return {
        items: Array.from(new Set([...current(state.items), action.payload])),
      };
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0; // []
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
