import React from 'react';

function ProductOptBar() {
  return (
    <>
      <div
        id="soldoutRcmdArea"
        className="mndtl_soldout_panel _js_mndtl_soldout_panel react-area"
      >
        <div className="mndtl_soldout_close">
          <a
            // href="#"
            href="/"
            className="mndtl_btn_opt_close _js_mndtl_soldout_toggle_btn clickable"
            onClick="ssg_react_v2.direct_call(this);"
            target=""
          >
            <span className="blind">열기/닫기</span>
          </a>
        </div>
        <div className="mndtl_soldout_wrap">
          <p className="mndtl_soldout_tit">
            아쉽게도 다 팔렸어요. 이 상품은 어떠세요?
          </p>
          <div id="mRcmdArea" />
        </div>
      </div>
      <div
        id="_cdtl_opt_bar"
        className="mndtl_opt_bar _js_mndtl_opt_bar react-area"
      >
        <div className="mndtl_opt_close">
          <a
            // href="javascript:;"
            href="/"
            className="mndtl_btn_opt_close _js_mndtl_opt_toggle_btn clickable"
            target="_parent"
          >
            <span className="blind">열기/닫기</span>
          </a>
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
                          <dt>론디 01(BR)</dt>
                          <dd className="mndtl_art_l">
                            <div className="mndtl_amount">
                              <a
                                // href="javascript:void(0);"
                                href="/"
                                className="mndtl_b_minus clickable"
                                onClick="ItmOp.changeOrdQty(this, -1, 1, 1);"
                                target="_parent"
                              >
                                빼기
                              </a>
                              <span className="mndtl_opa_area">
                                <span className="opa_tx">1</span>
                              </span>
                              <a
                                // href="javascript:void(0);"
                                href="/"
                                className="mndtl_b_plus clickable"
                                onClick="ItmOp.changeOrdQty(this, 1, 1, 1);"
                                target="_parent"
                              >
                                더하기
                              </a>
                            </div>
                          </dd>
                          <dd className="mndtl_art_r">
                            <span className="price">
                              <em className="ssg_price">259,000</em>
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
                259,000
              </em>
              <span className="ssg_tx">원</span>
            </strong>
          </div>
        </div>
      </div>

      <div className="mndtl_opt_calendar _js_mndtl_opt_calendar react-area">
        <div className="mndtl_opt_close">
          <a
            // href="#"
            href="/"
            className="mndtl_btn_opt_close"
            target=""
          >
            <span className="blind">닫기</span>
          </a>
        </div>
        <div className="mndtl_opt_wrap">
          <p className="mndtl_calendar_tit">날짜를 선택해주세요</p>
          <div className="mndtl_scr_area">
            <div className="mndtl_scroll">
              <div id="_optCalendar" className="mndtl_calendar_item" />
            </div>
          </div>
          <div
            id="cal_prc"
            className="mndtl_opt_calendar_total"
            style={{ display: 'none' }}
          >
            <strong className="price" />원
          </div>
        </div>
        <div className="mndtl_calendar_btm">
          <button
            type="button"
            className="mndtl_btn_calendar_select clickable"
            onClick="ssg_react_v2.direct_call(this);"
          >
            <span>선택하기</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductOptBar;
