import { configureStore } from '@reduxjs/toolkit';
import httpReducer from './reducer';
import quizReducer from './quizReducer';

const store = configureStore({
  reducer: {
    datasForStudents: httpReducer,
    quizCreate: quizReducer
  }
});

export default store;
