import React from 'react';
import './RecentShoppingFilter.scss';

const FILTERLIST = [
  {
    id: 1,
    data: '10,70,71',
    name: '상품',
  },
  {
    id: 2,
    data: '60',
    name: '검색어',
  },
  {
    id: 3,
    data: '20',
    name: '카테고리',
  },
  {
    id: 4,
    data: '50,51',
    name: '이벤트',
  },
  {
    id: 5,
    data: '30,32,35,36',
    name: '기획전',
  },
  {
    id: 6,
    data: '40',
    name: '브랜드',
  },
  {
    id: 7,
    data: '41',
    name: '매장',
  },
];

function RecentShoppingFilter() {
  return (
    <div className="cmhistory_ctrl">
      <ul className="cmhistory_sort">
        {FILTERLIST.map((el, i) => (
          <li key={el.id} data-srch-div-cd={el.data}>
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
