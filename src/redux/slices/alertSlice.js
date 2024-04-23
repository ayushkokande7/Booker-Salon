import {createSlice} from '@reduxjs/toolkit';

const alertSlice = createSlice({
  name: 'alert',
  initialState: {
    isVisible: false,
    message: '',
    event: '',
  },
  reducers: {
    showAlert(state, action) {
      state.isVisible = true;
      state.message = action.payload.message;
      state.event = action.payload.event;
    },
    hideAlert(state) {
      state.isVisible = false;
      state.message = '';
      state.event = '';
    },
  },
});

export const {showAlert, hideAlert} = alertSlice.actions;
export default alertSlice.reducer;
