/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
  isLogin: false,
  onLogout() {},
  onLogin() {},
});

export function AuthContextProvider(props) {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLogin');

    if (storedUserLoggedInInformation === '1') {
      setIsLogin(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem('isLogin');
    localStorage.removeItem('token');
    setIsLogin(false);
  };

  const loginHandler = () => {
    localStorage.setItem('isLogin', '1');
    setIsLogin(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLogin,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
