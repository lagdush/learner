import createStore from '../../store/configureStore';
import { Provider } from 'react-redux';
import LoginView from './LoginView';
import './app.css';

const store = createStore();


function App() {
  return (
    <Provider store={store}>
  <LoginView/>
    </Provider>
  );
}

export default App;
