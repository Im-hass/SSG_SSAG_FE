import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainPage, NotFoundPage } from '../pages';
import { Header, Footer } from './common';
import { ToolbarList } from './toolbar/ToolbarList';

function App() {
  return (
    <div>
      <h1>메인 페이지</h1>
      <Header />

      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route element={<NotFoundPage />} />
      </Routes>

      <ToolbarList />

      <Footer />
    </div>
  );
}

export default App;
