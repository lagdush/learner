import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
            <Route>
              <StudentView />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
