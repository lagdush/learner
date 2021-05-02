import styled from 'styled-components';
import {ReactComponent as Illustration} from '../../../assets/illustrations/loginPage/Groupreading_book_on_chair.svg'

export const Image = styled(Illustration)`
width: 40vw;
height: 50vh;
grid-column: 2/3;
grid-row: 2/3;

@media (max-width: 1024px) {
      display: none;
    }

`;
