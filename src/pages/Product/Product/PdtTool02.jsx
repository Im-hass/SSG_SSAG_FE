import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import toast from 'react-hot-toast';
import {
  selectedProductCount,
  productOptionId,
  isHeaderCartCntSubmit,
} from '../../../store/states';

function PdtTool02({ goBuyBtn, handleOpenBtn, productData }) {
  const navigate = useNavigate();

  const [selectedProductOptionId] = useRecoilState(productOptionId);
  const [productCount] = useRecoilState(selectedProductCount);
  const [isHeaderCartCnt, setIsHeaderCartCnt] = useRecoilState(
    isHeaderCartCntSubmit,
  );

  const token = localStorage.getItem('token');
  const headers = {
    headers: {
      Authorization: JSON.parse(token),
    },
  };

  const handleAddCart = () => {
    if (!selectedProductOptionId) {
      toast.error('상품 옵션을 먼저 선택해주세요.');
      return;
    }

    if (!token) {
      toast.error('로그인 후 이용 가능한 서비스입니다.');
      return;
    }

    const data = {
      cartList: [
        {
          productOptionId: selectedProductOptionId,
          count: productCount,
        },
      ],
    };

    axios
      .post('http://54.180.132.155:9000/users/carts', data, headers)
      .then(() => {
        setIsHeaderCartCnt(!isHeaderCartCnt);
        toast.success('상품을 장바구니에 추가했습니다.');
      })
      .catch(() => {
        toast.error('상품을 장바구니에 추가하지 못했습니다.');
      });
  };

  const handleClickOrderBtn = () => {
    if (!selectedProductOptionId) {
      toast.error('상품 옵션을 먼저 선택해주세요.');
      return;
    }

    navigate('/order', {
      state: {
        data: productData,
        optionId: selectedProductOptionId,
        count: productCount,
      },
    });
    handleOpenBtn('open');
  };

  return (
    <div className={`btm_bgn_in dps2 ${goBuyBtn}`}>
      <ul className="btm_bgn_bx" id="dps2_gift" style={{ display: 'none' }}>
        <li>
          <a href="/" className="mndtl_btn type01 clickable" target="_parent">
            <span className="btn_tx">선물하기</span>
          </a>
        </li>
      </ul>
      <ul className="btm_bgn_bx" id="dps2_buy">
        <li>
          <button
            type="button"
            className="mndtl_btn type02 clickable"
            target="_parent"
            onClick={handleAddCart}
          >
            <span className="btn_tx">장바구니</span>
          </button>
        </li>
        <li>
          <button
            type="button"
            className="mndtl_btn type01 clickable"
            target="_parent"
            onClick={handleClickOrderBtn}
          >
            <span className="btn_tx ssgpay">
              <i className="ico_txt_ssgpay_btm">
                <span className="blind">SSGPAY.</span>
              </i>
              바로구매
            </span>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default PdtTool02;
