import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  CreateQuiz,
  QuizAnswers,
  QuizQuestions,
  reduxState
} from '../../../models/models';
import StyledTextField from '../../Atoms/StyledTextField/StyledTextField';
import TeacherCreateQuestion from '../TeacherCreateQuestion/TeacherCreateQuestion';
import { Container } from './TeacherCreateQuiz-style';

type TeacherCreateQuizProps = {};

const TeacherCreateQuiz: React.FC<TeacherCreateQuizProps> = () => {
  const quizInitialState: CreateQuiz = { title: '', questions: [] };
  const [quiz, setQuiz] = useState(quizInitialState);
  const [component, addComponent] = useState<any>([]);
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuiz(() => {
      return { ...quiz, [e.target.name]: e.target.value };
    });
  };



  const answer = useSelector((state: reduxState) => state.answer);
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
      {/* <button onClick={removeComponentOnClick}>Usuń odpowiedź</button> */}
    </Container>
  );
};

export default TeacherCreateQuiz;
