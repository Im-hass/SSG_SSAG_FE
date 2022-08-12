import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainPage, NotFoundPage, RecentShoppingPage, CartPage } from '../pages';
import {
  SignUpPage,
  SignUpAuthPage,
  SignUpFormPage,
  SignUpAgreementPage,
} from '../pages/SignUp/index';
import { Login, WithdrawMember } from './contents/index';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/category" element={<h1>카테고리</h1>} />
        <Route path="/search" element={<h1>검색</h1>} />
        <Route path="/my" element={<h1>마이 페이지</h1>} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signup/auth" element={<SignUpAuthPage />} />
        <Route path="/signup/agreement" element={<SignUpAgreementPage />} />
        <Route path="/signup/form" element={<SignUpFormPage />} />
        <Route path="/historyList" element={<RecentShoppingPage />} />
        <Route path="/withdrawMember" element={<WithdrawMember />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
