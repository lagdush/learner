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
  },
});

export const { loadData } = httpSlice.actions;
export default httpSlice.reducer;
