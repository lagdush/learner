import React from 'react';

import {Button} from './Button-style'

interface ButtonProps {
text: string
}

const ActionButton: React.FC<ButtonProps> = ({text}) => {

   return (
   <Button>{text}</Button>
   )
   }


   export default ActionButton