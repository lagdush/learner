import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, TextField } from '@material-ui/core';
import { reduxState } from '../../../models/models';
import { AnswerContainer, Container, ListElement } from './ShowQuiz-style';
import { editAnswer } from '../../../store/reducer';
import StyledTextField from '../../Atoms/StyledTextField/StyledTextField';

type ShowQuizProps = {};

const ShowQuiz: React.FC<ShowQuizProps> = () => {
  const [isEdit, setEdit] = useState(true);
  const [editQuestion, setEditQuestion] = useState<string>();
  const { title } = useSelector((state: reduxState) => state.completeQuiz);
  const quizState = useSelector((state: reduxState) => state.quizSection);
  const dispatch = useDispatch();
  const editContent = (mainId: number, id: number) => {
    const idPayload = { mainId, id, content: editQuestion };
    dispatch({ type: editAnswer.type, payload: idPayload });
    setEdit(!isEdit);
  };
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditQuestion(() => e.target.value);
  };

  return (
    <Container>
      <h1>Quiz: {title.title}</h1>
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
                  <Button onClick={() => setEdit(false)}>Edytuj</Button>
                </ListElement>
              ))}
            </ol>
          </AnswerContainer>
        ) : (
          <AnswerContainer key={mainId}>
            <p style={{ textAlign: 'center' }}>{quiz.question.toUpperCase()}</p>{' '}
            <ol>
              {quiz.answers.map((answer, id) => (
                <ListElement key={id} isCorrect={answer.isCorrect}>
                  <TextField
                    value={editQuestion}
                    defaultValue={answer.text}
                    onChange={inputHandler}
                  />
                  <Button onClick={() => editContent(mainId, id)}>
                    Zatwierdź
                  </Button>
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
