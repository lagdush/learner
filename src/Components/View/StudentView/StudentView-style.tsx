import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  height: 100vh;
`;

export const StudentContentBox = styled.div`
  width: 55vw;
  height: 75vh;
  background: #ffffff;
  box-shadow: ${(props) => props.theme.boxShadow};
  border-radius: 25px;
  grid-column: 2/3;
  grid-row: 2/3;
  justify-self: center;

  @media (max-width: 1024px) {
    width: 70vw;
    grid-column: 1/3;
    justify-self: center;
  }
`;
