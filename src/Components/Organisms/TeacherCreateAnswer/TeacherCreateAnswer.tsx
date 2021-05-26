import {
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup
} from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { QuizAnswers } from '../../../models/models';
import { addAnswer } from '../../../store/reducer';
import StyledTextField from '../../Atoms/StyledTextField/StyledTextField';
import { Container } from './TeacherCreateAnswer-style';

type TeacherCreateAnswerProps = {};

const TeacherCreateAnswer: React.FC<TeacherCreateAnswerProps> = () => {
  const answersInitialState: QuizAnswers = { text: '', isCorrect: false };
  const [answers, setAnswers] = useState(answersInitialState);
  const dispatch = useDispatch();

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswers(() => {
      return { ...answers, [e.target.name]: e.target.value };
    });
    dispatch({ type: addAnswer.type, payload: answers });
  };

  return (
    <>
      <StyledTextField
        inputHandler={inputHandler}
        customization={{
          value: answers.text,
          name: 'text',
          placeholder: 'Odpowiedź na pytanie',
          label: 'Wpisz odpowiedź'
        }}
      />

      <FormLabel component="legend">Czy odpowiedź jest poprawna</FormLabel>
      <RadioGroup
        onChange={inputHandler}
        defaultValue="false"
        aria-label="isAnswerCorrect"
        name="isCorrect"
      >
        <FormControlLabel
          value="false"
          name="isCorrect"
          control={<Radio />}
          label="Odpowiedź błędna"
        />
        <FormControlLabel
          value="true"
          name="isCorrect"
          control={<Radio />}
          label="Odpowiedź poprawna"
        />
      </RadioGroup>
    </>
  );
};

export default TeacherCreateAnswer;
