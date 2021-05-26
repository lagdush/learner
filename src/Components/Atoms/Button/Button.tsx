import React from 'react';
import { useSpring } from 'react-spring';
import { ButtonType } from '../../Organisms/TeacherCreateContent/TeacherCreateContent';
import { Button } from './Button-style';


type ButtonProps = {
  text: string;
  fetch?: React.MouseEventHandler<HTMLButtonElement>;
  type?: ButtonType;
};

const ActionButton: React.FC<ButtonProps> = ({ text, fetch, type }) => {
  const [{ backgroundColor, color, borderRadius }, set] = useSpring(() => ({
    backgroundColor: '#05386b',
    color: '#edf5e1',
    borderRadius: '0px'
  }));
  return (
    <Button
      type={type}
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
