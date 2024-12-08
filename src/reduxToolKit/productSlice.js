import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchProducts = createAsyncThunk(
  "users/fetchByIdStatus",
  async (_, thunkAPI) => {
    const { RejectWithValue } = thunkAPI;
    try {
      const res = await axios("https://fakestoreapi.com/products");
      return res.data;
    } catch (error) {
      return RejectWithValue(error);
    }
  }
);
const initialState = { product: [] };
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (e) => {
    e.addCase(fetchProducts.fulfilled, (state, action) => {
      state.product = action.payload;
    });
  },
});

export default productsSlice.reducer;
