import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { AuthContextProvider } from './store/auth-context';
import App from './components/App';
import './styles/index.scss';

function Root() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default Root;
