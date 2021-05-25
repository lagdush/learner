import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30vw;
  height: 50vh;
  border-radius: 25px;
  margin-top: 2rem;
  @media screen and (max-width: 768px) and (orientation: portrait) {
    width: 70vw;
    height: 30vh;
    grid-column: 1/4;
    justify-self: center;
  }
  @media screen and (max-width: 768px) and (orientation: landscape) {
    height: 40vh;
    width: 70vw;
  }
`;

export const LoaderBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

