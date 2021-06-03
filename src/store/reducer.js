import { createSlice } from '@reduxjs/toolkit';

const httpSlice = createSlice({
  name: 'datasForStudents',
  initialState: {
    dataFromApiForStudents: [],
    loading: false,
    error: [],
    // TODO: może to do innego slice???
    answer: { text: '', isCorrect: false },
    quizQuestion: { question: '', answers: [] },
    quizSection: { questions: [] },
    completeQuiz: { title: '', questions: []}
  },
  reducers: {
    loadData: (data, action) => {
      data.dataFromApiForStudents = action.payload;
    },
    showLoader: (data) => {
      data.loading = true;
    },
    hideLoader: (data) => {
      data.loading = false;
    },
    catchErrors: (data, action) => {
      data.error.push(action.payload);
    },
    logout: (data) => {
      data.dataFromApiForStudents = [];
    },
    addAnswer: (state, action) => {
      state.answer = action.payload;
      state.quizQuestion.answers.push(state.answer);
    },
    addQuestion: (state, action) => {
      state.quizQuestion.question = action.payload;
    },
    createQuizSection: (state) => {
      state.quizSection.questions.push(state.quizQuestion);
    },
    createQuiz: (state, action) => {
      state.completeQuiz.title = action.payload;
      state.completeQuiz.questions.push(state.quizSection.questions);
    },
    resetAnswersArray: (state) => {
      state.quizQuestion.answers = [];
    }
  }
});

export const {
  loadData,
  logout,
  showLoader,
  hideLoader,
  catchErrors,
  addAnswer,
  addQuestion,
  createQuizSection,
  resetAnswersArray,
  createQuiz
} = httpSlice.actions;
export default httpSlice.reducer;
