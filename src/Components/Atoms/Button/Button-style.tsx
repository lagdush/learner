import styled from 'styled-components';
import { animated } from 'react-spring';
export const Button = styled(animated.button)`
  margin: 2em;
  width: 50%;
  padding: 0.4em;
  text-align: center;
  background: ${(props) => props.theme.navColor};
  box-shadow: ${(props) => props.theme.boxShadow};
  border: none;
  color: ${(props) => props.theme.fontColor};
  font-size: 0.5em;
  font-family: Merriweather Sans;
  cursor: pointer;
`;
