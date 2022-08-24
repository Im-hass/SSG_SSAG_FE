import React, { useContext, useState } from 'react';
import {
  CartPageControl,
  CartPageParcel,
  CartPageFooter,
  CartPageLoginInfo,
  CartPageCartInfo,
  CartPageNoData,
  CartPageNoItems,
  CartPageTotal,
  CartPageParcelFootInfo,
  CartPageParcelToolBar,
} from '../components/contents';
import { MobileHeader, CartPageBtn } from '../components/ui';
import AuthContext from '../store/auth-context';

function CartPage() {
  const ctx = useContext(AuthContext);
  const [isItems, setIsItems] = useState(false);

  const handleItems = () => {
    setIsItems(!isItems);
  };

  return (
    <div
      id="m_wrap"
      className="reveal-left-wrap reveal-right-wrap mcom_wrap sticky_mnodr_acdo ssg scr_up v3"
    >
      <MobileHeader title="장바구니" />

      <div
        id="m_container"
        className="reveal-left-contents reveal-right-contents mcom_container mnodr_container_step ty_headfix"
      >
        <div id="m_content">
          <button type="button" onClick={handleItems}>
            {isItems ? '장바구니 비우기' : '장바구니 추가'}
          </button>

          {!ctx.isLogin && !isItems && <CartPageNoData />}

          <div className="mnodr_info">
            <CartPageLoginInfo />
          </div>

          {ctx.isLogin && !isItems && <CartPageNoItems />}

          {isItems && (
            <>
              <div
                className="mnodr_odrplus"
                id="divAddOrdInfo"
                style={{ display: 'none' }}
              />
              <div className="mnodr_control_wrap">
                <CartPageControl />
                <CartPageParcel />
              </div>
              <div className="mnodr_thickhr" />

              <CartPageTotal />

              <div className="mnodr_thickhr" />
              <div className="mnodr_buyoften v2" id="recommendationCartItem" />
              <div className="mnodr_thickhr" />

              <CartPageParcelFootInfo />
            </>
          )}

          <CartPageCartInfo />
        </div>

        {isItems && (
          <div className="mnodr_toolbar2">
            <CartPageParcelToolBar />
            <CartPageBtn />
          </div>
        )}

        <CartPageFooter />
      </div>
    </div>
  );
}

export default CartPage;
