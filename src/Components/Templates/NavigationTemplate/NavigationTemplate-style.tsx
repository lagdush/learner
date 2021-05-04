import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  height: 12vh;
  padding-bottom: .2em;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  grid-column: 1/3;
`;

export const StyledNavLink = styled(NavLink).attrs({
  activeStyle: {
    color: '#30B0F8'
  }
})`
  padding: 0.6em;
  font-size: 0.3em;
  text-decoration: none;
  cursor: pointer;
  color: ${(props) => props.theme.navColor};
  border-radius: 15px;
  transition: 0.5s;
  &:not(a:first-child):hover {
    box-shadow: ${(props) => props.theme.hoverBoxShadow};
  }
`;
