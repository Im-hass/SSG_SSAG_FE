import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MobileHeader } from '../../components/ui/index';

function OrderDestinationChangePage() {
  useEffect(() => {}, []);

  return (
    <div>
      <MobileHeader title="배송지 선택" />
      <div className="mnodr_sec_heading">
        <h3 className="mnodr_tx_heading">어디로 보내드릴까요?</h3>
      </div>
      <div className="mbrShpplocArea mnodr_form_sec ty3">
        <div className="mnodr_form_head">
          <Link
            to="/addDestination"
            className="mbrShpplocAddButton mnodr_tx_wrap2"
          >
            <i className="mnodr_ic ic_plus_css" />
            <span className="mnodr_tx">신규배송지등록</span>
          </Link>
        </div>
        <div className="mnodr_form_cont ty_space">
          <ul className="mnodr_rdotablist">
            <li className="eachMbrShpplocArea mnodr_rdotab ty_input">
              <input
                type="radio"
                id="change.ordShpploc_1_2"
                className="blind mnodr_rdotab_inp ordShpplocRadio"
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
                    [46930] 부산광역시 사상구
                  </span>
                  <div className="mnodr_tx_wrap">
                    <span className="mnodr_tx_size2 mnodr_tx_gray">
                      최민정 / 010-0000-0000
                    </span>
                  </div>
                </div>
              </label>
            </li>
          </ul>
        </div>
      </div>
      <button
        type="submit"
        className="mnodr_btn ty_point ty_m payTracking"
        style={{ position: 'fixed', bottom: 0 }}
      >
        변경하기
      </button>
    </div>
  );
}

export default OrderDestinationChangePage;
