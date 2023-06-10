import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './greeting';

// Redux store
const store = configureStore({
  reducer: {
    message: messageReducer,
  },
});

export default store;
