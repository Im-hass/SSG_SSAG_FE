import React from 'react';
import './CartPageLogin.scss';

function CartPageLogin() {
  return (
    <>
      <div className="mnodr_info_header">
        <div className="mnodr_info_row">
          <i className="mnodr_ic ic_location" />
          <h3 className="mnodr_info_tit">user.name</h3>
          <span className="mnodr_info_subtit">[기본배송지]</span>
        </div>
        <p className="mnodr_info_desc">
          <span className="blind">배송지 주소</span>user.address
        </p>
        <p className="mnodr_tx_desc mnodr_tx_point" id="delicoText" />
      </div>

      <div className="mnodr_info_contents">
        <div className="mnodr_info_btnarea">
          <button
            className="mnodr_info_btn cartTracking"
            type="button"
            name="btnReqMultShpp"
          >
            여러곳으로 한방에
          </button>
          <button
            type="button"
            id="changeAddressBtn"
            className="mnodr_info_btn layer_filter cartTracking"
          >
            배송지 변경
          </button>
          <a href="/" style={{ display: 'none' }} className="modal-fix-open">
            ㅇㅅㅇ
          </a>

          <div
            className="mnodr_modal ty_full mnodr_changeaddr"
            role="dialog"
            tabIndex="-1"
            aria-hidden="true"
            id="_layerChangeAddr"
          >
            <div
              className="mnodr_modal_wrap"
              role="document"
              // tabIndex="0"
            >
              <div className="mnodr_modal_head">
                <h3 className="mnodr_modal_tit">배송지 변경</h3>
                <button
                  type="button"
                  className="mnodr_modal_close modal-close-btn"
                  tabIndex="0"
                >
                  <i className="mnodr_ic ic_close">
                    <span className="blind">팝업닫기</span>
                  </i>
                </button>
              </div>
              <div className="mnodr_modal_cont">
                <div className="mnodr_modal_scroll">
                  <ul className="mnodr_rdotablist">
                    <li className="mnodr_rdotab ty_full" value="1">
                      <input
                        type="radio"
                        className="blind mnodr_rdotab_inp payTracking"
                        tabIndex="-1"
                        id="ui_test0"
                        value="46623,1"
                        name="mbrShpplocRadio"
                      />
                      <label
                        htmlFor="ui_test0"
                        className="mnodr_rdotab_label"
                        // tabIndex="0"
                      >
                        <div className="mnodr_rdotab_ctn">
                          <div className="mnodr_rdotab_left">
                            <i className="mnodr_rdotab_btn" />
                          </div>
                          <div className="mnodr_rdotab_right">
                            <div className="mnodr_rdotab_row">
                              <div className="mnodr_tx_wrap2">
                                <strong className="mnodr_tx mnodr_tx_primary">
                                  user.name
                                </strong>
                              </div>
                            </div>
                            <p className="mnodr_tx mnodr_tx_primary">
                              user.address
                            </p>
                            <p className="mnodr_tx mnodr_tx_gray">
                              임희선 / 010-9346-4107
                            </p>
                          </div>
                        </div>
                      </label>
                    </li>
                  </ul>
                  <div className="mnodr_sec">
                    <button
                      className="mnodr_btn ty_m ty_grayline payTracking"
                      type="button"
                      name="btnAddMbrNshpploc"
                    >
                      <span className="mnodr_btn_tx4">+ 주소 추가하기</span>
                    </button>
                  </div>
                </div>
              </div>
              <footer className="mnodr_modal_foot">
                <div className="mnodr_btn_area">
                  <button
                    id="onceAddrChange"
                    type="button"
                    className="mnodr_btn ty_lg ty_gray5 payTracking"
                  >
                    <strong className="mnodr_btn_tx">
                      {' '}
                      이번만 배송지 변경
                    </strong>
                  </button>
                  <button
                    id="basicAddrChange"
                    type="button"
                    className="mnodr_btn ty_lg ty_point payTracking"
                  >
                    <strong> 기본배송지 변경</strong>
                  </button>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPageLogin;
