import React from 'react';
import { MobileHeader } from '../../components/ui/index';

function OrderDestinationChangeModal() {
  return (
    <div>
      <MobileHeader title="배송지 선택" />
      <div className="mnodr_sec_heading">
        <h3 className="mnodr_tx_heading">어디로 보내드릴까요?</h3>
      </div>
      <div className="mbrShpplocArea mnodr_form_sec ty3">
        <div className="mnodr_form_head">
          <button
            type="button"
            className="mbrShpplocAddButton mnodr_tx_wrap2"
            data-shpplocseq="1"
          >
            <i className="mnodr_ic ic_plus_css" />
            <span className="mnodr_tx">신규배송지등록</span>
          </button>
        </div>
        <div className="mnodr_form_cont ty_space">
          <ul className="mnodr_rdotablist">
            <li
              className="eachMbrShpplocArea mnodr_rdotab ty_input"
              data-shpplocseq="1"
            >
              <input
                type="radio"
                name="change.ordShpploc_1"
                id="change.ordShpploc_1_2"
                className="blind mnodr_rdotab_inp ordShpplocRadio"
                data-shpplocseq="1"
                value="2"
              />
              <label
                htmlFor="change.ordShpploc_1_2"
                className="mnodr_rdotab_label"
              >
                <div className="mnodr_rdotab_head">
                  <div className="mnodr_rdotab_headlt">
                    <i className="mnodr_rdotab_btn" />
                    <strong className="mnodr_tx_desc3">본가</strong>
                  </div>
                </div>
                <div className="mnodr_rdotab_ctn ty_pull ty_desc">
                  <span className="mnodr_tx_desc">
                    [46930] 부산광역시 사상구 백양대로 879, 105동 1306호
                    (모라동, 동원아파트)
                  </span>
                  <div className="mnodr_tx_wrap">
                    <span className="mnodr_tx_size2 mnodr_tx_gray">
                      최민정 / 010-8450-1543
                    </span>
                  </div>
                </div>
              </label>
            </li>

            <li
              className="eachMbrShpplocArea mnodr_rdotab ty_input"
              data-shpplocseq="1"
            >
              <input
                type="radio"
                name="change.ordShpploc_1"
                id="change.ordShpploc_1_3"
                className="blind mnodr_rdotab_inp ordShpplocRadio"
                data-shpplocseq="1"
                value="3"
              />
              <label
                htmlFor="change.ordShpploc_1_3"
                className="mnodr_rdotab_label"
              >
                <div className="mnodr_rdotab_head">
                  <div className="mnodr_rdotab_headlt">
                    <i className="mnodr_rdotab_btn" />
                    <strong className="mnodr_tx_desc3">제주도집</strong>
                  </div>
                </div>
                <div className="mnodr_rdotab_ctn ty_pull ty_desc">
                  <span className="mnodr_tx_desc">
                    [63332] 제주특별자치도 제주시 조천읍 신흥로2길 2-5, 301호
                  </span>
                  <div className="mnodr_tx_wrap">
                    <span className="mnodr_tx_size2 mnodr_tx_gray">
                      최민정 / 010-8450-1543
                    </span>
                  </div>
                </div>
              </label>
            </li>
          </ul>
          <button
            type="button"
            className="mbrShpplocMoreViewButton mnodr_btn ty_sm"
            data-shpplocseq="1"
          >
            <span className="mnodr_tx_desc">
              더보기
              <i className="mnodr_ic ic_arr ty_arr_bottom" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderDestinationChangeModal;
