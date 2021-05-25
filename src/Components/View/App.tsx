import createStore from '../../store/configureStore';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../ThemeProvider/theme';
import Routing from './Routing/Routing';
import GlobalStyles from '../../GlobalStyles/GlobalStyles';
import TeacherCreatePost from '../Organisms/TeacherCreateContent/TeacherCreateContent';
const store = createStore();

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {/* <Routing /> */}
        <TeacherCreatePost />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
