import React, { useContext } from 'react';
import AuthContext from '../../../store/auth-context';
import { CartPageLogin, CartPageNotLogin, CartPageTab } from '../index';
import './CartPageLoginInfo.scss';

function CartPageLoginInfo({ cartData }) {
  const ctx = useContext(AuthContext);

  return (
    <>
      {ctx.isLogin && cartData && (
        <CartPageTab dataCount={cartData.storeList.length} />
      )}
      <div className="mnodr_info">
        {ctx.isLogin && cartData && <CartPageLogin />}
        {!ctx.isLogin && cartData && <CartPageNotLogin />}
      </div>
    </>
  );
}

export default CartPageLoginInfo;
