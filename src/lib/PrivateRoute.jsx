import React, { useContext, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import toast from 'react-hot-toast';
import AuthContext from '../store/auth-context';

function PrivateRoute() {
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    if (!authCtx.isLogin) {
      toast.error('로그인 후 이용 가능한 서비스입니다.');
    }
  }, []);

  return authCtx.isLogin ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
