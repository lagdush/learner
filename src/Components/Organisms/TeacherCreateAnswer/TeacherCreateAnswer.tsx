import {
  Button,
  FormControlLabel,
  FormLabel,
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
import { createMuiTheme } from '@material-ui/core';

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
  const dispatch = useDispatch();
  const classes = useStyles();

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswers(() => {
      return { ...answers, [e.target.name]: e.target.value };
    });
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

      <Button
        style={{ fontSize: '.7em' }}
        onClick={() => dispatch({ type: addAnswer.type, payload: answers })}
      >
        <AddBoxIcon />
        Zatwierdź odpowiedź
      </Button>
    </Container>
  );
};

export default TeacherCreateAnswer;
