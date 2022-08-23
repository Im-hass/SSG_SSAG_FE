import React from "react";

function ShareBtn() {
  return (
    <div className="mcom_ly_wrap mcom_ly_share react-area">
      <div className="mcom_ly_inr">
        <h2 className="mcom_ly_tit">SNS 공유</h2>
        <div className="mcom_ly_cont">
          <ul className="cm_sns">
            <li>
              <a
                href="javascript:void(0)"
                onClick="kakaoTalk_new('[\uC2E0\uC138\uACC4\uBAB0]', '\uB860\uB514 01(BR)','https://sitem.ssgcdn.com/66/75/14/item/1000310147566_i1_250.jpg', 'https://m-shinsegaemall.ssg.com/item/itemView.ssg?itemId=1000310147566&amp;siteNo=6004&amp;salestrNo=6005', '')"
                className="kakao"
                title="카카오톡"
                target="_parent"
              >
                <span className="blind">카카오톡</span>
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                onClick="facebook_share_new('\uB860\uB514 01(BR)','[\uC2E0\uC138\uACC4\uBAB0]','https://sitem.ssgcdn.com/66/75/14/item/1000310147566_i1_250.jpg','','https://m-shinsegaemall.ssg.com/item/itemView.ssg?itemId=1000310147566&amp;siteNo=6004&amp;salestrNo=6005','')"
                className="facebook"
                title="페이스북"
                target="_parent"
              >
                <span className="blind">페이스북</span>
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                onClick="twitter_share_new('[\uC2E0\uC138\uACC4\uBAB0]','\uB860\uB514 01(BR)','','https://m-shinsegaemall.ssg.com/item/itemView.ssg?itemId=1000310147566&amp;siteNo=6004&amp;salestrNo=6005','')"
                className="twitter"
                title="트위터"
                target="_parent"
              >
                <span className="blind">트위터</span>
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                onClick="smsShare('\uB860\uB514 01(BR)','[\uC2E0\uC138\uACC4\uBAB0]','https://sitem.ssgcdn.com/66/75/14/item/1000310147566_i1_250.jpg','https://m-shinsegaemall.ssg.com/item/itemView.ssg?itemId=1000310147566&amp;siteNo=6004&amp;salestrNo=6005','')"
                className="sms"
                title="SMS"
                target="_parent"
              >
                <span className="blind">SMS 발송</span>
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                onClick="snsUrl_new('\uB860\uB514 01(BR)','[\uC2E0\uC138\uACC4\uBAB0]','https://sitem.ssgcdn.com/66/75/14/item/1000310147566_i1_250.jpg','https://m-shinsegaemall.ssg.com/item/itemView.ssg?itemId=1000310147566&amp;siteNo=6004&amp;salestrNo=6005','', this);"
                className="url"
                title="URL복사"
                target="_parent"
              >
                <span className="blind">URL복사</span>
              </a>
            </li>
          </ul>
          <p className="cm_url_tip url_show">
            아래의 URL을 전체선택하여 복사하세요
          </p>
          <div className="cm_url_txt url_show">
            <input type="text" value="" />
          </div>
        </div>
        <a href="#" className="modal-close-btn" target="">
          <span className="blind">닫기</span>
        </a>
      </div>
    </div>
  );
}

export default ShareBtn;
