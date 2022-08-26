import React from 'react';
import { useRecoilState } from 'recoil';
import { selectedProductCount, selectedOptions } from '../../../recoil/states';
import { OPTION_COLORS, OPTION_SIZES } from '../../../assets/datas';
import './style/HidePdtTool.scss';

function HidePdtTool({ toggleOn, handleOpenBtn, productData }) {
  const [productCount, setProductCount] = useRecoilState(selectedProductCount);
  const [selectedOption, setSelectedOption] = useRecoilState(selectedOptions);

  const handleProductCount = (action) => {
    if (action === 'inc') {
      setProductCount((prevCnt) => {
        const currCnt = prevCnt + 1;
        return currCnt;
      });
    } else if (action === 'dec') {
      if (productCount > 1) {
        setProductCount((prevCnt) => {
          const currCnt = prevCnt - 1;
          return currCnt;
        });
      }
    }
  };

  const handleOptionChange = (e, action) => {
    const { value } = e.target;

    setSelectedOption({
      ...selectedOption,
      [action]: value,
    });
  };

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
                            <select
                              onChange={(e) => handleOptionChange(e, 'color')}
                            >
                              <option value="default">
                                색상을 선택해주세요
                              </option>
                              {OPTION_COLORS.map((color) => (
                                <option key={color.id} value={color.value}>
                                  {color.name}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="product_option_info">
                            <span className="product_option_tit">사이즈: </span>
                            <select
                              onChange={(e) => handleOptionChange(e, 'size')}
                            >
                              <option value="default">
                                사이즈를 선택해주세요
                              </option>
                              {OPTION_SIZES.map((size) => (
                                <option key={size.id} value={size.value}>
                                  {size.name}
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
