import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, TextField } from '@material-ui/core';
import { reduxState } from '../../../models/models';
import { AnswerContainer, Container, ListElement } from './ShowQuiz-style';
import { editAnswer, editQuizQuestion } from '../../../store/reducer';

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
  const [editQuestion, setEditQuestion] = useState<string>();
  const dispatch = useDispatch();
  const editQuizContent = (mainId: number, id: number) => {
    const idPayload = { mainId, id, content: editQuestion };
    dispatch({ type: editAnswer.type, payload: idPayload });
    //@ts-ignore
    setEdit();
  };
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditQuestion(() => e.target.value);
  };
  return (
    <>
      <TextField
        value={editQuestion}
        defaultValue={editContent}
        onChange={inputHandler}
      />
      <Button onClick={() => editQuizContent(mainId, id)}>Zatwierdź</Button>
    </>
  );
};

//////////////////////
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
        value={editQuestion}
        defaultValue={editContent}
        onChange={inputHandler}
      />
      <Button onClick={() => editQuizContent(mainId)}>Zatwierdź</Button>
    </>
  );
};
///////////////////

const ShowQuiz: React.FC = () => {
  const [isEdit, setEdit] = useState(true);

  const { title } = useSelector((state: reduxState) => state.completeQuiz);
  const quizState = useSelector((state: reduxState) => state.quizSection);

  return (
    <Container>
      <h1>Quiz: {title.title}</h1>{' '}
      <Button onClick={() => setEdit(false)}>Edytuj</Button>
      {quizState.questions.map((quiz, mainId) => {
        return isEdit ? (
          <AnswerContainer key={mainId}>
            <p style={{ textAlign: 'center' }}>{quiz.question.toUpperCase()}</p>{' '}
            <ol>
              {quiz.answers.map((answer, id) => (
                <ListElement key={id} isCorrect={answer.isCorrect}>
                  {answer.text} --{' '}
                  {answer.isCorrect === true
                    ? 'Poprawna odpowiedź'
                    : 'Błedna Odpowiedź'}
                </ListElement>
              ))}
            </ol>
          </AnswerContainer>
        ) : (
          <AnswerContainer key={mainId}>
            <EditQuizQuestion
              editContent={quiz.question}
              setEdit={() => setEdit(!isEdit)}
              mainId={mainId}
            />
            <ol>
              {quiz.answers.map((answer, id) => (
                <ListElement key={id} isCorrect={answer.isCorrect}>
                  <EditQuizAnswer
                    editContent={answer.text}
                    setEdit={() => setEdit(!isEdit)}
                    mainId={mainId}
                    id={id}
                  />
                </ListElement>
              ))}
            </ol>
          </AnswerContainer>
        );
      })}
    </Container>
  );
};

export default ShowQuiz;
