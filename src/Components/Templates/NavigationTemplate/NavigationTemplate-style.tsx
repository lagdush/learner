import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
grid-column: 1/3;
background-color: rgb(255, 255, 255);
padding: .2em;
`;

export const StyledNavLink = styled(NavLink)`
   font-size: .5em;
   text-decoration: none;
   cursor: pointer;
 `;