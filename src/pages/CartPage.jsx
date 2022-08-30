import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { isCntPut } from '../recoil/states';
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
  CartPageParcelHeader,
  CartPageOptionModal,
} from '../components/contents';
import { MobileHeader, CartPageBtn } from '../components/ui';
import AuthContext from '../store/auth-context';

function CartPage() {
  const ctx = useContext(AuthContext);
  const [isCnt] = useRecoilState(isCntPut);
  const [cartData, setCartData] = useState(null);
  const [isDelete, setIsDelete] = useState(false);
  const [isChange, setIsChange] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataId, setDataId] = useState(null);
  const [cartId, setCartId] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const headers = {
      headers: {
        // Authorization: JSON.parse(token),
        Authorization:
          'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2NjExNTkxMjgsImV4cCI6MTY2Mjk3MzUyOH0.p8eB4KLaH9nZpoAkF29nlDt55FLDNh_h7_hPvpxua0M',
      },
    };
    axios
      .get('http://13.209.26.150:9000/users/carts', headers)
      .then((res) => {
        console.log('cart page res:', res);
        const data = res.data.result;
        setCartData(data);
      })
      .catch((err) => console.log('cart page error:', err));
  }, [isDelete, isChange, isCnt]);

  if (isLoading) return <div>로딩 중</div>;
  if (!cartData) return <div>데이터 없음</div>;

  return (
    <div
      id="m_wrap"
      className="reveal-left-wrap reveal-right-wrap mcom_wrap sticky_mnodr_acdo ssg scr_up v3"
    >
      <MobileHeader title="장바구니" />
      {isModalOpen && (
        <CartPageOptionModal
          setIsModalOpen={setIsModalOpen}
          dataId={dataId}
          cartId={cartId}
          isChange={isChange}
          setIsChange={setIsChange}
        />
      )}
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
                  <CartPageParcel
                    cartData={cartData}
                    isDelete={isDelete}
                    setIsDelete={setIsDelete}
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    setDataId={setDataId}
                    setCartId={setCartId}
                  />
                </div>
              </div>
              <div className="mnodr_thickhr" />

              <CartPageTotal
                data={cartData}
                isChange={isChange}
                isDelete={isDelete}
                isCnt={isCnt}
              />

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
