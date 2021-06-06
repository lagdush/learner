import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editQuizQuestion } from '../../../../store/reducer';

type EditQuizQuestionProps = {
  editContent: string;
  setEdit: (value: React.SetStateAction<boolean>) => void;
  mainId: number;
};
const EditQuizQuestion: React.FC<EditQuizQuestionProps> = ({
  editContent,
  setEdit,
  mainId
}) => {
  const [editQuestion, setEditQuestion] = useState<string>();
  const dispatch = useDispatch();
  const editQuizContent = (mainId: number) => {
    const idPayload = { mainId, content: editQuestion };
    dispatch({ type: editQuizQuestion.type, payload: idPayload });
    //@ts-ignore
    setEdit();
  };
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditQuestion(() => e.target.value);
  };
  return (
    <>
      <TextField
        fullWidth
        value={editQuestion}
        defaultValue={editContent}
        onChange={inputHandler}
      />
      <Button
        variant="outlined"
        style={{ margin: '1rem' }}
        onClick={() => editQuizContent(mainId)}
      >
        Aktualizuj pytanie
      </Button>
    </>
  );
};

export default EditQuizQuestion;
