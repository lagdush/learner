import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Tooltip } from '@material-ui/core';
import { reduxState } from '../../../models/models';
import {
  addQuestion,
  createQuizSection,
  resetAnswersArray
} from '../../../store/reducer';
import StyledTextField from '../../Atoms/StyledTextField/StyledTextField';
import TeacherCreateAnswer from '../TeacherCreateAnswer/TeacherCreateAnswer';

type TeacherCreateQuestionProps = {};

const TeacherCreateQuestion: React.FC<TeacherCreateQuestionProps> = () => {
  const dispatch = useDispatch();
  const hasAnswers = useSelector(
    (state: reduxState) => state.quizQuestion.answers
  );
  const [hasCorrectAnswers, setHasCorrectAnswers] = useState<boolean>();
  const [question, setQuestion] = useState('');
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  };

  useEffect(() => {
    setHasCorrectAnswers(() => hasAnswers.some((el) => el.isCorrect === true));
  }, [hasAnswers]);

  const confirmQuestionSection = () => {
    dispatch({ type: addQuestion.type, payload: question });
    dispatch({ type: createQuizSection.type });
    dispatch({ type: resetAnswersArray.type });
    setQuestion('');
  };

  //   TODO: napraw usuwanie elementów
  // TODO: MOdal do zatwierdzenia pytania
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
      {hasAnswers.length === 0 || hasCorrectAnswers === false ? (
        <Tooltip
          title="By odblokować dodaj przynajmniej jedną poprawną odpowiedź"
          arrow
        >
          <span>
            <Button color="primary" variant="contained" disabled>
              Dodaj odpowiedź by odblokować
            </Button>
          </span>
        </Tooltip>
      ) : (
        <Button
          color="primary"
          variant="contained"
          onClick={confirmQuestionSection}
        >
          Zatwierdź pytanie
        </Button>
      )}
    </>
  );
};

export default TeacherCreateQuestion;
