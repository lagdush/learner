import React from 'react';
import { studentNavigationTexts } from '../../helpers/studentNavigationTexts/studentNavigationTexts';
import ContentBoxStudent from '../../Organisms/ContentBoxStudent/ContentBoxStudent';
import NavigationTemplate from '../../Templates/NavigationTemplate/NavigationTemplate';
import SecondaryNavigation from '../../Templates/NavigationTemplate/SecondaryNavigation';
import { Container } from './StudentView-style';

type StudentViewProps = {};

const StudentView: React.FC<StudentViewProps> = () => {
  return (
    <Container>
      <SecondaryNavigation />
      <NavigationTemplate createNavigation={studentNavigationTexts} />
      {/* tutaj nawigacja na pozostałe route:id */}
      <ContentBoxStudent />
    </Container>
  );
};

export default StudentView;
