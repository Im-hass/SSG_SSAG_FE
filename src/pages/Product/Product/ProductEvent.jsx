import React from 'react';

function ProductEvent() {
  return (
    <div className="mndtl_sec_bx">
      <div className="mndtl_banner_event">
        <div className="mndtl_event_img">
          <a
            to="http://event.ssg.com/m/eventDetail.ssg?nevntId=1000000001041"
            target="_parent"
          >
            <img
              className="ssg_lazy"
              src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
              alt="메타버쓱 재밌는 보물찾기"
            />
          </a>
        </div>
        {/* 위에꺼 세번 더 반복 총4개인거임 */}
      </div>
    </div>
  );
}

export default ProductEvent;
