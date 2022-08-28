/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';

const AuthContext = React.createContext({
  token: '',
  isLogin: false,
  login: (token) => {},
  logout: () => {},
});

export function AuthContextProvider(props) {
  const tokenData = localStorage.getItem('token');

  const [authToken, setAuthToken] = useState(tokenData);

  const userIsLogIn = !!authToken;

  const handleLogout = () => {
    setAuthToken(null);
    localStorage.removeItem('token');
  };

  const handleLogin = (token) => {
    setAuthToken(token);
    localStorage.setItem('token', token);
  };

  const contextValue = {
    token: authToken,
    isLogin: userIsLogIn,
    login: handleLogin,
    logout: handleLogout,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
