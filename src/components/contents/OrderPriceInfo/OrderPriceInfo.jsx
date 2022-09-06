import React from 'react';

function OrderPriceInfo(props) {
  const { totalProductPrice, totalSalePrice, deliveryFee, totalPrice } = props;

  return (
    <article className="mnodr_article fullOrdArea" style={{ display: 'block' }}>
      <div className="mnodr_article_head">
        <div className="mnodr_article_headlt">
          <h2 className="mnodr_tx_tit" style={{ fontWeight: 'bold' }}>
            결제 예정금액
          </h2>
        </div>
      </div>
      <div className="mnodr_article_cont ty_pull">
        <div className="mnodr_form_sec">
          <dl className="mnodr_priceitem ty_narrow">
            <dt>
              <span className="mnodr_priceitem_stit">주문금액</span>
            </dt>
            <dd>
              <span className="mnodr_tx_primary">
                +{' '}
                <em className="ssg_price dispTotPayOrdAmt">
                  {totalProductPrice.toLocaleString()}
                </em>
                <span className="ssg_tx">원</span>
              </span>
            </dd>
          </dl>
          <dl className="mnodr_priceitem ty_narrow">
            <dt>
              <span className="mnodr_priceitem_stit">할인금액</span>
            </dt>
            <dd>
              <span className="mnodr_tx_point">
                -{' '}
                <em className="ssg_price dispTotDcAmt">
                  {' '}
                  {totalSalePrice.toLocaleString()}
                </em>
                <span className="ssg_tx">원</span>
              </span>
            </dd>
          </dl>
          <ul className="mnodr_paydetail_sublst dispTotDcAmtDtl">
            <li className="dispTotDcAmtWithoutCrdDcArea">
              <span className="mnodr_paydetail_tx">상품할인</span>
              <span className="mnodr_paydetail_money">
                -
                <em className="ssg_price dispTotDcAmtWithoutCrdDc">
                  {' '}
                  {totalSalePrice.toLocaleString()}
                </em>
                <span className="ssg_tx">원</span>
              </span>
            </li>
          </ul>
          <dl className="mnodr_priceitem ty_narrow">
            <dt>
              <span className="mnodr_priceitem_stit">배송비</span>
            </dt>
            <dd>
              <span className="mnodr_tx_primary">
                +
                <em className="ssg_price paySummaryTotOrdCstAmt">
                  {deliveryFee.toLocaleString()}
                </em>
                <span className="ssg_tx">원</span>
              </span>
            </dd>
          </dl>
          <ul
            className="mnodr_paydetail_sublst paySummaryTotOrdCstDtl"
            style={{ display: 'block' }}
          >
            <li>
              <span className="mnodr_paydetail_tx">배송비</span>
              <span className="mnodr_paydetail_money">
                +
                <em className="ssg_price paySummaryOrdCstAmt">
                  {' '}
                  {deliveryFee.toLocaleString()}
                </em>
                <span className="ssg_tx">원</span>
              </span>
            </li>
          </ul>
          <dl className="mnodr_priceitem ty_total">
            <dt>
              <strong
                className="mnodr_priceitem_stit"
                style={{ fontWeight: 'bold' }}
              >
                총 결제예정금액
              </strong>
            </dt>
            <dd>
              <strong className="mnodr_tx_primary mnodr_priceitem_total v2">
                +
                <em className="ssg_price paySummaryPayAmt paySummaryTgtPaymtAmt">
                  {(totalPrice + deliveryFee).toLocaleString()}
                </em>
                <span className="ssg_tx">원</span>
              </strong>
            </dd>
          </dl>
        </div>
      </div>
    </article>
  );
}

export default OrderPriceInfo;
