import React from 'react';
import ActionButton from '../../Atoms/Button/Button';
import Input from '../../Atoms/Input';

import { Box} from './LoginBox-style'

interface ContentBoxProps {

}

const LoginBox: React.FC<ContentBoxProps> = () => {

   return (
   <Box>
      <Input/>
      <ActionButton/>
   </Box>
   )
   }


   export default LoginBox