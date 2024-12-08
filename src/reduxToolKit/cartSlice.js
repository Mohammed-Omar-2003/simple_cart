import { createSlice } from "@reduxjs/toolkit";
const initialState = { product: [] };
const cartSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.product.find(
        (ele) => ele.id === action.payload.id
      );
      if (findProduct) {
        findProduct.quantiy += 1;
      } else {
        const productColone = { ...action.payload, quantiy: 1 };
        state.product.push(productColone);
      }
      // state.product.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.product = state.product.filter(
        (ele) => ele.id !== action.payload.id
      );
    },
    clear: (state) => {
      state.product = [];
    },
  },
});

export const { addToCart, deleteProduct, clear } = cartSlice.actions;
export default cartSlice.reducer;
