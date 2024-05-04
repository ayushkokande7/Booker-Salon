import {createSlice} from '@reduxjs/toolkit';

const alertSlice = createSlice({
  name: 'alert',
  initialState: {
    isVisible: false,
    // info , done
    icon: '',
    title: '',
    message: '',
    event: '',
  },
  reducers: {
    showAlert(state, action) {
      state.isVisible = true;
      state.message = action.payload.message;
      state.icon = action.payload.icon || 'info';
      state.title = action.payload.title || 'Confirmation';
      state.event = action.payload.event;
    },
    hideAlert(state) {
      state.isVisible = false;
      state.message = '';
      state.icon = '';
      state.title = '';
      state.event = '';
    },
  },
});

export const {showAlert, hideAlert} = alertSlice.actions;
export default alertSlice.reducer;
