import React from 'react';
import { useMediaQuery} from '@react-hook/media-query';
import { studentNavigationTexts } from '../../helpers/studentNavigationTexts/studentNavigationTexts';
import ContentBoxStudent from '../../Organisms/ContentBoxStudent/ContentBoxStudent';
import NavigationTemplate from '../../Templates/NavigationTemplate/NavigationTemplate';
import { Container } from './StudentView-style';
import HamburgerMenuIco from '../../Atoms/HamburgerMenuIco/HamburgerMenuIco';

type StudentViewProps = {};

const StudentView: React.FC<StudentViewProps> = () => {
const matches = useMediaQuery('only screen and (max-width: 1024px)');

  return (
    <Container>
      {matches ? <HamburgerMenuIco /> : <NavigationTemplate createNavigation={studentNavigationTexts} />}

      {/* tutaj nawigacja na pozostałe route:id */}
      <ContentBoxStudent />
    </Container>
  );
};

export default StudentView;
