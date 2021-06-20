import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createQuiz } from '../../../store/quizReducer';
import StyledTextField from '../../Atoms/StyledTextField/StyledTextField';
import TeacherCreateQuestion from '../TeacherCreateQuestion/TeacherCreateQuestion';
import { Container} from './TeacherCreateQuiz-style';
import { Button } from '@material-ui/core';

type TeacherCreateQuizProps = {};

const TeacherCreateQuiz: React.FC<TeacherCreateQuizProps> = () => {
  const dispatch = useDispatch();
  const quizInitialState = { title: '' };
  const [quiz, setQuiz] = useState(quizInitialState);
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuiz(() => {
      return { title: e.target.value };
    });
  };

  const confirmQuiz = () => {
    dispatch({ type: createQuiz.type, payload: quiz });
    setQuiz(quizInitialState);
  };

  return (
    <Container>
      <StyledTextField
        inputHandler={inputHandler}
        customization={{
          value: quiz.title,
          name: 'title',
          placeholder: 'Quiz o...',
          label: 'Tytuł quizu'
        }}
      />
        <TeacherCreateQuestion />
        <Button
          onClick={confirmQuiz}
        >
          Stwórz quiz
        </Button>
    </Container>
  );
};

export default TeacherCreateQuiz;
