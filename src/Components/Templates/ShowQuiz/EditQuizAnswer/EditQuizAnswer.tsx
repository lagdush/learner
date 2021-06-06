import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { editAnswer } from '../../../../store/reducer';

type EditQuizAnswerProps = {
  editContent: string;
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
  const dispatch = useDispatch();
  const editQuizContent = (mainId: number, id: number) => {
    const idPayload = { mainId, id, content: editQuizAnswer };
    dispatch({ type: editAnswer.type, payload: idPayload });
    //@ts-ignore
    setEdit();
  };
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditQuizAnswer(() => e.target.value);
    console.log(editQuizAnswer);
  };
  return (
    <>
      <TextField
        value={editQuizAnswer}
        defaultValue={editContent}
        onChange={inputHandler}
      />
      <Button onClick={() => editQuizContent(mainId, id)}>
        Aktualizuj odpowiedź
      </Button>
    </>
  );
};

export default EditQuizAnswer;
