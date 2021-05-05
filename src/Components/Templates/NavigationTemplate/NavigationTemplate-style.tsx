import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  grid-column: 1/2;
  background-color: ${(props) => props.theme.backgroundColor};
`;

export const ScndNavigation = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3%;
  padding-right: 2%;
  align-items: center;
  grid-column: 1/3;
  background: ${(props) => props.theme.secondaryBackgroundColor};
  font-weight: 500;
  font-size: 0.8rem;
`;

export const StyledNavLink = styled(NavLink).attrs({
  activeStyle: {
    color: '#F2EA7E'
  }
})`
  padding: 0.6em;
  font-size: 0.5em;
  text-decoration: none;
  cursor: pointer;
  color: ${(props) => props.theme.navColor};
  border-radius: 15px;
  transition: 0.5s;
  &:not(a:first-child):hover {
    box-shadow: ${(props) => props.theme.boxShadow};
  }
`;
