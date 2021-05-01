import styled from 'styled-components';

export const Button = styled.button`
margin: 2em;
width: 50%;
font-size: 20px;
padding: .8em;
text-align: center;
background: #30B0F8;
box-shadow: 9px 4px 17px 4px rgba(0,0,0,0.21);
border: none;
color: #fff;
font-size: 1.5em;
font-family: Merriweather Sans;
cursor: pointer;
transition: .3s linear;
&:hover {
   border-radius: 26.5px;
}
@media (min-width: 320px) {
   width: 50%;
   font-size: 12px;
   padding: .7em;
    };
@media (min-width: 600px) {
   width: 50%;
   font-size: 20px;
   padding: .8em;
    }
`;
