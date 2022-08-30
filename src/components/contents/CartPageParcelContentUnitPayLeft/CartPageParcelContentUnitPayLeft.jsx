import React, { useEffect } from 'react';
import './CartPageParcelContentUnitPayLeft.scss';

function CartPageParcelContentUnitPayLeft({
  data,
  sellingPrice,
  setSellingPrice,
  totalPrice,
}) {
  const productPrice = data.productOption.product.price;
  const discountRate = data.productOption.product.sale;

  const calculateSellingPrice = () => {
    let calPrice = 0;

    if (discountRate === 0) {
      calPrice = productPrice * 1;
    } else {
      calPrice = (productPrice * (100 - discountRate)) / 100;
    }

    setSellingPrice(calPrice);
  };

  useEffect(() => {
    calculateSellingPrice();
  }, []);

  return (
    <div className="mnodr_unit_l">
      <div className="mnodr_unit_oldprice">
        <del>
          <span className="blind">정상가격</span>
          <em className="ssg_price itemSellprc">
            {productPrice.toLocaleString()}
          </em>
          <span className="ssg_tx">원</span>
        </del>

        <button type="button" className="mnodr_btn_detail modal-alert-open">
          <i className="mnodr_ic ic_detail">
            <span className="blind">자세히 보기</span>
          </i>
        </button>
        <div
          className="mnodr_modal ty_alert"
          role="dialog"
          tabIndex="-1"
          aria-hidden="true"
          id="_layerDiscountInfo_5092900303"
        >
          <div
            className="mnodr_modal_wrap"
            role="document"
            // tabIndex="0"
          >
            <div className="mnodr_modal_cont">
              <h3 className="mnodr_modal_tit">할인내역 정보</h3>
              <dl className="mnodr_priceitem ty_narrow">
                <dt>
                  <span className="mnodr_priceitem_stit">{sellingPrice}</span>
                </dt>
                <dd>
                  <strong className="mnodr_tx_primary">
                    <em className="ssg_price itemSellprc">23,000</em>
                    <span className="ssg_tx">원</span>
                  </strong>
                </dd>
              </dl>

              <div className="prom_list">
                <dl className="mnodr_priceitem ty_narrow">
                  <dt>
                    <span className="mnodr_priceitem_stit">상품즉시할인</span>
                  </dt>
                  <dd>
                    <strong className="mnodr_tx_point">
                      <em className="ssg_price">-2,300</em>
                      <span className="ssg_tx">원</span>
                    </strong>
                  </dd>
                </dl>
              </div>

              <dl className="mnodr_priceitem ty_total">
                <dt>
                  <span className="mnodr_priceitem_stit">최적가</span>
                </dt>
                <dd>
                  <strong className="mnodr_tx_primary">
                    <em className="ssg_price itemOrdAmt">{sellingPrice}</em>
                    <span className="ssg_tx">원</span>
                  </strong>
                </dd>
              </dl>
            </div>
            <footer className="mnodr_modal_foot">
              <div className="mnodr_btn_area">
                <button
                  className="mnodr_btn ty_gray ty_sm modal-close-btn"
                  type="button"
                >
                  닫기
                </button>
              </div>
            </footer>
          </div>
        </div>
      </div>
      <div className="mnodr_unit_newprice">
        <span className="blind">판매가격</span>
        <em className="ssg_price itemOrdAmt">{totalPrice.toLocaleString()}</em>
        <span className="ssg_tx">원</span>
      </div>
    </div>
  );
}

export default CartPageParcelContentUnitPayLeft;
