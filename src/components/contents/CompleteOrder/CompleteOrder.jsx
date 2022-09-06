import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import MobileHeader from '../../ui/MobileHeader/MobileHeader';

function CompleteOrderAccount() {
  const location = useLocation();

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
              {location.state.name} / <span>{location.state.phone}</span>
            </strong>
            <p className="orderer-address">
              [{location.state.zipCode}] {location.state.streetAddr}
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
                결제금액{' '}
                <span>: {location.state.totalPrice.toLocaleString()}</span>원
              </h3>
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
                  <span>{location.state.totalPrice.toLocaleString()}</span>원
                </strong>
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
