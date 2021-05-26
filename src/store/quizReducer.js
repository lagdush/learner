import { createSlice } from '@reduxjs/toolkit';

const quizAnswerSlice = createSlice({
  name: 'quizAnswers',
  initalState: {
    answer: null
  },
  reducers: {
    addAnswer: (state, action) => {
      state.answer = action.payload;
    }
  }
});

export const { addAnswer } = quizAnswerSlice.actions;
export default quizAnswerSlice.reducer;
