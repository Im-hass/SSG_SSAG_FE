import React from 'react';

function LikeButton() {
  return (
    <div className="mnsditem_btn_like">
      <span className="cmlike _js_cmlike interestIt">
        <button
          type="button"
          className="cmlike_btn _js_cmlike_btn clickable"
          onClick="ssg_ad.adClick(this, {position: 'clip'});"
        >
          <span className="cmlike_ico">
            <i className="cmlike_primary_m" />
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
