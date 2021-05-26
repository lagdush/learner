import React from 'react';
import Header from '../../Atoms/Header/Header';
import { useDispatch } from 'react-redux';
import { logout } from '../../../store/httpReducer';
import {
  Container,
  StyledNavLink,
  StyledNavLinkHover
} from './NavigationTemplate-style';
import { SpringValue } from 'react-spring';

interface NavigationTemplateProps {
  createNavigation: { name: string; route: string }[];
  showMenu?: () => void;
  style?: {
    opacity: SpringValue<number>;
    transform: SpringValue<string>;
  };
}

const NavigationTemplate: React.FC<NavigationTemplateProps> = ({
  createNavigation,
  showMenu,
  style
}) => {
  const dispatch = useDispatch();

  return (
    <Container style={style}>
      <StyledNavLink exact to="/">
        <Header />
      </StyledNavLink>
      {createNavigation.map((textes) => {
        return (
          <StyledNavLinkHover
            onClick={showMenu}
            key={textes.route}
            to={textes.route}
          >
            {textes.name}
          </StyledNavLinkHover>
        );
      })}
      <StyledNavLinkHover exact to="/login" onClick={() => dispatch(logout())}>
        Wyloguj się
      </StyledNavLinkHover>
    </Container>
  );
};

export default NavigationTemplate;
