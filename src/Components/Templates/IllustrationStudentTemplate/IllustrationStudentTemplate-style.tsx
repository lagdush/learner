import styled from 'styled-components';
import {ReactComponent as StudentIllustration} from '../../../assets/illustrations/Home Page/Group 4student.svg'


export const Container = styled.div`

`;

export const StudentImage = styled(StudentIllustration)`
width: 25vw;
height: 50vh;
grid-column: 1/2;
grid-row: 2/3;
align-self: center;
justify-self:center;
@media (max-width: 1024px) {
      display: none;
    }

`;
