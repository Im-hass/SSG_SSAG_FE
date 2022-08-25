import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import './NotFound.scss';

function NotFound() {
  const navigate = useNavigate();
  const [time, setTime] = useState(5);

  const handleToBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const setTimer = setTimeout(() => {
      if (time < 1) {
        handleToBack();
      } else {
        setTime(time - 1);
      }
    }, 1000);

    return () => {
      clearTimeout(setTimer);
    };
  }, [time]);

  return (
    <div id="m_content" style={{ position: 'static', width: 'auto' }}>
      <div className="ssgerr_bx_wrap ty2">
        <div className="ssgerr_bx ty2">
          <p className="ssgerr_tit ty2">
            주소가 잘못 입력되었거나, 변경 혹은 삭제되어 요청하신 페이지를 찾을
            수 없습니다.
          </p>
          <p className="ssgerr_txt">
            <em id="goToSecond">{time}</em>초 후에 메인으로 자동 이동합니다.
          </p>
          <button type="button" className="ssgerr_lnk" onClick={handleToBack}>
            이전페이지 돌아가기
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
