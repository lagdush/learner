import styled from 'styled-components';

type IsCorrect = { isCorrect: boolean };

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
  color: ${(props) => (props.isCorrect ? 'green' : 'red')};
`;
