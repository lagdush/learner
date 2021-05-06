import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useLocation } from 'react-router';
import useModal from '../../../hooks/useModal';
import { fetchedPosts, reduxState } from '../../Molecules/LoginBox/models';
import Modal from '../Modal/Modal';
import {
  ContentInnerGrid,
  Post,
  StudentContentBox
} from './ContentBoxStudent-style';

type ContentBoxStudentProps = {};

const ContentBoxStudent: React.FC<ContentBoxStudentProps> = () => {
  const { isOpen, handleCloseModal, handleOpenModal } = useModal();
  const [modalContent, setModalContent] = useState<fetchedPosts>();
  const { user } = useSelector(
    (state: reduxState) => state.dataFromApiForStudents
  );
  const [title, setTitle] = useState<string>();
  const { pathname } = useLocation();

  useEffect(() => {
    switch (pathname) {
      case '/student/knowledge':
        setTitle('Baza wiedzy');
        break;
      case '/student/quizzes':
        setTitle('Quizy');
        break;
      case '/student/news':
        setTitle('Aktualności');
        break;
      default:
        setTitle('Aktualności');
    }
  }, [pathname]);

  const contentCreator = (id: string) => {
    handleOpenModal();
    const index = user.posts.findIndex((el) => el._id === id);
    setModalContent(user.posts[index]);
  };

  return user ? (
    <StudentContentBox>
      <h3>{title}</h3>
      <ContentInnerGrid>
        {user.posts.map((post) => (
          <Post
            key={post._id}
            src={post.photo}
            onClick={() => contentCreator(post._id)}
          />
        ))}
      </ContentInnerGrid>
      {isOpen ? (
        <Modal rawContent={modalContent!} handleClose={handleCloseModal} />
      ) : null}
    </StudentContentBox>
  ) : (
    <Redirect to="/login" exact />
  );
};

export default ContentBoxStudent;
