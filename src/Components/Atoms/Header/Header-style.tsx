import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
grid-column: 1/3;
justify-self: stretch;
align-self: center;
`;

export const MainHeader = styled.h1`
margin: 0;
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 3.5em;
letter-spacing: 0.1em;
color: #30B0F8;
@media (min-width: 320px) {
      font-size: 1.5em;
    };
@media (min-width: 360px) {
      font-size: 2.5em;
    };
@media (min-width: 414px) {
      font-size: 3em;
    };
@media (min-width: 600px) {
      font-size: 3.5em;
    }
`;

export const SubHeader = styled.h2`
margin: 0;
font-family: Poppins;
font-style: italic;
font-weight: 200;
font-size: 1.8em;
letter-spacing: 0.1em;
color: #FC9E1E;
@media (min-width: 320px) {
      font-size: .8em;
    };
@media (min-width: 414px) {
      font-size: 1em;
    };
@media (min-width: 600px) {
      font-size: 1.8em;
    }
`;
