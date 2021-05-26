import { render, screen, fireEvent } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../store/reducer';
import LoginView from '../Components/View/LoginView/LoginView';

const mockRender = (
  ui,
  {
    initialState,
    store = createStore(reducer, initialState),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };
  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

describe('LoginView tests', () => {
  it('test LoginView render', () => {
    mockRender(<LoginView />, { dataFromApiStudent: { user: [] } });
    const header = screen.getByText(/Learner/i);
    const buttonText = screen.getByText('Zaloguj się');
    expect(header).toBeInTheDocument();
    expect(buttonText).toBeInTheDocument();
  });
  it('test input handles value change', () => {
    mockRender(<LoginView />, { dataFromApiStudent: { user: [] } });
    const input = screen.getByLabelText('Podaj swój kod dostępu');
    fireEvent.change(input, { target: { value: 'test id' } });
    expect(input).toHaveValue('test id');
    expect(input).not.toHaveValue('test iod');
  });
});
