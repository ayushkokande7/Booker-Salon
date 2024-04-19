import {combineReducers} from '@reduxjs/toolkit';
import InitialReducer from './slices/InitialSlice';

const RootReducer = combineReducers({
  initial: InitialReducer,
});

export default RootReducer;
