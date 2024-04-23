import {combineReducers} from '@reduxjs/toolkit';
import InitialReducer from './slices/InitialSlice';
import alertSlice from './slices/alertSlice';
const RootReducer = combineReducers({
  initial: InitialReducer,
  alert: alertSlice,
});

export default RootReducer;
