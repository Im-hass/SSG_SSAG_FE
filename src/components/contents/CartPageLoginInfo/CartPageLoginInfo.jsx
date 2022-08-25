import React, { useContext } from 'react';

import { useRecoilState } from 'recoil';
import { isItemsState } from '../../../recoil/states';
import AuthContext from '../../../store/auth-context';
import { CartPageLogin, CartPageNotLogin, CartPageTab } from '../index';
import './CartPageLoginInfo.scss';

function CartPageLoginInfo() {
  const ctx = useContext(AuthContext);
  const [isItems] = useRecoilState(isItemsState);

  return (
    <>
      {ctx.isLogin && isItems && <CartPageTab />}
      <div className="mnodr_info">
        {ctx.isLogin && isItems && <CartPageLogin />}
        {!ctx.isLogin && isItems && <CartPageNotLogin />}
      </div>
    </>
  );
}

export default CartPageLoginInfo;
