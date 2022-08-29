import React from 'react';

function Filter() {
  return (
    <div className="cmgrid_full_box js-set-header">
      <div className="cmfilter">
        <div className="cmfilter_sel ty_lst_one">
          <span className="cmfilter_sel_chk">
            <input type="checkbox" className="clickable" />
          </span>
          <a href="/" className="cmfilter_sel_curent">
            <span className="cmfilter_txt">백화점상품 보기</span>
          </a>
          <ul className="cmfilter_sel_lst">
            <li>
              <a href="/" className="clickable">
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
