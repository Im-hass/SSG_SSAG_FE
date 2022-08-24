import React from 'react';

function ProductInfo() {
  return (
    <div
      className="mndtl_sec mndtl_info_wrap"
      data-react-tarea-cd="00006_000000012"
    >
      <div className="mndtl_info_item">
        <div className="mndtl_info_card">
          <dl className="mndtl_info_dl mndtl_toggle">
            <dt>카드혜택가</dt>
            <dd>
              <button
                type="button"
                className="mndtl_card_btnmore mndtl_toggle_btn"
              >
                <span className="mndtl_info_price">
                  <em className="ssg_price">60,563</em>
                  <span className="ssg_tx">원</span>
                </span>
                <i className="mndtl_ic mndtl_ic_toggle">
                  <span className="blind">
                    <span className="sr_off">카드혜택가 펼치기</span>
                    <span className="sr_on">카드혜택가 접기</span>
                  </span>
                </i>
              </button>
              <div className="mndtl_card_cont mndtl_toggle_cont">
                <dl className="mndtl_info_dl mndtl_toggle">
                  <dt>
                    <span className="mndtl_card_name">
                      트레이더스삼성, 삼성, 신세계삼성, 이마트삼성카드
                    </span>
                    , 행사
                    <a href="/" className="mndtl_txt_btn modal-layer-open">
                      더보기
                    </a>
                  </dt>
                  <dd>
                    <span className="mndtl_info_desc">
                      SSG PAY 7만원 이상 결제 시 60,563원
                    </span>
                  </dd>
                </dl>
                <dl className="mndtl_info_dl mndtl_toggle">
                  <dt>
                    <span className="mndtl_card_name">SSG.COM 삼성카드</span>,
                    행사
                    <a href="/" className="mndtl_txt_btn modal-layer-open">
                      더보기
                    </a>
                  </dt>
                  <dd>
                    <span className="mndtl_info_desc">
                      SSG PAY 7만원 이상 결제 시 60,563원
                    </span>
                    <a
                      href="//m.ssg.com/event/eventDetail.ssg?promId=1100575267"
                      className="mndtl_info_btn"
                      target="_parent"
                    >
                      <span className="mndtl_info_tx">
                        SSG MONEY 1% 적립 + 4% 추가 적립
                      </span>
                      <i className="mndtl_ic_arr" />
                    </a>
                  </dd>
                </dl>
              </div>
            </dd>
          </dl>
        </div>
        <div className="mndtl_info_installment">
          <dl className="mndtl_info_dl">
            <dt>무이자 할부</dt>
            <dd>
              <a
                href="/mitem/mItemCardBenefit.ssg?itemId=1000304287202&amp;siteNo=6004&amp;_mpop=new"
                className="mndtl_txt_btn"
                target="_parent"
              >
                카드사별 무이자 혜택
              </a>
            </dd>
          </dl>
        </div>
        <div className="mndtl_info_delivery">
          <dl className="mndtl_info_dl">
            <dt>배송정보</dt>

            <dd>
              <em className="mndtl_info_tit"> 택배배송</em>
              <span className="mndtl_info_parcel">
                우체국택배
                <a
                  href="/"
                  className="mndtl_ic mndtl_ic_qmark_new16 modal-layer-open"
                >
                  <span className="blind">택배사 정보 안내 팝업</span>
                </a>
              </span>
              <span className="mndtl_info_desc">
                8/26(금)도착 예정
                <a
                  href="/"
                  className="mndtl_ic mndtl_ic_qmark_new16 modal-layer-open"
                >
                  <span className="blind">배송기간 안내 팝업</span>
                </a>
                <br />
                배송비 무료 (5만원 이상 무료)
              </span>
            </dd>
          </dl>
        </div>
        <div className="mndtl_info_note" />
      </div>

      <div id="item_usell_div" />
    </div>
  );
}

export default ProductInfo;
