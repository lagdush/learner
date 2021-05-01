import styled from 'styled-components';

export const Container = styled.div`
/* margin-top: 2em; */
height: 95vh;
width: 95vw;
display: grid;
grid-row-gap: 5em;
justify-content: center;
align-content: center;
/* justify-items: center; */
/* align-items: space; */
@media (max-width: 768px) {
   width: 100%;
   grid-column: 1/3;
    }
`;
