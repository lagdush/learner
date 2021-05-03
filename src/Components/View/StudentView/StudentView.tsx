import React from 'react';
import { studentNavigationTexts } from '../../helpers/studentNavigationTexts/studentNavigationTexts';
import { StudentImage } from '../../Templates/IllustrationStudentTemplate/IllustrationStudentTemplate-style';
import NavigationTemplate from '../../Templates/NavigationTemplate';

import { Container, StudentContentBox } from './StudentView-style';

type StudentViewProps = {};

const StudentView: React.FC<StudentViewProps> = () => {
  return (
    <Container>
      <NavigationTemplate createNavigation={studentNavigationTexts} />
      <StudentContentBox />
      <StudentImage />
    </Container>
  );
};

export default StudentView;
