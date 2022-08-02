import React from 'react';
import './MainContents.scss';

function MainContents() {
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
        {/* 메인 콘텐츠 */}
        <div
          id="m_content"
          className="react-area"
          data-globalid="홈"
          data-areaid="ad_list"
        >
          <div className="cmgrid_module">
            <div className="cmgrid_list" data-equal-height="false">
              <div className="cmgrid_full_box">(왜 있는지 모르겠지만 있음)</div>
              <div className="cmgrid_full_box">명품, 패션, 뷰티</div>
              <div
                className="cmgrid_full_box js-set-header"
                data-page-set-Id="106"
              >
                Happy Lounge 헤더
              </div>
              <div
                className="cmgrid_full_box cmitem_ty_deal v2 "
                data-page-set-id="112"
                data-has-next="false"
              >
                Happy Lounge 바디
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContents;
