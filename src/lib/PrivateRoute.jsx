import React, { useContext, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import AuthContext from '../store/auth-context';

function PrivateRoute() {
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    if (!authCtx.isLogin) {
      setTimeout(() => {
        toast.error('접근권한이 없습니다.');
      }, 100);
    }
  }, []);

  return (
    <>
      {authCtx.isLogin ? <Outlet /> : <Navigate to="/login" />}
      <Toaster
        containerStyle={{
          top: 30,
        }}
        toastOptions={{
          error: {
            iconTheme: {
              primary: '#ff5b59',
            },
          },
        }}
      />
    </>
  );
}

export default PrivateRoute;
