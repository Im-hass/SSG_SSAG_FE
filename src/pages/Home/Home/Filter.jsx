import React from 'react';

function Filter() {
  return (
    <div className="cmgrid_full_box js-set-header" data-page-set-id="132">
      <div className="cmfilter">
        <div className="cmfilter_sel ty_lst_one">
          <span className="cmfilter_sel_chk">
            <input
              type="checkbox"
              className="clickable"
              data-react-tarea="홈|카테고리인기상품_백화점필터|필터_클릭"
              data-filter-type="shppType"
            />
          </span>
          <a
            // href="#"
            href="/"
            className="cmfilter_sel_curent"
          >
            <span className="cmfilter_txt">백화점상품 보기</span>
          </a>
          <ul className="cmfilter_sel_lst" data-filter-type="shppType">
            <li>
              <a
                // href="#"
                href="/"
                className="clickable"
                data-react-tarea="홈|카테고리인기상품_백화점필터|필터_선택|백화점상품 보기"
                data-filter-type="shppType"
                data-item-type=""
                data-shpp-type="SHPP_FILTER_DEPT"
                data-age-type=""
                data-gender-type=""
              >
                <span className="cmfilter_txt">백화점상품 보기</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Filter;
