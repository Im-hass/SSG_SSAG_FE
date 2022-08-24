import React from 'react';

function CtgNav() {
  return (
    <div className="cmgrid_full_box js-set-header">
      <div className="cmctg_nav ty_rect">
        <div className="cmctg_top">
          <h3>전체메뉴</h3>
          <span className="cmctg_toggle">
            <button type="button" aria-expanded="false" className="clickable">
              <span className="btn_label ty_off">
                <span className="blind">메뉴 펼치기</span>
              </span>
              <span className="btn_label ty_on">
                <span className="blind">메뉴 접기</span>
              </span>
            </button>
          </span>
        </div>
        <div className="cmctg_scroll js-set-catetab">
          <ul className="cmctg_menu">
            <li className="cmctg_item">
              <a className="cmctg_lnk clickable on" href="/">
                <span className="cmctg_txt">전체</span>
              </a>
            </li>
            <li className="cmctg_item">
              <a className="cmctg_lnk clickable " href="/">
                <span className="cmctg_txt">패션</span>
              </a>
            </li>
            <li className="cmctg_item">
              <a className="cmctg_lnk clickable " href="/">
                <span className="cmctg_txt">뷰티&amp;잡화</span>
              </a>
            </li>
            <li className="cmctg_item">
              <a className="cmctg_lnk clickable " href="/">
                <span className="cmctg_txt">스포츠&amp;레저</span>
              </a>
            </li>
            <li className="cmctg_item">
              <a className="cmctg_lnk clickable " href="/">
                <span className="cmctg_txt">디지털&amp;라이프</span>
              </a>
            </li>
            <li className="cmctg_item">
              <a className="cmctg_lnk clickable " href="/">
                <span className="cmctg_txt">푸드</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CtgNav;
