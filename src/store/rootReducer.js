import { combineReducers } from '@reduxjs/toolkit';
import httpReducer from './httpReducer';
import  answerReducer  from './quizReducer';

export default combineReducers({
  http: httpReducer,
  quizAnswers: answerReducer
});
