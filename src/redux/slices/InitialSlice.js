import {createSlice} from '@reduxjs/toolkit';

const initialSlice = createSlice({
  name: 'initial',
  initialState: {
    userType: null,
    user: {},
    token: '',
  },
  reducers: {
    setUserLogin(state, action) {
      state.userType = action.payload.userType;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setUserLogout(state) {
      state.userType = null;
      state.user = {};
      state.token = '';
    },
    updateUserName(state, action) {
      state.user.fname = action.payload.fname;
      state.user.lname = action.payload.lname;
    },
  },
});

export const {setUserLogin, setUserLogout, updateUserName} =
  initialSlice.actions;
export default initialSlice.reducer;
