import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import './RelateSearchValue.scss';

function RelateSearchValue({ setSearchValue }) {
  const { value } = useParams();
  const [isSelected, setIsSelected] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setIsSelected(!isSelected);
  };

  const handleSearch = () => {
    setSearchValue(value);
  };

  return (
    <div className="cm_sch_result">
      <div className={`csr_relate_bx ${isSelected ? 'on' : ''}`}>
        <h2 className="csr_relate_txt">연관</h2>
        <div className="csr_text_lst react-search">
          <ul>
            <li>
              <Link
                to="/search/여성 슬랙스"
                className="tx clickable"
                onClick={handleSearch}
              >
                여성 슬랙스
              </Link>
            </li>
            <li>
              <Link
                to="/search/남성 슬랙스"
                className="tx clickable"
                onClick={handleSearch}
              >
                남성 슬랙스
              </Link>
            </li>
            <li>
              <Link
                to="/search/밴딩 슬랙스"
                className="tx clickable"
                onClick={handleSearch}
              >
                밴딩 슬랙스
              </Link>
            </li>
            <li>
              <Link
                to="/search/정장"
                className="tx clickable"
                onClick={handleSearch}
              >
                정장
              </Link>
            </li>
            <li>
              <Link
                to="/search/엠포르스슬랙스"
                className="tx clickable"
                onClick={handleSearch}
              >
                엠포르스슬랙스
              </Link>
            </li>
            <li>
              <Link
                to="/search/앤듀슬랙스"
                className="tx clickable"
                onClick={handleSearch}
              >
                앤듀슬랙스
              </Link>
            </li>
            <li>
              <Link
                to="/search/마인드브릿지슬랙스"
                className="tx clickable"
                onClick={handleSearch}
              >
                마인드브릿지슬랙스
              </Link>
            </li>
            <li>
              <Link
                to="/search/지오다노슬랙스"
                className="tx clickable"
                onClick={handleSearch}
              >
                지오다노슬랙스
              </Link>
            </li>
          </ul>
        </div>
        <a href="/" className="csr_open" onClick={handleOpen}>
          <span className="sp_csr">연관 검색어 펼쳐보기</span>
        </a>
      </div>
    </div>
  );
}

export default RelateSearchValue;
