/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../store/auth-context';

function PrivateRoute() {
  const authCtx = useContext(AuthContext);
  return authCtx.isLogin() ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
