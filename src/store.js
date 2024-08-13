// src/store.js
// store.js
import { configureStore, createSlice } from "@reduxjs/toolkit";

// Create a slice for the menu state
const menuSlice = createSlice({
  name: "menu",
  initialState: [],
  reducers: {
    updateMenu: (state, action) => action.payload,
  },
});

// Create a slice for the loaded application state
const appSlice = createSlice({
  name: "app",
  initialState: null,
  reducers: {
    loadApp: (state, action) => action.payload,
  },
});
const registerSlice = createSlice({
  name: "name",
  initialState: {},
  reducers: {
    registerForm: (state, action) => action.payload,
  },
});

export const { updateMenu } = menuSlice.actions;
export const { loadApp } = appSlice.actions;
export const { registerForm } = registerSlice.actions;

const store = configureStore({
  reducer: {
    menu: menuSlice.reducer,
    app: appSlice.reducer,
    form: registerSlice.reducer,
  },
});

export default store;
