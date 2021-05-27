import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  addQuestion,
  createQuizSection,
  resetAnswersArray
} from '../../../store/reducer';
import StyledTextField from '../../Atoms/StyledTextField/StyledTextField';
import TeacherCreateAnswer from '../TeacherCreateAnswer/TeacherCreateAnswer';
import { Container } from './TeacherCreateQuestion-style';

type TeacherCreateQuestionProps = {};

const TeacherCreateQuestion: React.FC<TeacherCreateQuestionProps> = () => {
  const dispatch = useDispatch();

  const [question, setQuestion] = useState('');
  const [component, addComponent] = useState<any>([]);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
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
    <>
      <StyledTextField
        inputHandler={inputHandler}
        customization={{
          value: question,
          name: 'question',
          placeholder: 'Dlaczego... ?',
          label: 'Wprowadź pytanie'
        }}
      />
      <TeacherCreateAnswer />
      {component}
      <button onClick={addComponentOnClick}>Dodaj kolejną odpowiedź</button>
      {/* <button onClick={removeComponentOnClick}>Usuń odpowiedź</button> */}
      <Button
        onClick={() => {
          dispatch({ type: addQuestion.type, payload: question });
          dispatch({ type: createQuizSection.type });
          dispatch({ type: resetAnswersArray.type });
        }}
      >
        Dodaj pytanie
      </Button>
    </>
  );
};

export default TeacherCreateQuestion;
