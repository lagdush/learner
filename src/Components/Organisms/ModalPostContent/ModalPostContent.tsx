import React from 'react';
import { useSpring } from 'react-spring';
import { Button } from '../../Atoms/Button/Button-style';
import { fetchedPosts } from '../../Molecules/LoginBox/models';
import Modal from '../Modal/Modal';
import {
  ModalHeader,
  ModalImage,
  ModalContent
} from './ModalPostContent-style';

type ModalPostContentProps = {
  rawContent: fetchedPosts;
  handleClose?: any;
};

const ModalPostContent: React.FC<ModalPostContentProps> = ({
  rawContent,
  handleClose
}) => {
  const modalStyle = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 300 }
  });
  return (
    <Modal modalStyle={modalStyle}>
      <ModalHeader>{rawContent.title}</ModalHeader>
      <ModalImage src={rawContent.photo} />
      <ModalContent>{rawContent.content}</ModalContent>
      <Button onClick={handleClose}>Zamknij</Button>
    </Modal>
  );
};

export default ModalPostContent;
