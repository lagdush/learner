import styled from 'styled-components';


export const Box = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 40vw;
height: 50vh;
background: #FFFFFF;
box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.25);

@media (max-width: 768px) {
   width: 100%;
   grid-column: 1/3;
    }
`;




