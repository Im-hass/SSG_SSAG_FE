import React from 'react';

function CartPageSaleInfoModal({
  saleInfoItem,
  isSaleInfoModalOpen,
  setIsSaleInfoModalOpen,
}) {
  const defaultPrice = !saleInfoItem ? 0 : saleInfoItem.cartTotal;
  const salePrice = !saleInfoItem ? 0 : saleInfoItem.cartSale;
  const discountedPrice = !saleInfoItem ? 0 : saleInfoItem.cartAmount;

  const handleCloseSaleInfoModal = () => {
    setIsSaleInfoModalOpen('');
  };

  return (
    <div
      className={`mnodr_modal ty_alert ${isSaleInfoModalOpen}`}
      role="dialog"
      tabIndex="-1"
      id="_layerDiscountInfo_5146502157"
      style={{ height: '2943px' }}
    >
      <div
        className="mnodr_modal_wrap"
        role="document"
        style={{ left: '28px', right: '27px', top: '303px' }}
      >
        <div className="mnodr_modal_cont">
          <h3 className="mnodr_modal_tit">할인내역 정보</h3>
          <dl className="mnodr_priceitem ty_narrow">
            <dt>
              <span className="mnodr_priceitem_stit">판매가</span>
            </dt>
            <dd>
              <strong className="mnodr_tx_primary">
                <em className="ssg_price itemSellprc">
                  {defaultPrice && defaultPrice.toLocaleString()}
                </em>
                <span className="ssg_tx">원</span>
              </strong>
            </dd>
          </dl>

          <div className="prom_list">
            <dl className="mnodr_priceitem ty_narrow">
              <dt>
                <span className="mnodr_priceitem_stit"> 상품즉시할인</span>
              </dt>
              <dd>
                <strong className="mnodr_tx_point">
                  <em className="ssg_price">
                    {salePrice && `- ${salePrice.toLocaleString()}`}
                  </em>
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
                <em className="ssg_price itemOrdAmt">
                  {discountedPrice && discountedPrice.toLocaleString()}
                </em>
                <span className="ssg_tx">원</span>
              </strong>
            </dd>
          </dl>
        </div>
        <footer className="mnodr_modal_foot">
          <div className="mnodr_btn_area">
            <button
              type="button"
              className="mnodr_btn ty_gray ty_sm modal-close-btn"
              onClick={handleCloseSaleInfoModal}
            >
              닫기
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default CartPageSaleInfoModal;
