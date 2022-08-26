import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
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
  CartPageParcelContentSummary,
  CartPageParcelHeader,
} from '../components/contents';
import { MobileHeader, CartPageBtn } from '../components/ui';
import AuthContext from '../store/auth-context';

function CartPage() {
  const ctx = useContext(AuthContext);
  const [cartData, setCartData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isPut, setIsPut] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      setIsLoading(true);
      try {
        const res = await axios.get('http://13.209.26.150:9000/users/carts', {
          headers: {
            Authorization: JSON.parse(token),
          },
        });
        console.log('cart page response:', res);
        setCartData(res.data.result);
      } catch (err) {
        console.log('cart page error:', err);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) return <div>로딩 중</div>;
  if (!cartData) return <div>데이터 없음</div>;

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
          {!ctx.isLogin && !cartData && <CartPageNoData />}

          <div className="mnodr_info">
            <CartPageLoginInfo cartData={cartData} />
          </div>

          {ctx.isLogin && !cartData && <CartPageNoItems />}

          {cartData && (
            <>
              <div
                className="mnodr_odrplus"
                id="divAddOrdInfo"
                style={{ display: 'none' }}
              />
              <div className="mnodr_control_wrap">
                <CartPageControl />
                <div
                  id="_acdo_parcel"
                  name="progress_20"
                  className="mnodr_acdo v2 ty_parcel progress_20 addOrdTab addOrd_"
                >
                  <CartPageParcelHeader />
                  {cartData.map((data, index) => (
                    <CartPageParcel
                      key={data.cartId}
                      data={data}
                      index={index}
                      isPut={isPut}
                      setIsPut={setIsPut}
                    />
                  ))}
                </div>
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

        {cartData && (
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
