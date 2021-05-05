import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { reduxState } from '../../Molecules/LoginBox/models';
import {
  ContentInnerGrid,
  Post,
  StudentContentBox
} from './ContentBoxStudent-style';

type ContentBoxStudentProps = {};

const ContentBoxStudent: React.FC<ContentBoxStudentProps> = () => {
  const { user } = useSelector(
    (state: reduxState) => state.dataFromApiForStudents
  );
  return user ? (
    <StudentContentBox>
      <ContentInnerGrid>
        {user.posts.map((post) => (
          <Post key={post._id} src={post.photo} />
        ))}
      </ContentInnerGrid>
    </StudentContentBox>
  ) : (
    <Redirect to="login" />
  );
};

export default ContentBoxStudent;
