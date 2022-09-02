import React from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { confirmAlert } from 'react-confirm-alert';
import { CustomAlert } from '../../common';
import './CartPageParcelContentUnitUtil.scss';

function CartPageParcelContentUnitUtil({ cartItem, isDelete, setIsDelete }) {
  const cartItemId = cartItem.cartId;

  const onDeleteCartItem = () => {
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
        toast.success('상품을 삭제했습니다.');
        setIsDelete(!isDelete);
      })
      .catch((err) => {
        console.log('cart del err', err);
        toast.error('상품을 삭제하지 못했습니다');
      });
  };

  const handleDeleteCartItem = () => {
    confirmAlert({
      // eslint-disable-next-line react/no-unstable-nested-components
      customUI: ({ onClose }) => (
        <CustomAlert
          title="장바구니 아이템 삭제"
          desc="아이템을 삭제하시겠습니까?"
          btnTitle="삭제"
          id={cartItemId}
          onAction={onDeleteCartItem}
          onClose={onClose}
        />
      ),
    });
  };

  return (
    <div className="mnodr_unit_util">
      <Toaster
        containerStyle={{
          top: 30,
        }}
        toastOptions={{
          success: {
            iconTheme: {
              primary: '#ff5b59',
            },
          },
        }}
      />
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
