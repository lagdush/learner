import React, { useState } from 'react';
import { CreateQuiz, QuizAnswers, QuizQuestions } from '../../../models/models';
import StyledTextField from '../../Atoms/StyledTextField/StyledTextField';
import TeacherCreateAnswer from '../TeacherCreateAnswer/TeacherCreateAnswer';
import { Container } from './TeacherCreateQuestion-style';

type TeacherCreateQuestionProps = {};

const TeacherCreateQuestion: React.FC<TeacherCreateQuestionProps> = () => {
  const questionInitialState: QuizQuestions = { question: '', answers: [] };
  const [question, setQuestion] = useState(questionInitialState);
  const [component, addComponent] = useState<any>([]);
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(() => {
      return { ...question, [e.target.name]: e.target.value };
    });
  };
  const addComponentOnClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    addComponent(
      component.concat(<TeacherCreateAnswer key={component.length} />)
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
          value: question.question,
          name: 'question',
          placeholder: 'Dlaczego... ?',
          label: 'Wprowadź pytanie'
        }}
      />
      <TeacherCreateAnswer />
      {component}
      <button onClick={addComponentOnClick}>Dodaj kolejną odpowiedź</button>
      {/* <button onClick={removeComponentOnClick}>Usuń odpowiedź</button> */}
    </Container>
  );
};

export default TeacherCreateQuestion;
