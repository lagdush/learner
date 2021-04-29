import React from 'react';
import ActionButton from '../../Atoms/Button/Button';
import Input from '../../Atoms/Input';

import { Box} from './LoginBox-style'

interface ContentBoxProps {

}

const LoginBox: React.FC<ContentBoxProps> = () => {

   return (
   <Box>
      <Input label='Podaj swój kod dostępu'/>
      <ActionButton text='Zaloguj się'/>
   </Box>
   )
   }


   export default LoginBox