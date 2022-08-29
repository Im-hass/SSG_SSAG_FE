import React, { useContext } from 'react';

import { useRecoilState } from 'recoil';
import { isItemsState } from '../../../recoil/states';
import AuthContext from '../../../store/auth-context';
import { CartPageLogin, CartPageNotLogin, CartPageTab } from '../index';
import './CartPageLoginInfo.scss';

function CartPageLoginInfo({ cartData }) {
  const ctx = useContext(AuthContext);
  const [isItems] = useRecoilState(isItemsState);
  console.log(cartData);
  return (
    <>
      {ctx.isLogin && cartData && <CartPageTab />}
      <div className="mnodr_info">
        {ctx.isLogin && cartData && <CartPageLogin />}
        {!ctx.isLogin && cartData && <CartPageNotLogin />}
      </div>
    </>
  );
}

export default CartPageLoginInfo;
