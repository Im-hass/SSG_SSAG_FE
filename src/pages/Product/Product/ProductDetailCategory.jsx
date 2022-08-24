import React from 'react';

function ProductDetailCategory() {
  return (
    <div className="mndtl_sec_bx">
      <div className="mndtl_category">
        <dl className="mndtl_info_dl">
          <dt>카테고리</dt>
          <dd className="mndtl_ctg_info">
            <span
              data-react-unit-type="text"
              data-react-unit-text='[{"type":"text","value":"여성브랜드패션"}]'
            >
              <a
                href="/disp/category.ssg?ctgId=6000189224"
                className="clickable"
                data-react-tarea-dtl-cd="t00054"
                target="_parent"
              >
                여성브랜드패션 &nbsp;
                <i className="mndtl_ic_arr" />
              </a>
            </span>
            <span
              data-react-unit-type="text"
              data-react-unit-text='[{"type":"text","value":"가디건"}]'
            >
              <a
                href="/disp/category.ssg?ctgId=6000189225"
                className="clickable"
                data-react-tarea-dtl-cd="t00054"
                target="_parent"
              >
                가디건 &nbsp;
                <i className="mndtl_ic_arr" />
              </a>
            </span>
            <span
              data-react-unit-type="text"
              data-react-unit-text='[{"type":"text","value":"브이넥가디건"}]'
            >
              <a
                href="/disp/category.ssg?ctgId=6000189227"
                className="clickable"
                data-react-tarea-dtl-cd="t00054"
                target="_parent"
              >
                브이넥가디건
              </a>
            </span>
          </dd>
        </dl>
      </div>
    </div>
  );
}

export default ProductDetailCategory;
