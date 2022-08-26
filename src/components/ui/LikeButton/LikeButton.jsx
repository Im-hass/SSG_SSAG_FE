import React from 'react';

function LikeButton({ wishDto }) {
  return (
    <div className="mnsditem_btn_like">
      <span className="cmlike _js_cmlike interestIt">
        <button
          type="button"
          className="cmlike_btn _js_cmlike_btn clickable"
          // onClick="ssg_ad.adClick(this, {position: 'clip'});"
        >
          <span className="cmlike_ico">
            <i
              className="cmlike_primary_m"
              // style={{
              //   backgroundImage: `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M12 21.4l-8.3-9.2c-.8-1-1.3-2.2-1.3-3.5 0-2.8 2.3-5 5-5 1.9 0 3.6 1.1 4.6 2.8.8-1.7 2.5-2.8 4.6-2.8 2.8 0 5 2.3 5 5 0 1.3-.5 2.5-1.3 3.4L12 21.4z' fill='%23ff3e3e' stroke-width='0' stroke='%23ff3e3e'/%3E%3C/svg%3E")`,
              // }}
            />
            <span className="sr_off">
              <span className="blind">관심상품 취소</span>
            </span>
            <span className="sr_on">
              <span className="blind">관심상품 등록</span>
            </span>
          </span>
        </button>
      </span>
    </div>
  );
}

export default LikeButton;
