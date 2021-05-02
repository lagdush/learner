import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
grid-column: 1/3;
grid-row: 1/-1;
justify-self: stretch;
align-self: start;
`;

export const MainHeader = styled.h1`
margin: 0;
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 2em;
letter-spacing: 0.1em;
color: #30B0F8;

`;

export const SubHeader = styled.h2`
margin: 0;
font-family: Poppins;
font-style: italic;
font-weight: 200;
font-size: .7em;
letter-spacing: 0.1em;
color: #FC9E1E;

`;
