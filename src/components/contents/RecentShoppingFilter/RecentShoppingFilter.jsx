import React from 'react';
import './RecentShoppingFilter.scss';
import { FILTER_LIST } from '../../../assets/datas/FilterList';

function RecentShoppingFilter() {
  return (
    <div className="cmhistory_ctrl">
      <ul className="cmhistory_sort">
        {FILTER_LIST.map((el) => (
          <li key={el.id}>
            <button type="button">{el.name}</button>
          </li>
        ))}
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
