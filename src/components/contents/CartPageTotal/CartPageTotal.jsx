import React from 'react';
import './CartPageTotal.scss';

function CartPageTotal() {
  return (
    <div className="mnodr_total" id="cartInformation">
      <div className="mnodr_form_sec">
        <h3 className="mnodr_form_tit">
          <strong>결제 예정금액</strong>
        </h3>
        <dl className="mnodr_priceitem ty_narrow">
          <dt>
            <span className="mnodr_priceitem_stit">주문금액</span>
          </dt>
          <dd>
            <span className="mnodr_tx_primary">
              +<em className="ssg_price viewAmt_sellprc">23,000</em>
              <span className="ssg_tx">원</span>
            </span>
          </dd>
        </dl>
        <dl className="mnodr_priceitem ty_narrow">
          <dt>
            <span className="mnodr_priceitem_stit">상품할인</span>
          </dt>
          <dd>
            <span className="mnodr_tx_primary">
              -<em className="ssg_price viewAmt_dcprc">2,300</em>
              <span className="ssg_tx">원</span>
            </span>
          </dd>
        </dl>
        <dl className="mnodr_priceitem ty_narrow">
          <dt>
            <span className="mnodr_priceitem_stit">배송비</span>
          </dt>
          <dd>
            <span className="mnodr_tx_primary">
              +<em className="ssg_price viewAmt_shppcst">3,000</em>
              <span className="ssg_tx">원</span>
            </span>
          </dd>
        </dl>
        <dl className="mnodr_priceitem ty_total">
          <dt>
            <span className="mnodr_tx_point mnodr_priceitem_stit">
              총 결제예정금액
            </span>
          </dt>
          <dd>
            <span className="mnodr_priceitem_total">
              <em className="ssg_price viewAmt_paymt">23,700</em>
              <span className="ssg_tx">원</span>
            </span>
          </dd>
        </dl>
      </div>
    </div>
  );
}

export default CartPageTotal;
