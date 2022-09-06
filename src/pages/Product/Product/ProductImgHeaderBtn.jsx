import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProductImgHeaderBtn() {
  const navigate = useNavigate();

  return (
    <div className="mndtl_header">
      <div className="mndtl_lft">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="mndtl_btn_back clickable"
        >
          <span className="blind">이전 페이지</span>
        </button>
      </div>
      <div className="mndtl_cntr">
        <div className="mndtl_unit_tit">
          <strong className="mndtl_unit_brd">GENTLE MONSTER(젠틀몬스터)</strong>
          <span className="mndtl_unit_name">론디 01(BR)</span>
        </div>
        <div className="mndtl_prdtab">
          <ul className="mndtl_prdtab_list">
            <li className="">
              <a href="/" className="mndtl_prdtab_link clickable" target="">
                상세
              </a>
            </li>
            <li className="">
              <a href="/" className="mndtl_prdtab_link clickable" target="">
                리뷰<span className="mndtl_prdtab_num"> 0 </span>
              </a>
            </li>
            <li className="">
              <a href="/" className="mndtl_prdtab_link clickable" target="">
                Q&amp;A
                <span className="mndtl_prdtab_num"> 1</span>
              </a>
            </li>

            <li className="">
              <a href="/" className="mndtl_prdtab_link clickable" target="">
                추천
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mndtl_rgt">
        <div className="mndtl_unit_thmb">
          <a href="/" target="_parent">
            <div
              className="mndtl_unit_img"
              style={{
                backgroundImage:
                  "url('https://sitem.ssgcdn.com/66/75/14/item/1000310147566_i1_30.jpg')",
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductImgHeaderBtn;
