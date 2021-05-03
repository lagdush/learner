import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30vw;
  height: 50vh;
  background: #ffffff;
  box-shadow: ${(props) => props.theme.boxShadow};
  border-radius: 25px;

  @media (max-width: 1024px) {
    width: 70vw;
    grid-column: 1/3;
    justify-self: center;
  }
`;
