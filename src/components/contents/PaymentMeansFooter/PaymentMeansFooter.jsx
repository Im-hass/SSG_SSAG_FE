import React from 'react';
import './PaymentMeansFooter.scss';

function PaymentMeansFooter() {
  return (
    <div id="mcom_footer">
      <div className="mcom_footer mcom_footer_order mcom_footer_order_v2">
        <div className="mcom_mall_wrap v2">
          <div className="mcom_noti_wrap">
            <p className="mcom_noti_txt">
              ㈜에스에스지닷컴에서 판매되는 상품 중에는 개별 판매자가 판매하는
              오픈마켓 상품이 포함되어 있습니다.
            </p>
            <p className="mcom_noti_txt">
              오픈마켓 상품의 경우, ㈜에스에스지닷컴은 통신판매중개자로서 거래
              당사자가 아니며, 입점 판매사가 등록한 상품정보 및 거래 등에 대해
              책임을 지지 않습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentMeansFooter;
