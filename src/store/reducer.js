import {createSlice} from '@reduxjs/toolkit';

const httpSlice = createSlice({
   name: 'datasForStudents',
   initialState: {
      user:{
         posts: [{
            title: '',
            content: '',
            photo: ''
         }],
         videos: [{
            title: '',
            url:'',
            photo: ''
         }],
         quizzes: [{
            title: '',
            questions: {
               question: '',
               answers: [{
                  text: '',
                  isCorrect: false
               }]
            }
         }],
      }
   },
   reducers: {
      
   }
})