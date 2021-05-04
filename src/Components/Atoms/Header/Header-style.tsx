import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-column: 1/3;
  grid-row: 1/-1;
  justify-self: stretch;
  align-self: start;
`;

export const MainHeader = styled.h1`
  margin: 0;
  font-family: 'Rock Salt', cursive;
  font-style: normal;
  font-weight: normal;
  font-size: 2em;
  letter-spacing: 0.1em;
  color: ${(props) => props.theme.mainColor};
`;

export const SubHeader = styled.h2`
  margin: 0;
  font-family: 'Comfortaa', cursive;
  font-style: italic;
  font-weight: 200;
  font-size: 0.7em;
  letter-spacing: 0.1em;
  color: ${(props) => props.theme.secondaryColor};
`;
