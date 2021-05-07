import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30vw;
  height: 50vh;
  background: ${(props) => props.theme.backgroundColor};
  box-shadow: ${(props) => props.theme.boxShadow};
  border-radius: 25px;
  margin-top: 2rem;
  @media (max-width: 1024px) {
    width: 70vw;
    grid-column: 1/3;
    justify-self: center;
  }
`;

export const LoaderBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

