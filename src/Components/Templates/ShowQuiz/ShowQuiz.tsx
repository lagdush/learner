import React from 'react';
import { useSelector } from 'react-redux';
import { reduxState } from '../../../models/models';
import { AnswerContainer, Container, ListElement } from './ShowQuiz-style';

type ShowQuizProps = {};

const ShowQuiz: React.FC<ShowQuizProps> = () => {
  const { title, questions } = useSelector(
    (state: reduxState) => state.completeQuiz
  );

  return (
    <Container>
      <h1>Quiz: {title.title}</h1>
      {questions.flat().map((quiz, id) => {
        return (
          <AnswerContainer key={id}>
            <p style={{ textAlign: 'center' }}>{quiz.question.toUpperCase()}</p>{' '}
            <ol>
              {quiz.answers.map((answer) => (
                <ListElement isCorrect={answer.isCorrect}>
                  {answer.text} --{' '}
                  {answer.isCorrect === true
                    ? 'Poprawna odpowiedź'
                    : 'Błedna Odpowiedź'}
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
