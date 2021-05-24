import React from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import { studentNavigationTexts } from '../../helpers/studentNavigationTexts/studentNavigationTexts';
import ContentBoxStudent from '../../Organisms/ContentBoxStudent/ContentBoxStudent';
import NavigationTemplate from '../../Templates/NavigationTemplate/NavigationTemplate';
import { Container } from './StudentView-style';
import HamburgerMenuIco from '../../Organisms/HamburgerMenuIco/HamburgerMenuIco';
import { Route } from 'react-router-dom';
import StudentQuestion from '../../Organisms/StudentQuestion/StudentQuestion';

type StudentViewProps = {
  children: React.ReactNode;
};

const StudentViewTemplate: React.FC<StudentViewProps> = ({ children }) => {
  const matches = useMediaQuery('only screen and (max-width: 1024px)');

  return (
    <Container>
      {matches ? (
        <HamburgerMenuIco />
      ) : (
        <NavigationTemplate createNavigation={studentNavigationTexts} />
      )}
      {children}
    </Container>
  );
};

const StudentView: React.FC = () => {
  return (
    <StudentViewTemplate>
      <Route path="/student/news">
        <ContentBoxStudent />
      </Route>
      <Route path="/student/questions">
        <StudentQuestion />
      </Route>
    </StudentViewTemplate>
  );
};

export default StudentView;
