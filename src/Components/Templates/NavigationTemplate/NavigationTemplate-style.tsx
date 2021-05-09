import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled(animated.div)`
  position: fixed;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  grid-column: 1/2;
  background-color: ${(props) => props.theme.backgroundColor};
  @media (max-width: 1024px) {
    position: absolute;
    top: 0;
    left: 0;
    height: auto;
    min-height: 100%;
    width: 100%;
    z-index: 1;
    border: 2px solid black;
  }
`;

export const StyledNavLink = styled(NavLink).attrs({
  activeStyle: {
    color: '#F2EA7E'
  }
})`
  padding: 0.6em;
  font-size: 0.5rem;
  text-decoration: none;
  cursor: pointer;
  color: ${(props) => props.theme.navColor};
  background-color: inherit;
  @media (max-width: 1024px) {
    padding: 0.6em;
    font-size: 1em;
  }
`;

export const StyledNavLinkHover = styled(StyledNavLink).attrs({
  activeStyle: {
    color: '#f2ea7e',
    textShadow: 'black 1px 1px 1px'
  }
})`
  position: relative;
  transition: 0.3s ease-in-out;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #edf5e1;
    transition: 0.3s ease-in;
    z-index: -1;
  }
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    right: 0;
    background-color: #0a6ccf;
    transition: 0.3s ease-in;
    z-index: -1;
  }
  &:hover {
    background-color: transparent;
    color: ${(props) => props.theme.fontColor};
    &:after {
      top: -10%;
      left: -5%;
    }
    &:before {
      bottom: -10%;
      right: -5%;
    }
  }
  @media (max-width: 1024px) {
    padding: 0.6em;
    font-size: 1em;
  }
`;
