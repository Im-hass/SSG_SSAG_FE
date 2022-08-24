import React from 'react';

function CtgNav() {
  return (
    <div className="cmgrid_full_box js-set-header" data-page-set-id="121">
      <div className="cmctg_nav ty_rect">
        <div className="cmctg_top">
          <h3>전체메뉴</h3>
          <span className="cmctg_toggle">
            <button
              type="button"
              aria-expanded="false"
              className="clickable"
              data-react-tarea="홈|브랜드랭킹_카테고리탭|더보기"
            >
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
              <a
                className="cmctg_lnk clickable on"
                // href="#"
                href="/"
                data-disp-ctg-zone-id=""
                data-disp-ctg-id=""
                data-cornr-set-id=""
                data-react-tarea="홈|브랜드랭킹_카테고리탭|카테고리_클릭|전체"
              >
                <span className="cmctg_txt">전체</span>
              </a>
            </li>
            <li className="cmctg_item">
              <a
                className="cmctg_lnk clickable "
                // href="#"
                href="/"
                data-disp-ctg-zone-id=""
                data-disp-ctg-id="01"
                data-cornr-set-id=""
                data-react-tarea="홈|브랜드랭킹_카테고리탭|카테고리_클릭|패션"
              >
                <span className="cmctg_txt">패션</span>
              </a>
            </li>
            <li className="cmctg_item">
              <a
                className="cmctg_lnk clickable "
                // href="#"
                href="/"
                data-disp-ctg-zone-id=""
                data-disp-ctg-id="02"
                data-cornr-set-id=""
                data-react-tarea="홈|브랜드랭킹_카테고리탭|카테고리_클릭|뷰티&amp;잡화"
              >
                <span className="cmctg_txt">뷰티&amp;잡화</span>
              </a>
            </li>
            <li className="cmctg_item">
              <a
                className="cmctg_lnk clickable "
                // href="#"
                href="/"
                data-disp-ctg-zone-id=""
                data-disp-ctg-id="03"
                data-cornr-set-id=""
                data-react-tarea="홈|브랜드랭킹_카테고리탭|카테고리_클릭|스포츠&amp;레저"
              >
                <span className="cmctg_txt">스포츠&amp;레저</span>
              </a>
            </li>
            <li className="cmctg_item">
              <a
                className="cmctg_lnk clickable "
                // href="#"
                href="/"
                data-disp-ctg-zone-id=""
                data-disp-ctg-id="04"
                data-cornr-set-id=""
                data-react-tarea="홈|브랜드랭킹_카테고리탭|카테고리_클릭|디지털&amp;라이프"
              >
                <span className="cmctg_txt">디지털&amp;라이프</span>
              </a>
            </li>
            <li className="cmctg_item">
              <a
                className="cmctg_lnk clickable "
                // href="#"
                href="/"
                data-disp-ctg-zone-id=""
                data-disp-ctg-id="05"
                data-cornr-set-id=""
                data-react-tarea="홈|브랜드랭킹_카테고리탭|카테고리_클릭|푸드"
              >
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
