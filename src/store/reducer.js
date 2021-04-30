import { createSlice } from '@reduxjs/toolkit';

const httpSlice = createSlice({
  name: 'datasForStudents',
  initialState: {
     dataFromApi: []
  },
  reducers: {
    loadData: (data, action) => {
      data.dataFromApi = action.payload;
    },
  },
});

export const { loadData } = httpSlice.actions;
export default httpSlice.reducer;
