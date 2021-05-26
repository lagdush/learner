import { createSlice } from '@reduxjs/toolkit';

const httpSlice = createSlice({
  name: 'datasForStudents',
  initialState: {
    dataFromApiForStudents: [],
    loading: false,
    error: [],
    answer: { text: '', isCorrect: false }
  },
  reducers: {
    loadData: (data, action) => {
      data.dataFromApiForStudents = action.payload;
    },
    showLoader: (data, action) => {
      data.loading = true;
    },
    hideLoader: (data, action) => {
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
    }
  }
});

export const {
  loadData,
  logout,
  showLoader,
  hideLoader,
  catchErrors,
  addAnswer
} = httpSlice.actions;
export default httpSlice.reducer;
