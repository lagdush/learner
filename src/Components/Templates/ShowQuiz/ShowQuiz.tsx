import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import { reduxState } from '../../../models/models';
import { AnswerContainer, Container, ListElement } from './ShowQuiz-style';
import EditQuizAnswer from './EditQuizAnswer/EditQuizAnswer';
import EditQuizQuestion from './EditQuizQuestion/EditQuizQuestion';

const ShowQuiz: React.FC = () => {
  const [isEdit, setEdit] = useState(true);
  const [isEditQuestion, setEditQuestion] = useState(true);
  const { title } = useSelector((state: reduxState) => state.completeQuiz);
  const quizState = useSelector((state: reduxState) => state.quizSection);

  //TODO: Naprawić edycje elementów, muszą się aktualizować niezależnie

  return (
    <Container>
      <h1>Quiz: {title.title}</h1>
      <div style={{ display: 'flex' }}>
        <Button
          style={{ margin: '1rem' }}
          variant="contained"
          onClick={() => setEdit(!isEdit)}
        >
          Edytuj odpowiedzi
        </Button>
        <Button
          style={{ margin: '1rem' }}
          variant="contained"
          onClick={() => setEditQuestion(!isEditQuestion)}
        >
          Edytuj pytania
        </Button>
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
