import styled from 'styled-components';
import { ReactComponent as Illustration } from '../../../assets/illustrations/loginPage/Saly-38robot.svg';

export const Image = styled(Illustration)`
  position: relative;
  width: 50vw;
  height: 90vh;
  grid-column: 3/5;
  grid-row: 1/-1;
  place-self: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
