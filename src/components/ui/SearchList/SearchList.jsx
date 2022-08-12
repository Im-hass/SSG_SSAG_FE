import React from 'react';
import SearchItem from '../SearchItem/SearchItem';

function SearchList({ datas }) {
  return (
    <div className="cgsearch_latest_keyword" id="mbr_kwd_alert_all">
      <h3 className="cgsearch_latest_title">최근검색어</h3>
      <ul className="cgsearch_latest_keylst" id="mbr_kwd_list">
        {datas &&
          datas.map((data) => <SearchItem key={data.productId} data={data} />)}
      </ul>
      <button type="button" className="cgsearch_delete_all">
        검색어 전체 삭제
      </button>
    </div>
  );
}

export default SearchList;
