import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalPrice: 0,
  },
  reducers: {
    add: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
        item.price += action.payload.price;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalPrice += action.payload.price;
    },
    remove: (state, action) => {
      const itemToRemove = state.items.find((item) => item.id === action.payload.id);
      if (itemToRemove) {
        state.items = state.items.filter((item) => item.id !== action.payload.id);
        state.totalPrice -= itemToRemove.price;
      }
    },
    quantityAdd: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
        item.price += action.payload.price / (item.quantity - 1);
      }
      state.totalPrice += action.payload.price / (item.quantity - 1);
    },
    quantityRemove: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item.quantity != 1) {
        item.quantity -= action.payload.quantity;
        item.price -= action.payload.price / (item.quantity + action.payload.quantity);
        state.totalPrice -= action.payload.price / (item.quantity + action.payload.quantity);
      }
    },
  },
});

export const { add, remove, quantityAdd, quantityRemove } = CartSlice.actions;

export default CartSlice.reducer;
