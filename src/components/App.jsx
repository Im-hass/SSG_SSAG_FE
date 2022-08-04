import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainPage, NotFoundPage, RecentShoppingPage } from '../pages';
import { Header, Footer } from './common';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<MainPage />} />
      <Route exact path="/historyList" element={<RecentShoppingPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
