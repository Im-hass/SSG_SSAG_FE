import React from 'react';
import { ToolbarList } from '../components/toolbar/ToolbarList';
import { Header, Footer } from '../components/common/index';

function MainPage() {
  return (
    <div>
      <Header />
      MainPage
      <ToolbarList />
      <Footer pageName="main" />
    </div>
  );
}

export default MainPage;
