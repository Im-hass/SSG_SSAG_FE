import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { selectedProductCount, selectedOptions } from '../../../recoil/states';

function PdtTool02({ goBuyBtn, handleOpenBtn }) {
  const [productOptionData, setProductOptionData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [productOptionId, setProductOptionId] = useState(null);
  const [selectedOption, setSelectedOption] = useRecoilState(selectedOptions);
  const [productCount, setProductCount] = useRecoilState(selectedProductCount);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      setIsLoading(true);
      try {
        const res = await axios.get(
          'http://13.209.26.150:9000/comm-users/products/options/1',
          {
            headers: {
              Authorization: JSON.parse(token),
            },
          },
        );
        console.log('option response:', res);
        setProductOptionData(res.data.result);
      } catch (err) {
        console.log('option error:', err);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) return <div>로딩 중</div>;
  if (!productOptionData) return <div>데이터 없음</div>;

  const postOptionData = (id) => {
    const token = localStorage.getItem('token');
    const data = {
      cartList: [
        {
          productOptionId: id,
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

  const handleAddCart = () => {
    const selectedSize = selectedOption.size;
    const selectedColor = selectedOption.color;

    for (let i = 0; i < productOptionData.length; i += 1) {
      const sizeData = productOptionData[i].size.size;
      const colorData = productOptionData[i].color.color;
      const matchedProductOptionId = productOptionData[i].productOptionId;

      if (sizeData === selectedSize && colorData === selectedColor) {
        setProductOptionId(matchedProductOptionId);
      }
    }

    if (productOptionId) {
      postOptionData(productOptionId);
    }
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
