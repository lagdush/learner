import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
grid-column: 1/3;
justify-self: stretch;
`;

export const MainHeader = styled.h1`
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 3.5em;
letter-spacing: 0.1em;
color: #30B0F8;
`;

export const SubHeader = styled.h2`
font-family: Poppins;
font-style: italic;
font-weight: 200;
font-size: 1.8em;
letter-spacing: 0.1em;
color: #FC9E1E;
position: absolute;
top: 4em;
`;
