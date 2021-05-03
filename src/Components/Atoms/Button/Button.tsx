import React from 'react';

import { Button } from './Button-style';

type ButtonProps = {
  text: string;
  fetch?: React.MouseEventHandler<HTMLButtonElement>;
};

const ActionButton: React.FC<ButtonProps> = ({ text, fetch }) => {
  return <Button onClick={fetch}>{text}</Button>;
};

export default ActionButton;
