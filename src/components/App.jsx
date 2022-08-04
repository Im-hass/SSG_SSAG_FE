import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainPage, NotFoundPage } from '../pages';
import { Header, Footer } from './common';

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
