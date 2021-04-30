import React from 'react';

import {Button} from './Button-style'

type style = {
   margin?: string;
   fontSize?: string;
   padding?: string;
   width?: string;
   height?: string;
}

interface ButtonProps {
text: string,
style?: style
}

const ActionButton: React.FC<ButtonProps> = ({text, style}) => {

   return (
   <Button style={style}>{text}</Button>
   )
   }


   export default ActionButton