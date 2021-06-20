import React, { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { editAnswer, removeAnswer } from '../../../../store/quizReducer';
import { QuizAnswers } from '../../../../models/models';

type EditQuizAnswerProps = {
  editContent: QuizAnswers;
  setEdit: (value: React.SetStateAction<boolean>) => void;
  mainId: number;
  id: number;
};
const EditQuizAnswer: React.FC<EditQuizAnswerProps> = ({
  editContent,
  setEdit,
  mainId,
  id
}) => {
  const [editQuizAnswer, setEditQuizAnswer] = useState<string>();
  const [editQuizIsCorrect, setQuizIsCorrect] = useState<
    'Answer is incorrect' | 'Answer is correct'
  >('Answer is incorrect');
  const dispatch = useDispatch();

  useEffect(() => {
    setEditQuizAnswer(editContent.text);
    setQuizIsCorrect(editContent.isCorrect);
  }, [editContent]);

  const remove = (mainId: number, id: number) => {
    dispatch({ type: removeAnswer.type, payload: { mainId, id } });
  };
  const editQuizContent = (mainId: number, id: number) => {
    const idPayload = {
      mainId,
      id,
      content: { editQuizAnswer, editQuizIsCorrect }
    };
    dispatch({ type: editAnswer.type, payload: idPayload });
    //@ts-ignore
    setEdit();
  };
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditQuizAnswer(() => e.target.value);
  };
  const radioHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuizIsCorrect(
      () => e.target.value as 'Answer is incorrect' | 'Answer is correct'
    );
  };
  return (
    <>
      <TextField value={editQuizAnswer} onChange={inputHandler} />
      <RadioGroup
        row
        onChange={radioHandler}
        value={editQuizIsCorrect}
        aria-label="isAnswerCorrect"
        name="isCorrect"
      >
        <FormControlLabel
          value="Answer is incorrect"
          name="isCorrect"
          control={<Radio />}
          label="Odpowiedź błędna"
        />
        <FormControlLabel
          value="Answer is correct"
          name="isCorrect"
          control={<Radio />}
          label="Odpowiedź poprawna"
        />
      </RadioGroup>
      <Button
        variant="contained"
        color="primary"
        onClick={() => editQuizContent(mainId, id)}
      >
        Aktualizuj odpowiedź
      </Button>
      <Button variant="contained" onClick={() => remove(mainId, id)}>
        Usuń odpowiedź
      </Button>
    </>
  );
};

export default EditQuizAnswer;
