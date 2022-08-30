import React, { useState } from 'react';
import './CartPageTotal.scss';

function CartPageTotal({ cartData, isChange, isDelete, isCnt }) {
  const defaultPrice = cartData.totalOrder;
  const salePrice = cartData.totalSale;
  const totalPrice = cartData.totalAmount;
  const chargedItems = cartData.storeList.map((stores) =>
    stores.cartList.forEach((cartItem) => {
      const cartItemPrice = cartItem.productOptionDto.productDto.price;
      return cartItemPrice >= 30000;
    }),
  ).length;
  const deliveryFee = 3000 * chargedItems;

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
              +
              <em className="ssg_price viewAmt_sellprc">
                {defaultPrice.toLocaleString()}
              </em>
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
              -
              <em className="ssg_price viewAmt_dcprc">
                {salePrice.toLocaleString()}
              </em>
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
              +
              <em className="ssg_price viewAmt_shppcst">
                {deliveryFee.toLocaleString()}
              </em>
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
              <em className="ssg_price viewAmt_paymt">
                {totalPrice.toLocaleString()}
              </em>
              <span className="ssg_tx">원</span>
            </span>
          </dd>
        </dl>
      </div>
    </div>
  );
}

export default CartPageTotal;
