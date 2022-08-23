import React, { useState } from 'react';
import './style/HidePdtTool.scss';

import Swal from 'sweetalert2';

function HidePdtTool({ toggleOn, handleOpenBtn }) {
  const three = () => {
    Swal.fire({
      title: '잠깐 !',
      text: '3個以上買えません..',
      icon: 'warning',
    });
  };

  const one = () => {
    Swal.fire({
      title: '잠깐 !',
      text: '1個以上買ってください..',
      icon: 'warning',
    });
  };

  const [pdtCnt, setPdtCnt] = useState(1);
  const handlePdtCnt = () => {
    if (pdtCnt < 3) {
      setPdtCnt((prev) => prev + 1);
    } else if (pdtCnt > 2) {
      three();

      // MySwal;
    }
  };

  const decPdtCnt = () => {
    if (pdtCnt > 1) {
      setPdtCnt((prev) => prev - 1);
    } else if (pdtCnt <= 1) {
      one();
    }
  };
  return (
    <div
      id="_cdtl_opt_bar"
      className={`mndtl_opt_bar _js_mndtl_opt_bar react-area ${toggleOn}`}
      data-react-tarea-cd="00006_000000013"
      data-react-comm-type="item"
      data-react-comm-id="1000045117545"
      data-react-salestr-no="6005"
      data-react-site-no="6004"
    >
      <div
        className="mndtl_opt_close"
        data-react-unit-type="text"
        data-react-unit-text='[{"type":"tarea_addt_val","value":"닫기"}]'
      >
        <button
          type="button"
          onClick={() => handleOpenBtn('close')}
          className="mndtl_btn_opt_close _js_mndtl_opt_toggle_btn clickable"
          data-react-tarea="상품상세|옵션바|닫기"
          data-react-tarea-dtl-cd="t00060"
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
                  <div
                    className="mndtl_opt_ani add"
                    data-optn-type="oneitem_result"
                    data-uitem-id="00000"
                    data-salestr-no="6005"
                    data-salestr-nm="S.COM몰"
                  >
                    <div className="mndtl_opt_selected">
                      <dl>
                        <dt>[젠틀몬스터]랭 01</dt>
                        <dd className="mndtl_art_l">
                          <div
                            className="mndtl_amount"
                            data-react-unit-type="text"
                            data-react-unit-text='[{"type":"tarea_addt_val","value":"수량선택"}]'
                          >
                            <button
                              type="button"
                              onClick={decPdtCnt}
                              className="mndtl_b_minus clickable"
                            >
                              빼기
                            </button>
                            <span className="mndtl_opa_area">
                              <span className="opa_tx">{pdtCnt}</span>
                            </span>
                            <button
                              type="button"
                              onClick={handlePdtCnt}
                              className="mndtl_b_plus clickable"
                            >
                              더하기
                            </button>
                          </div>
                        </dd>
                        <dd className="mndtl_art_r">
                          <span className="price">
                            <em className="ssg_price" data-prc="249000">
                              {(pdtCnt * 249000).toLocaleString()}
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
              {(pdtCnt * 249000).toLocaleString()}
            </em>
            <span className="ssg_tx">원</span>
          </strong>
        </div>
      </div>
    </div>
  );
}

export default HidePdtTool;
