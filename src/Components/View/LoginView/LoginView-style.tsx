import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(4, minmax(20%, 1fr));
  grid-template-rows: repeat(4, minmax(20%, 1fr));
  justify-content: center;
  align-content: center;
  background-color: ${(props) => props.theme.backgroundColor};
  @media screen and (max-width: 768px) {
    grid-template-columns: none;
  }
`;
export const HeaderGridPlacement = styled.div`
  grid-column: 1/3;
  grid-row: 1/-1;
  place-self: center;
`;
