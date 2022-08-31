import React from 'react';
import './UserBenefit.scss';

function UserBenefit() {
  return (
    <div className="myssg_user_benefit">
      <div className="myssg_coupon_point myssg_layer_conts">
        <div className="myssg_coupon">
          <span className="myssg_link clickable">
            <dl>
              <dt>쿠폰</dt>
              <dd>
                <span className="myssg_benefit_score">0</span>장
              </dd>
            </dl>
          </span>
        </div>

        <div className="myssg_point">
          <span className="myssg_link clickable">
            <dl>
              <dt>신세계포인트</dt>
              <dd>
                <span className="myssg_point_join">통합회원 전환하기</span>
              </dd>
            </dl>
          </span>
        </div>

        <div className="myssg_layer myssg_point_layer">
          <div className="myssg_point_layer_conts">
            <div className="myssg_point_layer_tit">
              <div className="myssg_point_close_wrap">
                <button
                  type="button"
                  className="myssg_layer_close myssg_close_btn"
                >
                  <span className="blind">닫기</span>
                </button>
              </div>
            </div>
            <p className="myssg_point_desc ty_space">
              <span className="myssg_point_desctx">
                신세계백화점과 이마트의 적립혜택을
                <br />
                한번에 누려보세요.
              </span>
              <button type="button" className="myssg_point_btn">
                <span className="myssg_point_btn_tit">
                  신세계포인트 통합회원 전환
                </span>
              </button>
            </p>
          </div>
        </div>
      </div>
      <div className="myssg_ssgmoney v2">
        <div className="myssg_link myssg_ssgmoney_link">
          <dl>
            <dt>
              <span className="myssg_link myssg_ssgmoney_link">SSG MONEY</span>
            </dt>
            <dd>
              <span>
                <span className="myssg_benefit_score">0</span>원
              </span>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default UserBenefit;
