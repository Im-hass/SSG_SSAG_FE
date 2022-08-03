import React from 'react';
import './RecentShoppingFilter.scss';

function RecentShoppingFilter() {
  return (
    <div className="cmhistory_ctrl">
      <ul className="cmhistory_sort">
        <li className="on" data-srch-div-cd="10,70,71">
          <button type="button">상품</button>
        </li>
        <li data-srch-div-cd="60">
          <button type="button">검색어</button>
        </li>
        <li data-srch-div-cd="20">
          <button type="button">카테고리</button>
        </li>
        <li data-srch-div-cd="50,51">
          <button type="button">이벤트</button>
        </li>
        <li data-srch-div-cd="30,32,35,36">
          <button type="button">기획전</button>
        </li>
        <li data-srch-div-cd="40">
          <button type="button">브랜드</button>
        </li>
        <li data-srch-div-cd="41">
          <button type="button">매장</button>
        </li>
      </ul>
      <ul className="cmhistory_delete">
        <li>
          <span className="cmhistory_bt">
            <button
              type="button"
              className="cmhistory_bt_seldel"
              onClick="historySsg.deleteHistoryMulti();"
            >
              선택삭제
            </button>
          </span>
        </li>
        <li>
          <span className="cmhistory_bt">
            <button
              type="button"
              className="cmhistory_bt_alldel"
              onClick="historySsg.deleteHistoryAll();"
            >
              전체삭제
            </button>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default RecentShoppingFilter;
