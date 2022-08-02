import React from 'react';
import { MainContents } from '../components/contents/MainContents';

function MainPage() {
  return (
    <div id="m_wrap" className="mcom_wrap sm_v3 sm_page_main has_smhero_banner">
      <div id="m_container" className="mcom_container" data-iframe-height="">
        {/* 배너 컴포넌트 */}
        <div className="smhero_banner_wrap">배너 컴포넌트</div>
        {/* nav 컴포넌트 */}
        <div id="m_topnav" className="mcom_topnav react-area">
          <h2 className="blind">서비스 매장 바로가기</h2>
          <ul className="topnav_menu" role="navigation">
            <li>홈</li>
            <li>추석</li>
            <li>명품관</li>
          </ul>
        </div>
        <MainContents />
      </div>
    </div>
  );
}

export default MainPage;
