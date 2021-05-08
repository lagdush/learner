import React from 'react';
import { useSpring } from 'react-spring';
import { Button } from './Button-style';

type ButtonProps = {
  text: string;
  fetch?: React.MouseEventHandler<HTMLButtonElement>;
};

const ActionButton: React.FC<ButtonProps> = ({ text, fetch }) => {
  const [{ backgroundColor, color, borderRadius }, set] = useSpring(() => ({
    backgroundColor: '#05386b',
    color: '#edf5e1',
    borderRadius: '0px'
  }));
  return (
    <Button
      style={{ color, backgroundColor, borderRadius }}
      onMouseEnter={() =>
        set({ backgroundColor: '#0A6CCF', color: '#000', borderRadius: '20px' })
      }
      onMouseLeave={() =>
        set({
          backgroundColor: '#05386b',
          color: '#edf5e1',
          borderRadius: '0px'
        })
      }
      onClick={fetch}
    >
      {text}
    </Button>
  );
};

export default ActionButton;
