import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainPage, NotFoundPage } from '../pages';
import { Header, Footer } from './common';
import RecentShoppingPage from '../pages/RecentShoppingPage';

function App() {
  return (
    <div>
      <RecentShoppingPage />
    </div>
  );
}

export default App;
