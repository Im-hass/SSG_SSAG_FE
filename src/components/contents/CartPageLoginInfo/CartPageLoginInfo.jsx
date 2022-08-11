import React from 'react';
import { useRecoilState } from 'recoil';
import { isLoginState } from '../../../recoil/isLoginState';
import { isItemsState } from '../../../recoil/isItemsState';
import { CartPageLogin, CartPageNotLogin, CartPageTab } from '../index';
import './CartPageLoginInfo.scss';

function CartPageLoginInfo() {
  const [isLogin] = useRecoilState(isLoginState);
  const [isItems] = useRecoilState(isItemsState);

  return (
    <>
      {isLogin && isItems && <CartPageTab />}
      <div className="mnodr_info">
        {isLogin && isItems && <CartPageLogin />}
        {!isLogin && isItems && <CartPageNotLogin />}
      </div>
    </>
  );
}

export default CartPageLoginInfo;
