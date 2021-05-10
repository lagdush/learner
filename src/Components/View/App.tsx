import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import createStore from '../../store/configureStore';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { theme } from '../helpers/ThemeProvider/theme';
import LoginView from './LoginView/LoginView';
import StudentView from './StudentView/StudentView';

const store = createStore();

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Route path="/login" exact>
                <LoginView />
              </Route>
              <Route exact path="/">
                <Redirect to="student/" />
              </Route>
              <Route path="/student/" exact>
                <StudentView />
              </Route>
              <Route path="/student/:id" exact>
                <StudentView />
              </Route>
            </Switch>
          </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
