import React from 'react';
import Header from '../../Atoms/Header/Header';
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
    </Container>
  );
};

export default NavigationTemplate;
