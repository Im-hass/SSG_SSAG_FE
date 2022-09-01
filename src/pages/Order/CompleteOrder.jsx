import React from 'react';
import { Link } from 'react-router-dom';
import MobileHeader from '../../components/ui/MobileHeader/MobileHeader';

function CompleteOrderAccount() {
  return (
    <div id="m_content" className="mnodr_order_completed">
      <MobileHeader title="결제완료" />
      <div className="mnodr_section mnodr_section_head">
        <p className="mnodr_section_title">
          <strong>결제가 완료되었습니다.</strong>
        </p>
      </div>

      <hr className="mnodr_border" />

      <div className="mnodr_section">
        <p className="mnodr_section_title">
          <strong>받는분 정보</strong>
        </p>
        <div className="mnodr_section_content">
          <div className="mnodr_orderer_info">
            <strong>
              최민정 / <span>010-8450-1543</span>
            </strong>
            <p className="orderer-address">
              [46930] 부산광역시 사상구 백양대로 879, 105동 1306호 (모라동,
              동원아파트)
            </p>
          </div>
        </div>
      </div>
      <hr className="mnodr_border" />

      <div className="mnodr_section">
        <div className="mnodr_acdo_toggle">
          <div className="mnodr_form_sec">
            <div className="mnodr_acdo_titarea">
              <h3 className="mnodr_tx_tit">
                결제금액 <span>: 32,200</span>원
              </h3>
              <button type="button" className="mnodr_acdo_btn">
                <span className="mnodr_ico_toggle">
                  <i
                    className="icon ty_sm icon_chevron_down"
                    aria-hidden="true"
                  />
                  <span className="blind">
                    <span className="sr_off">결제금액 상세 펼치기</span>
                    <span className="sr_on">결제금액 상세 접기</span>
                  </span>
                </span>
              </button>
            </div>
          </div>
          <div className="mnodr_acdo_cont ty_toggle">
            <div className="mnodr_table">
              <dl className="mnodr_table_row">
                <dt className="mnodr_table_cell">주문금액</dt>
                <dd className="mnodr_table_cell">
                  <span>33,000</span>원
                </dd>
              </dl>

              <dl className="mnodr_table_row">
                <dt className="mnodr_table_cell">결제할인</dt>
                <dd className="mnodr_table_cell">
                  <span>-3,300</span>원
                </dd>
              </dl>

              <dl className="mnodr_table_row">
                <dt className="mnodr_table_cell">배송비</dt>
                <dd className="mnodr_table_cell">
                  <span>+2,500</span>원
                </dd>
              </dl>
            </div>
          </div>
        </div>

        <div className="mnodr_section_content">
          <div className="mnodr_table">
            <dl className="mnodr_table_row mnodr_table_head">
              <dt className="mnodr_table_cell">
                <strong>신용카드</strong>
              </dt>
              <dd className="mnodr_table_cell">
                <strong>
                  <span>32,200</span>원
                </strong>
                <span className="codr_tx_point">(입금대기)</span>
              </dd>
            </dl>
            <dl className="mnodr_table_row">
              <dt className="mnodr_table_cell">신한카드</dt>
              <dd className="mnodr_table_cell">
                <span>08207795397916</span>
              </dd>
            </dl>
          </div>
        </div>
        <div className="mnodr_btn_group">
          <Link
            to="/"
            className="mnodr_btn mnodr_btn_contionus_shopping ty_md"
            style={{ marginTop: '20px' }}
          >
            <span className="mnodr_btn_content">계속 쇼핑하기</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CompleteOrderAccount;
