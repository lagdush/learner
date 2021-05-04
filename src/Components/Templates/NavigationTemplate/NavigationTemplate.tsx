import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../../store/reducer';
import Header from '../../Atoms/Header/Header';

import { Container, StyledNavLink } from './NavigationTemplate-style';

interface NavigationTemplateProps {
  createNavigation: { name: string; route: string }[];
}

const NavigationTemplate: React.FC<NavigationTemplateProps> = ({
  createNavigation
}) => {
  const dispatch = useDispatch();

  return (
    <Container>
      <StyledNavLink exact to="/">
        <Header />
      </StyledNavLink>
      {createNavigation.map((textes) => {
        return (
          <StyledNavLink key={textes.route} to={textes.route}>
            {textes.name}
          </StyledNavLink>
        );
      })}
      <StyledNavLink exact to="/login" onClick={() => dispatch(logout())}>
        Wyloguj się
      </StyledNavLink>
    </Container>
  );
};

export default NavigationTemplate;
