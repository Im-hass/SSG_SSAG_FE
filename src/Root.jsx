import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import './styles/index.scss';

function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default Root;
