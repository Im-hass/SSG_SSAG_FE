import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainPage, NotFoundPage } from '../pages';
import Toolbar from './toolbar/ToolList/ToolList';

const App = () => (
  <div>
    <h1>메인 페이지</h1>
    <Routes>
      <Route exact path="/" component={MainPage} />
      <Route component={NotFoundPage} />
    </Routes>

    <Toolbar />
  </div>
);

export default App;
