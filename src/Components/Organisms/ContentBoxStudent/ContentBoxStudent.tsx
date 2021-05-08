import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useLocation } from 'react-router';
import { useSpring } from 'react-spring';
import useModal from '../../../hooks/useModal';
import { fetchedPosts, reduxState } from '../../Molecules/LoginBox/models';
import ModalPostContent from '../ModalPostContent/ModalPostContent';
import {
  ContentInnerGrid,
  Post,
  PostTitle,
  StudentContentBox,
  Wrapper
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
  const style = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 }
  });

  const titleStyle = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
  });

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
          <Wrapper key={post._id}>
            <Post
              style={style}
              src={post.photo}
              onClick={() => contentCreator(post._id)}
            />
            <PostTitle style={titleStyle}>{post.title}</PostTitle>
          </Wrapper>
        ))}
      </ContentInnerGrid>
      {isOpen ? (
        <ModalPostContent
          rawContent={modalContent!}
          handleClose={handleCloseModal}
        />
      ) : null}
    </StudentContentBox>
  ) : (
    <Redirect to="/login" exact />
  );
};

export default ContentBoxStudent;
