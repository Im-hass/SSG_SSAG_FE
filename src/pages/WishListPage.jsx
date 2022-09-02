import React from 'react';
import { FloatingContents, Footer } from '../components/common';
import { WishListContent } from '../components/contents/WishListContent';
import { ToolbarList } from '../components/toolbar/ToolbarList';
import { MobileHeader } from '../components/ui';

function WishListPage() {
  return (
    <div id="m_wrap" className="mcom_wrap ssg">
      <div id="m_container" className="mcom_container">
        <MobileHeader title="좋아요" />
        <WishListContent />
        <Footer />
        <ToolbarList />
        <FloatingContents pageName="좋아요" />
      </div>
    </div>
  );
}

export default WishListPage;
