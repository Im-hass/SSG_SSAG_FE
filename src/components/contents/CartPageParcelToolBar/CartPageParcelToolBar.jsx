import React from 'react';
import './CartPageParcelToolBar.scss';
import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';

function CartPageParcelToolBar({ cartData }) {
  const netPrice = cartData.totalAmount;
  const overItems = cartData.storeList.filter((store) => {
    const eachStoreTotal = store.storeAmount;
    return eachStoreTotal <= 30000;
  }).length;
  const deliveryFee = 3000 * overItems;
  const totalPrice = netPrice + deliveryFee;

  /* 주문 페이지로 넘기는 데이터입니다. */
  const passedData = {
    data: cartData,
    delivery: deliveryFee,
  };

  const navigate = useNavigate();
  const handlePassData = () => {
    if (!cartData.storeList[0]) {
      toast.error('장바구니에 상품이 없습니다.');
      return;
    }
    navigate('/order', { state: passedData });
  };

  return (
    <div className="mnodr_toolbar2">
      <div className="mnodr_toolbar_ctn">
        <div className="mnodr_toolbar_cont">
          <p className="mnodr_tx_desc" id="bar_price">
            <span className="mnodr_cnt">전체상품 1개 </span>
            <span className="ssg_tx" id="toolbarCst">
              {netPrice.toLocaleString()}원 + 배송비{' '}
              {deliveryFee.toLocaleString()}원 =
            </span>
            <span className="mnodr_tx_total">
              <span className="ssg_tx" id="toolbarTotCst">
                {' '}
                {totalPrice.toLocaleString()}원
              </span>
            </span>
          </p>
          <p
            id="dmndDisplay"
            className="mnodr_tx_desc mnodr_tx_point"
            style={{ display: 'block' }}
          >
            <Link
              to="/cart"
              className="mnodr_tx_link2 layer_filter cartTracking"
            >
              청구할인 혜택보기
              <i className="icon ty_xs icon_chevron_right" aria-hidden="true" />
            </Link>
          </p>
        </div>
      </div>
      <div className="mnodr_btn_area">
        <button
          type="button"
          className="mnodr_btn ty_line ty_m cartTracking"
          id="mnodr_btn_gift2"
        >
          <i className="icon ty_md icon_gift" aria-hidden="true" />
          <span className="mnodr_txt_gift">선물하기</span>
        </button>
        <button
          type="button"
          className="mnodr_btn ty_point ty_m cartTracking"
          name="btOrdCheckbox"
          onClick={handlePassData}
        >
          <span className="mnodr_btn_tx">주문하기</span>
        </button>
      </div>
    </div>
  );
}

export default CartPageParcelToolBar;
