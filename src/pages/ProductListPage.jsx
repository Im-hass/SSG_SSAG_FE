import React from 'react';
import { useRecoilState } from 'recoil';
import { Header, Footer, FloatingContents } from '../components/common';
import { ProductListContent } from '../components/contents';
import ToolbarList from '../components/toolbar/ToolbarList/ToolbarList';
import { isOpenState } from '../store/states';

function ProductListPage() {
  const [isOpen] = useRecoilState(isOpenState);

  return (
    <div id="m_wrap" className="mcom_wrap sm_v3 ">
      <Header />
      {!isOpen && (
        <div id="m_container" className="mcom_container" data-iframe-height="">
          <ProductListContent />
          <FloatingContents />
          <ToolbarList />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default ProductListPage;
