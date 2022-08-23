import React from 'react';
import { ToolbarList } from '../components/toolbar/ToolbarList';
import { Header, Footer } from '../components/common/index';
import Home from './Home/Home';

function MainPage() {
  return (
    <div>
      <Header />
      <Home />
      <ToolbarList />
      <Footer pageName="main" />
    </div>
  );
}

export default MainPage;
