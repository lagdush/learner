import styled from 'styled-components';
import { animated } from 'react-spring';
export const ModalContainer = styled(animated.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: justify;
  transform: translate(-40%, -50%);
  /* width: 100vw; */
  /* height: 100vh; */
  min-width: 300px;
  max-width: 70vw;
  min-height: 300px;
  max-height: 80vh;
  overflow-y: auto;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.fontColor};
  box-shadow: ${(props) => props.theme.boxShadow};
  border-radius: ${(props) => props.theme.borderRadius};
  border: 10px solid black;
`;
