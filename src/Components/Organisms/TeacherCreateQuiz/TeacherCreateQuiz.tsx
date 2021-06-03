import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createQuiz } from '../../../store/reducer';
import {
  CreateQuiz,
  QuizAnswers,
  QuizQuestions,
  reduxState
} from '../../../models/models';
import StyledTextField from '../../Atoms/StyledTextField/StyledTextField';
import TeacherCreateQuestion from '../TeacherCreateQuestion/TeacherCreateQuestion';
import { Container } from './TeacherCreateQuiz-style';
import { Button } from '@material-ui/core';

type TeacherCreateQuizProps = {};

const TeacherCreateQuiz: React.FC<TeacherCreateQuizProps> = () => {
  const quizInitialState = { title: '' };
  const [quiz, setQuiz] = useState(quizInitialState);
  const [component, addComponent] = useState<any>([]);

  const dispatch = useDispatch();
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuiz(() => {
      return { title: e.target.value };
    });
  };

  const answer = useSelector((state: reduxState) => state.quizSection);
  useEffect(() => {
    console.log(answer);
  }, [answer]);

  const addComponentOnClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    addComponent(
      component.concat(<TeacherCreateQuestion key={component.length} />)
    );
  };
  //   TODO: napraw usuwanie elementów
  //   const removeComponentOnClick = (e: React.SyntheticEvent) => {
  //     e.preventDefault();
  //     addComponent(component.pop());
  //     console.log(component);
  //   };

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
      {component}
      <button onClick={addComponentOnClick}>Dodaj kolejne pytanie</button>
      <Button
        onClick={() => dispatch({ type: createQuiz.type, payload: quiz })}
      >
        Stwórz quiz
      </Button>
    </Container>
  );
};

export default TeacherCreateQuiz;
