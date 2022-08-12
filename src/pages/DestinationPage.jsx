import React from 'react';
import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';
import { isDestinationState } from '../recoil/states';
import { Footer } from '../components/common';
import {
  DestinationTit,
  DestinationTabList,
  DestinationNoData,
  DestinationBanner,
  DestinationList,
  DestinationListNewAdd,
  DestinationBtns,
  DestinationListInfo,
} from '../components/contents';
import { MobileHeader } from '../components/ui';

function DestinationPage() {
  const [isDestination, setIsDestination] = useRecoilState(isDestinationState);

  const handleDestination = () => {
    setIsDestination(!isDestination);
  };

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
              {/* 가라 버튼 */}
              <button type="button" onClick={handleDestination}>
                {isDestination ? '배송지 숨기기' : '배송지 보이기'}
              </button>
              <DestinationTit />

              <div className="myodr_tab">
                <DestinationTabList />

                <div className="myodr_tab_cont">
                  <div className="myodr_tab_panel" role="tabpanel">
                    {!isDestination && <DestinationNoData />}
                    {isDestination && (
                      <>
                        <DestinationList />
                        <Link to="/addDestination">
                          <DestinationListNewAdd />
                        </Link>
                        <DestinationBtns />
                        <DestinationListInfo />
                      </>
                    )}
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
