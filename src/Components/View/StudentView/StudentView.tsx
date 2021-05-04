import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { studentNavigationTexts } from '../../helpers/studentNavigationTexts/studentNavigationTexts';

import { reduxState } from '../../Molecules/LoginBox/models';
import { StudentImage } from '../../Templates/IllustrationStudentTemplate/IllustrationStudentTemplate-style';
import NavigationTemplate from '../../Templates/NavigationTemplate/NavigationTemplate';
import {
  Container,
  ContentInnerGrid,
  Post,
  StudentContentBox
} from './StudentView-style';

type StudentViewProps = {};

const StudentView: React.FC<StudentViewProps> = () => {
  const { user } = useSelector(
    (state: reduxState) => state.dataFromApiForStudents
  );

  return user ? (
    <Container>
      <NavigationTemplate createNavigation={studentNavigationTexts} />

      <StudentContentBox>
        <ContentInnerGrid>
          {user.posts.map((post) => (
            <Post src={post.photo} />
          ))}
        </ContentInnerGrid>
      </StudentContentBox>

      <StudentImage />
    </Container>
  ) : (
    <Redirect to="/login" />
  );
};

export default StudentView;
