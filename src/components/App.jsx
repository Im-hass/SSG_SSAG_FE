import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainPage, NotFoundPage, RecentShoppingPage } from '../pages';
import { Header, Footer } from './common';
import { ToolbarList } from './toolbar/ToolbarList';

function App() {
  return (
    <div>
      <h1>메인 페이지</h1>
      <Header />

      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/category" element={<h1>카테고리</h1>} />
        <Route path="/search" element={<h1>검색</h1>} />
        <Route path="/my" element={<h1>마이 페이지</h1>} />
        <Route path="/login" element={<h1>로그인</h1>} />
        <Route path="/historyList" element={<RecentShoppingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <ToolbarList />
      <Footer />
    </div>
  );
}

export default App;
