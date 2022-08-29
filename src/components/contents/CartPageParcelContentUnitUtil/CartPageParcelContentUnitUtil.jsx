import React from 'react';
import './CartPageParcelContentUnitUtil.scss';
import axios from 'axios';

function CartPageParcelContentUnitUtil({ data, isDelete, setIsDelete }) {
  const handleDeleteCartItem = () => {
    const cartItemId = +data.cartId;
    const token = localStorage.getItem('token');
    const deleteUrl = `http://13.209.26.150:9000/users/carts/${cartItemId}`;
    const headers = {
      headers: {
        Authorization: JSON.parse(token),
      },
    };

    axios
      .delete(deleteUrl, headers)
      .then((res) => {
        console.log('cart del res:', res);
        setIsDelete(!isDelete);
      })
      .catch((err) => console.log('cart del err', err));
  };

  return (
    <div className="mnodr_unit_util">
      <button
        type="button"
        className="mnodr_unit_pin1 cartTracking"
        name="btKeep"
      >
        <i className="mnodr_ic ic_pin">
          <span className="blind">계속 담아두기</span>
        </i>
      </button>
      <button
        type="button"
        className="mnodr_unit_del cartTracking"
        name="btnDel"
        onClick={handleDeleteCartItem}
      >
        <i className="mnodr_ic ic_del">
          <span className="blind">상품 삭제</span>
        </i>
      </button>
    </div>
  );
}

export default CartPageParcelContentUnitUtil;
