import React from 'react';
import { FloatingContents, Footer } from '../components/common';
import ToolbarList from '../components/toolbar/ToolbarList/ToolbarList';
import { MobileHeader } from '../components/ui';

function MyPage() {
  return (
    <div>
      <MobileHeader title="MY SSG" />
      <h1>마이 페이지</h1>
      <Footer />
      <ToolbarList />
      <FloatingContents />
    </div>
  );
}

export default MyPage;
