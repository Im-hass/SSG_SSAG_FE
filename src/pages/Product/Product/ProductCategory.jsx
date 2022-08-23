import React from 'react';

function ProductCategory() {
    return (
        <div className="mndtl_sec_bx">
                    <div className="mndtl_category">
                      <dl className="mndtl_info_dl">
                        <dt>카테고리</dt>
                        <dd className="mndtl_ctg_info">
                          <span
                          
                          >
                            <a
                              href="/disp/category.ssg?ctgId=6000200803"
                              className="clickable"
                             
                              target="_parent"
                            >
                              명품잡화/아이웨어 &nbsp;
                              <i className="mndtl_ic_arr"></i>
                            </a>
                          </span>
                          <span
                         
                          >
                            <a
                              href="/disp/category.ssg?ctgId=6000200875"
                              className="clickable"
                           
                              target="_parent"
                            >
                              선글라스/안경 &nbsp;<i className="mndtl_ic_arr"></i>
                            </a>
                          </span>
                          <span
                           
                          >
                            <a
                              href="/disp/category.ssg?ctgId=6000211238"
                              className="clickable"
                            
                              target="_parent"
                            >
                              남성선글라스
                            </a>
                          </span>
                        </dd>
                      </dl>
                    </div>
                  </div>
    );
}

export default ProductCategory;