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
  CartPageParcelHeader,
  CartPageOptionModal,
  CartPageSaleInfoModal,
} from '../components/contents';
import { MobileHeader } from '../components/ui';
import AuthContext from '../store/auth-context';
import { LoadingSpinner } from '../components/common/LoadingSpinner';

function CartPage() {
  const ctx = useContext(AuthContext);
  const [isCnt, setIsCnt] = useState(false);
  const [cartData, setCartData] = useState(null);
  const [isDelete, setIsDelete] = useState(false);
  const [isChange, setIsChange] = useState(false);
  const [isOptionModalOpen, setIsOptionModalOpen] = useState(false);
  const [isSaleInfoModalOpen, setIsSaleInfoModalOpen] = useState('');
  const [isAriaHidden, setIsAriaHidden] = useState(false);
  const [storeIndex, setStoreIndex] = useState(null);
  const [cartIndex, setCartIndex] = useState(null);
  const [productId, setProductId] = useState(null);
  const [cartId, setCartId] = useState(null);
  const [saleInfoItem, setSaleInfoItem] = useState(null);

  const token = localStorage.getItem('token');
  const headers = {
    headers: {
      Authorization: JSON.parse(token),
    },
  };

  useEffect(() => {
    const getCardDataUrl = 'http://54.180.132.155:9000/users/carts';

    axios
      .get(getCardDataUrl, headers)
      .then((res) => {
        setCartData(res.data.result);
      })
      .catch((err) => new Error(err));
  }, [isDelete, isChange, isCnt]);

  if (!cartData) return <LoadingSpinner />;

  return (
    <>
      <div
        id="m_wrap"
        className="reveal-left-wrap reveal-right-wrap mcom_wrap sticky_mnodr_acdo ssg scr_up v3"
        aria-hidden={isAriaHidden}
      >
        <MobileHeader title="장바구니" />
        {isOptionModalOpen && (
          <CartPageOptionModal
            cartData={cartData}
            setIsOptionModalOpen={setIsOptionModalOpen}
            storeIndex={storeIndex}
            cartIndex={cartIndex}
            productId={productId}
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
                      isCnt={isCnt}
                      setIsCnt={setIsCnt}
                      isDelete={isDelete}
                      setIsDelete={setIsDelete}
                      isModalOpen={isOptionModalOpen}
                      setIsOptionModalOpen={setIsOptionModalOpen}
                      setIsSaleInfoModalOpen={setIsSaleInfoModalOpen}
                      isAriaHidden={isAriaHidden}
                      setIsAriaHidden={setIsAriaHidden}
                      setProductId={setProductId}
                      setCartId={setCartId}
                      setSaleInfoItem={setSaleInfoItem}
                      setStoreIndex={setStoreIndex}
                      setCartIndex={setCartIndex}
                    />
                  </div>
                </div>
                <div className="mnodr_thickhr" />

                <CartPageTotal cartData={cartData} />

                <div className="mnodr_thickhr" />
                <div
                  className="mnodr_buyoften v2"
                  id="recommendationCartItem"
                />
                <div className="mnodr_thickhr" />

                <CartPageParcelFootInfo />
              </>
            )}

            <CartPageCartInfo />
          </div>

          {cartData && <CartPageParcelToolBar cartData={cartData} />}

          <CartPageFooter />
        </div>
      </div>
      <CartPageSaleInfoModal
        saleInfoItem={saleInfoItem}
        isSaleInfoModalOpen={isSaleInfoModalOpen}
        setIsSaleInfoModalOpen={setIsSaleInfoModalOpen}
      />
    </>
  );
}

export default CartPage;
