import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';

const createStore = () => {
  return configureStore({
    reducer
  });
};

export default createStore;
