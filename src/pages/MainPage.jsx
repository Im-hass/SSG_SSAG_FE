import React from 'react';
import { useRecoilState } from 'recoil';
import { ToolbarList } from '../components/toolbar/ToolbarList';
import { Header, Footer } from '../components/common';
import Home from './Home/Home';
import { isOpenState } from '../store/states';

function MainPage() {
  const [isOpen] = useRecoilState(isOpenState);
  return (
    <div id="m_wrap" className="mcom_wrap sm_v3 sm_page_main has_smhero_banner">
      <div className="header-wrap">
        <Header />
        <div className="header-height" />
      </div>
      {!isOpen && (
        <>
          <Home />
          <ToolbarList />
          <Footer pageName="main" />
        </>
      )}
    </div>
  );
}

export default MainPage;
