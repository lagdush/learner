import { createSlice } from '@reduxjs/toolkit';

const httpSlice = createSlice({
  name: 'datasForStudents',
  initialState: {
    dataFromApiForStudents: []
  },
  reducers: {
    loadData: (data, action) => {
      data.dataFromApiForStudents = action.payload;
    },
    logout: (data) => {
      data.dataFromApiForStudents = [];
    }
  }
});

export const { loadData, logout } = httpSlice.actions;
export default httpSlice.reducer;
