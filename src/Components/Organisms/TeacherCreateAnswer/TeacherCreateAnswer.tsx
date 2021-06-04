import {
  Button,
  FormControlLabel,
  makeStyles,
  Radio,
  RadioGroup
} from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { QuizAnswers } from '../../../models/models';
import { addAnswer } from '../../../store/reducer';
import StyledTextField from '../../Atoms/StyledTextField/StyledTextField';
import { Container } from './TeacherCreateAnswer-style';

type TeacherCreateAnswerProps = {};

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '-2rem',
    padding: '1rem'
  },
  label: {
    fontSize: '.7rem'
  }
});

const TeacherCreateAnswer: React.FC<TeacherCreateAnswerProps> = () => {
  const answersInitialState: QuizAnswers = { text: '', isCorrect: false };
  const [answers, setAnswers] = useState(answersInitialState);
  const [disabledToggle, setDisabledToggle] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let targetValue: string | boolean;
    switch (e.target.value) {
      case 'true':
        targetValue = true;
        break;
      case 'false':
        targetValue = false;
        break;
      default:
        targetValue = e.target.value;
        break;
    }
    setAnswers(() => {
      return { ...answers, [e.target.name]: targetValue };
    });
  };
  const createQuestionButtonHandler = () => {
    setDisabledToggle(true);
    dispatch({ type: addAnswer.type, payload: answers });
  };
  return (
    <Container>
      <StyledTextField
        inputHandler={inputHandler}
        disabled={disabledToggle}
        customization={{
          value: answers.text,
          name: 'text',
          placeholder: 'Odpowiedź na pytanie',
          label: 'Wpisz odpowiedź'
        }}
      />
      {disabledToggle ? (
        <>
          <RadioGroup
            className={classes.root}
            onChange={inputHandler}
            defaultValue="false"
            aria-label="isAnswerCorrect"
            name="isCorrect"
          >
            <FormControlLabel
              classes={{ label: classes.label }}
              value="false"
              name="isCorrect"
              control={<Radio />}
              label="Odpowiedź błędna"
              disabled
            />
            <FormControlLabel
              classes={{ label: classes.label }}
              value="true"
              name="isCorrect"
              control={<Radio />}
              label="Odpowiedź poprawna"
              disabled
            />
          </RadioGroup>
          <Button
            style={{ fontSize: '.7em' }}
            disabled
            onClick={createQuestionButtonHandler}
          >
            <AddBoxIcon />
            Zatwierdź odpowiedź
          </Button>

          <Button
            style={{ fontSize: '.7em' }}
            onClick={() => {
              setDisabledToggle(false);
              setIsEditing(true);
            }}
          >
            Edytuj
          </Button>
        </>
      ) : (
        <>
          <RadioGroup
            className={classes.root}
            onChange={inputHandler}
            defaultValue="false"
            aria-label="isAnswerCorrect"
            name="isCorrect"
          >
            <FormControlLabel
              classes={{ label: classes.label }}
              value="false"
              name="isCorrect"
              control={<Radio />}
              label="Odpowiedź błędna"
            />
            <FormControlLabel
              classes={{ label: classes.label }}
              value="true"
              name="isCorrect"
              control={<Radio />}
              label="Odpowiedź poprawna"
            />
          </RadioGroup>
          {isEditing ? (
            <Button
              style={{ fontSize: '.7em' }}
              onClick={() => console.log('edit')}
            >
              Zatwierdź edycje
            </Button>
          ) : (
            <Button
              style={{ fontSize: '.7em' }}
              onClick={createQuestionButtonHandler}
            >
              <AddBoxIcon />
              Zatwierdź odpowiedź
            </Button>
          )}
        </>
      )}
    </Container>
  );
};

export default TeacherCreateAnswer;
