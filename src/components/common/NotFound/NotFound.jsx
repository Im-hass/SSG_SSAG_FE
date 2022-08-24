import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import './NotFound.scss';

function NotFound() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    let setTimeInt = 5;

    let setTimer = null;

    function reDirect() {
      if (setTimeInt <= 0) {
        handleBack();
        clearInterval(setTimer);
      } else {
        document.getElementById('goToSecond').innerHTML = setTimeInt;
        setTimeInt -= 1;
      }
    }

    setTimer = setInterval(() => {
      reDirect();
    }, 1000);
  }, []);

  return (
    <div id="m_content" style={{ position: 'static', width: 'auto' }}>
      <div className="ssgerr_bx_wrap ty2">
        <div className="ssgerr_bx ty2">
          <p className="ssgerr_tit ty2">
            주소가 잘못 입력되었거나, 변경 혹은 삭제되어 요청하신 페이지를 찾을
            수 없습니다.
          </p>
          <p className="ssgerr_txt">
            <em id="goToSecond">2</em>초 후에 메인으로 자동 이동합니다.
          </p>
          <button type="button" className="ssgerr_lnk" onClick={handleBack}>
            이전페이지 돌아가기
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
