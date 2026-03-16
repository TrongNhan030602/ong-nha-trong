import { createSlice } from "@reduxjs/toolkit";

interface AppState {
  loading: boolean;
}

const initialState: AppState = {
  loading: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = appSlice.actions;
export default appSlice.reducer;
