import React from 'react';
import { HeaderBackArrow } from '../index';
import './MobileHeaderSearch.scss';

function MobileHeaderSearch() {
  return (
    <div className="m_head_inparea2">
      <div className="addr_ipbx">
        <HeaderBackArrow />
        <span className="inpbx2">
          <input
            type="text"
            id="query"
            name="query"
            autoComplete="off"
            placeholder="검색어를 입력하세요."
          />
          <label htmlFor="query">
            <span className="blind">검색하기</span>
          </label>
          <input type="hidden" id="select_site_no" value="6005" />
        </span>

        <button type="button" className="addr_del">
          <span className="blind">검색단어 초기화</span>
        </button>
      </div>
      <button className="mcom_b_def" type="button">
        <span className="inp_ico_srch">
          <span className="blind">검색</span>
        </span>
      </button>
    </div>
  );
}

export default MobileHeaderSearch;
