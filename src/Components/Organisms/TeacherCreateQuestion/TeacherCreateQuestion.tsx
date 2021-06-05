import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  addQuestion,
  createQuizSection,
  resetAnswersArray,
  hasCorrectAnswer
} from '../../../store/reducer';
import StyledTextField from '../../Atoms/StyledTextField/StyledTextField';
import TeacherCreateAnswer from '../TeacherCreateAnswer/TeacherCreateAnswer';

type TeacherCreateQuestionProps = {};

const TeacherCreateQuestion: React.FC<TeacherCreateQuestionProps> = () => {
  const dispatch = useDispatch();

  const [question, setQuestion] = useState('');
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  };

  const confirmQuestionSection = () => {
    dispatch({ type: hasCorrectAnswer.type });
    dispatch({ type: addQuestion.type, payload: question });
    dispatch({ type: createQuizSection.type });
    dispatch({ type: resetAnswersArray.type });
    setQuestion('');
  };

  //   TODO: napraw usuwanie elementów
  // TODO: MOdal do zatwierdzenia pytania
  // TODO: Modal wyświetla treść pytania oraz odpowiedzi, zaznacza odpowiedź prawidłową
  // TODO: Jeżeli odpowiedź nie zawiera poprawnej odpowiedzi modal ma o tym poinformować i uniemozliwić zatwierdzenie pytaniaoraz odpowiedżi
  // TODO: Modal ma mieć dwa przycski: 1) ZAtwierdź i dodaj pytanie, 2) Wróć i popraw

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

      <Button
        color="primary"
        variant="contained"
        onClick={confirmQuestionSection}
      >
        Zatwierdź pytanie
      </Button>
    </>
  );
};

export default TeacherCreateQuestion;
