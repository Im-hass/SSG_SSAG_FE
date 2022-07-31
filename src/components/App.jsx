import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainPage, NotFoundPage } from '../pages';
import { ToolbarList } from './toolbar/ToolbarList';

const App = () => (
  <div>
    <h1>메인 페이지</h1>
    <Routes>
      <Route exact path="/" component={MainPage} />
      <Route component={NotFoundPage} />
    </Routes>

    <ToolbarList />
  </div>
);

export default App;
