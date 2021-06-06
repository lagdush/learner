import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import { reduxState } from '../../../models/models';
import { AnswerContainer, Container, ListElement } from './ShowQuiz-style';
import EditQuizAnswer from './EditQuizAnswer/EditQuizAnswer';
import EditQuizQuestion from './EditQuizQuestion/EditQuizQuestion';

const editButtonsNames: Readonly<[string, string]> = [
  'Edytuj odpowiedzi',
  'Edytuj pytania'
];

const ShowQuiz: React.FC = () => {
  const [isEdit, setEdit] = useState(true);
  const [isEditQuestion, setEditQuestion] = useState(true);
  const { title } = useSelector((state: reduxState) => state.completeQuiz);
  const quizState = useSelector((state: reduxState) => state.quizSection);

  return (
    <Container>
      <h1>Quiz: {title.title}</h1>
      <div style={{ display: 'flex' }}>
        {editButtonsNames.map((el, id) => {
          return (
            <Button
              key={id}
              style={{ margin: '1rem' }}
              variant="contained"
              onClick={() => setEdit(!isEdit)}
            >
              {el}
            </Button>
          );
        })}
      </div>

      {quizState.questions.map((quiz, mainId) => {
        return (
          <AnswerContainer key={mainId}>
            {isEditQuestion ? (
              <p style={{ textAlign: 'center' }}>
                {quiz.question.toUpperCase()}
              </p>
            ) : (
              <EditQuizQuestion
                editContent={quiz.question}
                setEdit={() => setEditQuestion(!isEditQuestion)}
                mainId={mainId}
              />
            )}
            <ol>
              {quiz.answers.map((answer, id) => (
                <ListElement key={id} isCorrect={answer.isCorrect}>
                  {isEdit ? (
                    answer.text
                  ) : (
                    <EditQuizAnswer
                      editContent={answer.text}
                      setEdit={() => setEdit(!isEdit)}
                      mainId={mainId}
                      id={id}
                    />
                  )}
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
