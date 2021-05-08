import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { SpringValue } from 'react-spring';
import {
  ModalContainer,
} from './Modal-style';

type ModalProps = {
  children: React.ReactNode;
  modalStyle: { opacity: SpringValue<number> };
};
const modalContainer = document.getElementById('modal-container');

const Modal: React.FC<ModalProps> = ({modalStyle, children }) => {
  const modalEl = document.createElement('div');

  useEffect(() => {
    modalContainer?.appendChild(modalEl);

    return () => {
      modalContainer?.removeChild(modalEl);
    };
  }, [modalEl]);
  return ReactDOM.createPortal(
    <ModalContainer style={modalStyle}>{children}</ModalContainer>,
    modalEl
  );
};

export default Modal;
