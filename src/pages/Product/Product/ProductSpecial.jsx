import React from "react";

function ProductSpecial() {
  return (
    <div className="mndtl_sec_bx">
      <div className="mndtl_special">
        <a
          href="https://m-shinsegaemall.ssg.com/specialStore/gentlemonster/main.ssg"
          className="mndtl_special_link clickable"
          target="_parent"
        >
          <div className="mndtl_special_thmb">
            <img
              className="ssg_lazy"
              src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
              alt=""
            />
          </div>
          <div className="mndtl_special_tit">
            <span className="mndtl_special_tittx">
              GENTLE MONSTER 공식브랜드관
            </span>
            <i className="mndtl_ic_arr">
              <span className="blind">바로가기</span>
            </i>
          </div>
        </a>
      </div>
    </div>
  );
}

export default ProductSpecial;
