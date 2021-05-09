import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { useSpring } from 'react-spring';
import useModal from '../../../hooks/useModal';
import LocationHeader from '../../Atoms/LocationHeader/LocationHeader';
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

  const style = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 }
  });

  const titleStyle = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
  });



  const contentCreator = (id: string) => {
    handleOpenModal();
    const index = user.posts.findIndex((el) => el._id === id);
    setModalContent(user.posts[index]);
  };

  return user ? (
    <StudentContentBox>
      <LocationHeader />
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
