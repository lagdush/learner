import styled from 'styled-components';
import { IsCorrect } from '../../../models/models';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AnswerContainer = styled.div`
  margin: 1rem;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const ListElement = styled.li<IsCorrect>`
  text-decoration: ${(props) =>
    props.isCorrect === 'Answer is correct' && 'underline'};
`;
