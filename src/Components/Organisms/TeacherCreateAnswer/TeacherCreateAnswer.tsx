import {
  Tooltip,
  IconButton,
  FormControlLabel,
  makeStyles,
  Radio,
  RadioGroup
} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
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
    padding: '1rem'
  },
  label: {
    fontSize: '.7rem'
  }
});

const TeacherCreateAnswer: React.FC<TeacherCreateAnswerProps> = () => {
  const answersInitialState: QuizAnswers = { text: '', isCorrect: false };
  const [answers, setAnswers] = useState(answersInitialState);
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
  const createQuestion = () => {
    dispatch({ type: addAnswer.type, payload: answers });
    setAnswers(answersInitialState);
  };
  return (
    <Container>
      <StyledTextField
        inputHandler={inputHandler}
        customization={{
          value: answers.text,
          name: 'text',
          placeholder: 'Odpowiedź na pytanie',
          label: 'Wpisz odpowiedź'
        }}
      />
      <RadioGroup
        style={{ gridRow: '2/3', gridColumn: '1/-1' }}
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
      <Tooltip title="Dodaj odpowiedź">
        <IconButton
          style={{ gridColumn: '2/3', gridRow: '1/2' }}
          onClick={createQuestion}
          aria-label="add question"
          color="primary"
        >
          <AddCircleIcon />
        </IconButton>
      </Tooltip>
    </Container>
  );
};

export default TeacherCreateAnswer;
