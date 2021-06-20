import { ThemeProvider } from 'styled-components';
import { theme } from '../../ThemeProvider/theme';
import Routing from './Routing/Routing';
import GlobalStyles from '../../GlobalStyles/GlobalStyles';
import TeacherCreatePost from '../Organisms/TeacherCreatePost/TeacherCreatePost';
import TeacherCreateVideoContent from '../Organisms/TeacherCreateVideoContent/TeacherCreateVideoContent';
import TeacherCreateAnswer from '../Organisms/TeacherCreateAnswer/TeacherCreateAnswer';
import TeacherCreateQuestion from '../Organisms/TeacherCreateQuestion/TeacherCreateQuestion';
import TeacherCreateQuiz from '../Organisms/TeacherCreateQuiz/TeacherCreateQuiz';
import ShowQuiz from '../Templates/ShowQuiz/ShowQuiz';


function App() {
  return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {/* <Routing /> */}
        {/* <TeacherCreatePost /> */}
        {/* <TeacherCreateVideoContent /> */}
        {/* <TeacherCreateAnswer /> */}
        {/* <TeacherCreateQuestion /> */}
        <TeacherCreateQuiz />
        <ShowQuiz />
      </ThemeProvider>
  );
}

export default App;
