import React from 'react';
import { Footer } from '../components/common';
import {
  DestinationTit,
  DestinationTabList,
  DestinationNoData,
  DestinationBanner,
} from '../components/contents';

import { MobileHeader } from '../components/ui';

function DestinationPage() {
  return (
    <>
      <a href="#m_container" className="skip_navi">
        본문 바로가기
      </a>

      <div id="m_wrap" className="mcom_wrap ssg">
        <div id="m_container" className="mcom_container" data-iframe-height="">
          <MobileHeader title="배송지 관리" />

          <div id="m_content">
            <div className="myodr_addrwrap">
              <DestinationTit />

              <div className="myodr_tab">
                <DestinationTabList />

                <div className="myodr_tab_cont">
                  <div className="myodr_tab_panel" role="tabpanel">
                    <DestinationNoData />
                  </div>

                  <DestinationBanner />
                </div>
              </div>
            </div>
          </div>

          <Footer pageName="destination" />
        </div>
      </div>
    </>
  );
}

export default DestinationPage;
