import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Button } from '../../Atoms/Button/Button-style';
import { fetchedPosts } from '../../Molecules/LoginBox/models';
import { ModalContainer, ModalContent, ModalHeader, ModalImage } from './Modal-style';

type ModalProps = {
  rawContent: fetchedPosts;
  handleClose?: any;
};
const modalContainer = document.getElementById('modal-container');

const Modal: React.FC<ModalProps> = ({ rawContent, handleClose }) => {
  const modalEl = document.createElement('div');
  useEffect(() => {
    modalContainer?.appendChild(modalEl);

    return () => {
      modalContainer?.removeChild(modalEl);
    };
  }, [modalEl]);
  return ReactDOM.createPortal(
    <ModalContainer>
      <ModalHeader>{rawContent.title}</ModalHeader>
      <ModalImage src={rawContent.photo} />
      <ModalContent>{rawContent.content}</ModalContent>
      <Button onClick={handleClose}>Zamknij</Button>
    </ModalContainer>,
    modalEl
  );
};

export default Modal;
