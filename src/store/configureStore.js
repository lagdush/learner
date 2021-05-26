import { configureStore } from '@reduxjs/toolkit';
import httpReducer from './reducer';


const createStore = () => {
  return configureStore({
    reducer: httpReducer,
  });
};

export default createStore;
