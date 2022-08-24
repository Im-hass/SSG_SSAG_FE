import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { MobileHeader } from '../../components/ui/index';

function SignUpDonePage() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleHomeBtnClick = () => {
    navigate('/');
  };

  return (
    <div id="m_container" className="mcom_container">
      <MobileHeader title="신세계포인트 통합회원 가입" />

      <div id="m_content" className="cmem_ct_join">
        <div className="cmem_top2">
          <div className="cmem_join_desc2">
            <p className="cmem_join_desc_tit">{location.state}님 환영합니다!</p>
            <p className="cmem_join_desc_txt">
              신세계포인트 통합회원 가입이 완료되었습니다.
              <br />
              {location.state}님을 위해 준비된 혜택을 쓱- 받아보세요!
            </p>
          </div>
          <div className="cmem_btn_area ty6">
            <button
              type="button"
              className="cmem_btn cmem_btn_blkline4"
              onClick={handleHomeBtnClick}
            >
              쇼핑하러가기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpDonePage;
