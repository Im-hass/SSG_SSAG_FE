import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { selectedProductCount, productOptionId } from '../../../recoil/states';

function PdtTool02({ goBuyBtn, handleOpenBtn }) {
  const [selectedProductOptionId] = useRecoilState(productOptionId);
  const [productCount] = useRecoilState(selectedProductCount);

  const handleAddCart = () => {
    const token = localStorage.getItem('token');
    const data = {
      cartList: [
        {
          productOptionId: selectedProductOptionId,
          count: productCount,
        },
      ],
    };
    const headers = {
      headers: {
        Authorization: JSON.parse(token),
      },
    };

    axios
      .post('http://13.209.26.150:9000/users/carts', data, headers)
      .then((res) => {
        console.log('add cart res:', res);
      })
      .catch((err) => console.log('add cart err:', err));
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
          <Link
            to="/buyPage"
            className="mndtl_btn type01 clickable"
            target="_parent"
            onClick={() => handleOpenBtn('open')}
          >
            <span className="btn_tx ssgpay">
              <i className="ico_txt_ssgpay_btm">
                <span className="blind">SSGPAY.</span>
              </i>
              바로구매
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default PdtTool02;
