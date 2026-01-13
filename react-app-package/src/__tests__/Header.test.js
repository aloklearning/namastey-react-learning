import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import appStore from '../redux/appStore';
import Header from '../components/Header';

describe('Header Page', () => {
  /**
   * Jest DOM doesn't access external libraries like react-router-dom, or react-redux
   * We have to explicitly wrap the component with them, so that the test can work
   * in ISOLATION
   *
   * BrowserRouter gives access to Link Element
   * Provided gives access to react-redux hooks and other utilities
   */
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  });

  it('Should render Header with Login buttton', () => {
    const loginButton = screen.getByRole('button', { name: 'Login' });
    expect(loginButton).toBeInTheDocument();
  });

  it('Should render Cart Items text in the header', () => {
    const cartText = screen.getByText(/Cart/);
    expect(cartText).toBeInTheDocument();
  });

  it('Should render Logout when the login button is clicked', () => {
    const loginLogoutButton = screen.getByRole('button');
    expect(loginLogoutButton).toHaveTextContent('Login');

    fireEvent.click(loginLogoutButton);
    expect(loginLogoutButton).toHaveTextContent('Logout');
  });
});
