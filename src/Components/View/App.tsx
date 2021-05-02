import { BrowserRouter as Router } from 'react-router-dom';
import createStore from '../../store/configureStore';
import { Provider } from 'react-redux';
import LoginView from './LoginView';
import StudentView from './StudentView';
const store = createStore();


function App() {
  return (
    <Provider store={store}>
      <Router>
          <StudentView/>
      </Router>
    </Provider>
  );
}

export default App;
