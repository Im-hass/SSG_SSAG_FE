import React, { useState } from 'react';

import './RelateSearchValue.scss';

function RelateSearchValue() {
  const [isSelected, setIsSelected] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setIsSelected(!isSelected);
  };

  return (
    <div className="cm_sch_result">
      <div className={`csr_relate_bx ${isSelected ? 'on' : ''}`}>
        <h2 className="csr_relate_txt">연관</h2>
        <div className="csr_text_lst react-search">
          <ul>
            <li>
              <a
                href="?target=mobile&amp;query=%ea%b3%a0%ea%b8%b0%eb%a7%8c%eb%91%90&amp;inflow=6005&amp;src_area=ssgrlt"
                className="tx clickable"
              >
                고기만두
              </a>
            </li>
            <li>
              <a
                href="?target=mobile&amp;query=%ea%b9%80%ec%b9%98%eb%a7%8c%eb%91%90&amp;inflow=6005&amp;src_area=ssgrlt"
                className="tx clickable"
              >
                김치만두
              </a>
            </li>
            <li>
              <a
                href="?target=mobile&amp;query=%ec%99%95%ea%b5%90%ec%9e%90&amp;inflow=6005&amp;src_area=ssgrlt"
                className="tx clickable"
              >
                왕교자
              </a>
            </li>
            <li>
              <a
                href="?target=mobile&amp;query=%ea%b5%b0%eb%a7%8c%eb%91%90&amp;inflow=6005&amp;src_area=ssgrlt"
                className="tx clickable"
              >
                군만두
              </a>
            </li>
            <li>
              <a
                href="?target=mobile&amp;query=%ec%b0%90%eb%b9%b5&amp;inflow=6005&amp;src_area=ssgrlt"
                className="tx clickable"
              >
                찐빵
              </a>
            </li>
            <li>
              <a
                href="?target=mobile&amp;query=%ec%b6%98%ea%b6%8c&amp;inflow=6005&amp;src_area=ssgrlt"
                className="tx clickable"
              >
                춘권
              </a>
            </li>
            <li>
              <a
                href="?target=mobile&amp;query=%eb%83%89%eb%8f%99%ec%8b%9d%ed%92%88&amp;inflow=6005&amp;src_area=ssgrlt"
                className="tx clickable"
              >
                냉동식품
              </a>
            </li>
          </ul>
        </div>
        <a href="none" className="csr_open" onClick={handleOpen}>
          <span className="sp_csr">연관 검색어 펼쳐보기</span>
        </a>
      </div>
    </div>
  );
}

export default RelateSearchValue;
