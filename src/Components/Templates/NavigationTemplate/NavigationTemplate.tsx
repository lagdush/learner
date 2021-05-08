import React from 'react';
import Header from '../../Atoms/Header/Header';
import { useDispatch } from 'react-redux';
import { logout } from '../../../store/reducer';
import {
  Container,
  StyledNavLink,
  StyledNavLinkHover
} from './NavigationTemplate-style';

interface NavigationTemplateProps {
  createNavigation: { name: string; route: string }[];
}

const NavigationTemplate: React.FC<NavigationTemplateProps> = ({
  createNavigation
}) => {
  const dispatch = useDispatch();
  //napisz hooka na hamburgera
  return (
    <Container>
      <StyledNavLink exact to="/">
        <Header />
      </StyledNavLink>
      {createNavigation.map((textes) => {
        return (
          <StyledNavLinkHover key={textes.route} to={textes.route}>
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
