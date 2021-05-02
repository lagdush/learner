import React from 'react';
import Header from '../../Atoms/Header';
import { Container, StyledNavLink } from './NavigationTemplate-style'

interface NavigationTemplateProps {
createNavigation: { name: string, route: string }[]
}

const NavigationTemplate: React.FC<NavigationTemplateProps> = ({createNavigation}) => {

   return (
   <Container>
      <StyledNavLink to='/'>
         <Header/>
      </StyledNavLink>
      {createNavigation.map((textes)=>{
         return(
            <StyledNavLink key={textes.route} to={textes.route}>
               {textes.name}
            </StyledNavLink>
         )
      })}
   </Container>
   )
   }


   export default NavigationTemplate