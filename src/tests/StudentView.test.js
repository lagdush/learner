import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../store/reducer';
import StudentView from '../Components/View/StudentView/StudentView';
import { studentNavigationTexts } from '../Components/helpers/studentNavigationTexts/studentNavigationTexts';

const mockRender = (
  ui,
  {
    initialState,
    store = createStore(reducer, initialState),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => {
    return (
      <Router>
        <Provider store={store}>{children}</Provider>
      </Router>
    );
  };
  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

describe('LoginView tests', () => {
  it('test is component render properly', () => {
    mockRender(<StudentView />, { dataFromApiStudent: { user: [] } });
    studentNavigationTexts.map((text) => {
      let navText = screen.getByText(text.name);
      expect(navText).toBeInTheDocument();
    });
    const fakeText = 'testing the test';
    expect(fakeText).not.toContain();
  });
});
