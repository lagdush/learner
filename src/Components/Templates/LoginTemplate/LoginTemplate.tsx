import React from 'react';
import Header from '../../Atoms/Header';
import Illustration from '../../Atoms/Illustration';
import LoginBox from '../../Molecules/LoginBox';

import { Container } from './LoginTemplate-style'

interface LoginTemplateProps {

}

const LoginTemplate: React.FC<LoginTemplateProps> = () => {

   return (
   <Container>
      <Header/>
      <Illustration/>
      <LoginBox/>
   </Container>
   )
   }


   export default LoginTemplate