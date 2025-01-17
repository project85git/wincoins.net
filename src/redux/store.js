// src/redux/store.js
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import reusableReducer from './reusableData/reusableReducer';

// Combine multiple reducers directly in store.js (currently only promoReducer)
const rootReducer = combineReducers({
  reusableReducer,
});

// Configure and create the Redux store
const store = configureStore({
  reducer: rootReducer,

});

export default store;
