import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { selectedProductCount, productOptionId } from '../../../recoil/states';
import './style/HidePdtTool.scss';

function HidePdtTool({ toggleOn, handleOpenBtn, productData }) {
  const [, setSelectedProductOptionId] = useRecoilState(productOptionId);
  const [productCount, setProductCount] = useRecoilState(selectedProductCount);
  const [colorOptions, setColorOptions] = useState(null);
  const [sizeOptions, setSizeOptions] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { productId } = useParams();

  // 색상 data 받아오기
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      setIsLoading(true);
      try {
        const res = await axios.get(
          `http://13.209.26.150:9000/comm-users/products/options/color/${productId}`,
          {
            headers: {
              Authorization: JSON.parse(token),
            },
          },
        );
        setColorOptions(res.data.result);
        console.log('color response:', res);
      } catch (err) {
        console.log('color error:', err);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const getSizeData = () => {
    const token = localStorage.getItem('token');
    axios
      .get(
        `http://13.209.26.150:9000/comm-users/products/options/size/${productId}/${selectedColor}`,
        {
          headers: {
            Authorization: JSON.parse(token),
          },
        },
      )
      .then((res) => {
        setSizeOptions(res.data.result);
        console.log('size response:', res);
      })
      .catch((err) => console.log('size error:', err));
  };

  const handleSelectColor = (e) => {
    const { value } = e.target;
    setSelectedColor(+value);
  };

  // 색상 선택 후 사이즈 데이터 받아오기
  useEffect(() => {
    if (selectedColor !== null) {
      getSizeData();
    }
  }, [selectedColor]);

  const handleSelectSize = (e) => {
    const { value } = e.target;
    setSelectedProductOptionId(+value);
  };

  const handleProductCount = (action) => {
    if (action === 'inc') {
      setProductCount((prevCnt) => prevCnt + 1);
    } else if (action === 'dec') {
      if (productCount > 1) {
        setProductCount((prevCnt) => prevCnt - 1);
      }
    }
  };

  if (isLoading) return <div>로딩 중</div>;
  if (!colorOptions) return <div>데이터 없음</div>;

  return (
    <div
      id="_cdtl_opt_bar"
      className={`mndtl_opt_bar _js_mndtl_opt_bar react-area ${toggleOn}`}
    >
      <div className="mndtl_opt_close">
        <button
          type="button"
          onClick={() => handleOpenBtn('close')}
          className="mndtl_btn_opt_close _js_mndtl_opt_toggle_btn clickable"
          target="_parent"
        >
          <span className="blind">열기/닫기</span>
        </button>
      </div>
      <div className="mndtl_opt_wrap _js_opt_wrap">
        <div id="cdtl_scr1" className="mndtl_scr_area">
          <div className="mndtl_scroll">
            <div className="mndtl_addbenefit" />
            <div className="mndtl_opt_group">
              <div id="frebieSelectArea" />
              <div className="mndtl_opt_comp" id="_ordCacOpt_area">
                <div id="cmptSelectArea" />
              </div>

              <div className="mndtl_opt_bx">
                <div id="cdtl_opt_bx_uitem">
                  <div className="mndtl_opt_ani add">
                    <div className="mndtl_opt_selected">
                      <dl>
                        <div className="product_option_box">
                          <div className="product_option_info">
                            <span className="product_option_tit">색상: </span>
                            <select onChange={handleSelectColor}>
                              <option value="default">
                                색상을 선택해주세요
                              </option>
                              {colorOptions &&
                                colorOptions.map((color) => (
                                  <option
                                    key={color.colorId}
                                    value={color.colorId}
                                  >
                                    {color.color}
                                  </option>
                                ))}
                            </select>
                          </div>
                          <div className="product_option_info">
                            <span className="product_option_tit">사이즈: </span>
                            <select onChange={handleSelectSize}>
                              <option value="default" data-stock="default">
                                사이즈를 선택해주세요
                              </option>
                              {sizeOptions &&
                                sizeOptions.map((size) => (
                                  <option
                                    key={size.sizeId}
                                    value={size.productOptionId}
                                    data-stock={size.stock}
                                    className={
                                      size.stock === 0 ? 'out_of_Stock' : ''
                                    }
                                    disabled={size.stock === 0}
                                  >
                                    {size.stock > 0
                                      ? size.size
                                      : `${size.size}(품절)`}
                                  </option>
                                ))}
                            </select>
                          </div>
                        </div>
                        <dd className="mndtl_art_l">
                          <div className="mndtl_amount">
                            <button
                              type="button"
                              className="mndtl_b_minus clickable"
                              onClick={() => handleProductCount('dec')}
                            >
                              빼기
                            </button>
                            <span className="mndtl_opa_area">
                              <span className="opa_tx">{productCount}</span>
                            </span>
                            <button
                              type="button"
                              onClick={() => handleProductCount('inc')}
                              className="mndtl_b_plus clickable"
                            >
                              더하기
                            </button>
                          </div>
                        </dd>
                        <dd className="mndtl_art_r">
                          <span className="price">
                            <em className="ssg_price" data-prc="249000">
                              {(
                                productCount * productData.price
                              ).toLocaleString()}
                            </em>
                            <span className="ssg_tx">원</span>
                          </span>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div id="cdtl_opt_bx_cmpt" />
              </div>
            </div>
          </div>
        </div>
        <div className="mndtl_total">
          <strong className="mndtl_label">총 합계</strong>
          <strong className="price">
            <em id="totalPrc" className="ssg_price">
              {(productCount * productData.price).toLocaleString()}
            </em>
            <span className="ssg_tx">원</span>
          </strong>
        </div>
      </div>
    </div>
  );
}

export default HidePdtTool;
