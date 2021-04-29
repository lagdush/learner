import styled from 'styled-components';

export const Button = styled.button`
margin: 2em;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: .8em;
width: 13.3em;
height: 3em;
background: #30B0F8;
box-shadow: 9px 4px 17px 4px rgba(0,0,0,0.21);
border: none;
color: #fff;
font-size: 20px;
font-family: Merriweather Sans;
cursor: pointer;
transition: .3s linear;
&:hover {
   border-radius: 26.5px;
}
`;
