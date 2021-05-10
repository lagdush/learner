import styled from 'styled-components';
import { ReactComponent as Illustration } from '../../../assets/illustrations/loginPage/Saly-38robot.svg';

import { ReactComponent as FormImg } from '../../../assets/illustrations/loginPage/Saly-1rocket.svg';
import { animated } from 'react-spring';

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

export const FormImage = styled(FormImg)`
  width: 100%;
  height: 100%;
  grid-column: 2/-1;
  grid-row: 2/-1;
  place-self: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
