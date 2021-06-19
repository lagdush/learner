import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { editAnswer, removeAnswer } from '../../../../store/reducer';
import { reduxState } from '../../../../models/models';

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

  const remove = (mainId: number, id: number) => {
    dispatch({ type: removeAnswer.type, payload: { mainId, id } });
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
      <Button onClick={() => remove(mainId, id)}>Usuń odpowiedź</Button>
    </>
  );
};

export default EditQuizAnswer;
