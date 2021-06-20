import { createSlice } from '@reduxjs/toolkit';
import { CompletedQuiz, QuizAnswers, QuizQuestions, QuizSection } from '../models/models';

const httpSlice = createSlice({
  name: 'datasForStudents',
  initialState: {
    dataFromApiForStudents: [],
    loading: false,
    error: [],
    // TODO: może to do innego slice???
    // answer: { text: '', isCorrect: "Answer is incorrect" } as QuizAnswers,
    // quizQuestion: { question: '', answers: [] } as QuizQuestions,
    // quizSection: { questions: [] } as QuizSection,
    // completeQuiz: {  title: {title: ''}, questions: [] } as CompletedQuiz
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
      //@ts-ignore
      data.error.push(action.payload);
    },
    logout: (data) => {
      data.dataFromApiForStudents = [];
    },
       // TODO: może to do innego slice???
    // addAnswer: (state, action) => {
    //   state.answer = action.payload;
    //   state.quizQuestion.answers.push(state.answer);
    // },
    // editAnswer: (state, action) => {
    //   if (!action.payload.content) return;
    //   const content =
    //     state.quizSection.questions[action.payload.mainId].answers[
    //       action.payload.id
    //     ];
    //   content.text = action.payload.content;
    // },
    // removeAnswer: (state, action) => {
    //   const correctAnswersArray = state.quizSection.questions[action.payload.mainId].answers.filter(answer=>answer.isCorrect === 'Answer is correct');
    //   const hasOneCorrectAnswer = state.quizSection.questions[action.payload.mainId].answers[action.payload.id].isCorrect==='Answer is correct';
    //   if(correctAnswersArray.length === 1 && hasOneCorrectAnswer) {
    //     return
    //   }
    // state.quizSection.questions[action.payload.mainId].answers.splice(
    //     action.payload.id,
    //     1
    //   );
    // },
    // editQuizQuestion: (state, action) => {
    //   if (!action.payload.content) return;
    //   state.quizSection.questions[action.payload.mainId].question =
    //     action.payload.content;
    // },
    // addQuestion: (state, action) => {
    //   state.quizQuestion.question = action.payload;
    // },
    // removeQuestion: (state, action) => {
    //   state.quizSection.questions.splice(action.payload.mainId, 1);
    // },
    // createQuizSection: (state) => {
    //   state.quizSection.questions.push(state.quizQuestion);
    // },
    // createQuiz: (state, action) => {
    //   state.completeQuiz.title = action.payload;
    //   state.completeQuiz.questions.push(state.quizSection.questions);
    // },
    // resetAnswersArray: (state) => {
    //   state.quizQuestion.answers = [];
    // }
  }
});

export const {
  loadData,
  logout,
  showLoader,
  hideLoader,
  catchErrors,
     // TODO: może to do innego slice???
  // addAnswer,
  // addQuestion,
  // createQuizSection,
  // resetAnswersArray,
  // createQuiz,
  // editAnswer,
  // editQuizQuestion,
  // removeAnswer,
  // removeQuestion
} = httpSlice.actions;
export default httpSlice.reducer;
