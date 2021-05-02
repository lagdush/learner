import styled from 'styled-components';

export const Container = styled.div`
display: grid;
gap: .5em;
height: 100vh;
`;

export const StudentContentBox = styled.div`
width: 55vw;
height: 75vh;
background: #FFFFFF;
box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.25);
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
