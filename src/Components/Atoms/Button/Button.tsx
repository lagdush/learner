import React from 'react';

import {Button} from './Button-style'

type style = {
   margin?: string;
   fontSize?: string;
   padding?: string;
   width?: string;
   height?: string;
}

type ButtonProps = {
text: string,
style?: style,
fetch?: React.MouseEventHandler<HTMLButtonElement>,
}

const ActionButton: React.FC<ButtonProps> = ({text, style, fetch}) => {

   return (
   <Button onClick={fetch} style={style}>{text}</Button>
   )
   }


   export default ActionButton