/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { CardProps } from '../components/card/card';

const productsSlice = createSlice({
  initialState: {
    items: [] as CardProps[],
    itemCounter: 0,
    inTotal: 0,
    subTotal: 0,
  },
  name: 'products',
  reducers: {
    addItems: (state, action?) => {
      state.items = [...state.items, action.payload];
    },
    resetCart: (state) => {
      state.items = [];
    },
    itemCounter: (state, action) => {
      state.itemCounter += action.payload;
    },
    resetItemCounter: (state) => {
      state.itemCounter = 0;
    },
    setSubTotal: (state, action) => {
      state.subTotal += action.payload;
    },
    resetSubTotal: (state) => {
      state.subTotal = 0;
    },
  },
});

export const {
  addItems, resetCart, itemCounter, resetItemCounter, setSubTotal, resetSubTotal,
} = productsSlice.actions;

export default productsSlice.reducer;
