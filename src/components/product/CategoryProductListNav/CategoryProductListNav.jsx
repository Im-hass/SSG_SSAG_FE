import React from 'react';
import { Link } from 'react-router-dom';
import LikeButton from '../../ui/LikeButton/LikeButton';
import './CategoryProductListNav.scss';

function CategoryProductListNav({ lgId, title, subTitle }) {
  return (
    <div className="mcom_tit_renew  react-area product-list-header">
      <div id="mcom_path_cate" className="mcom_category header-item">
        <div className="cate_path">
          <span className="depth previous">
            <Link to={`/products/${lgId}/0`}>
              <span className="ctg_mn">
                <span className="ctg_txt">{title}</span>
              </span>
            </Link>
          </span>
          <span className="depth current">
            <button type="button" className="btn_more">
              <strong className="ctg_txt">{subTitle}</strong>
              <span className="sp_ctg_icon ctg_icon_arr more-arrow">
                <span className="blind">더보기</span>
              </span>
            </button>
          </span>
        </div>
      </div>
      <div className="mcom_tit_lft">
        <Link to="/category" className="btn_back clickable">
          <span className="sp_ctg_icon ctg_icon_back">
            <span className="blind">이전 페이지</span>
          </span>
        </Link>
      </div>
      <div className="mcom_tit_rgt">
        <div className="btn_cate btn_clip">
          <span className="cmlike _js_cmlike interestIt">
            <LikeButton />
          </span>
        </div>
        <div className="btn_cate btn_share">
          <button
            type="button"
            className="cm_bt_share clickable"
            data-morph-target=".mcom_ly_share"
          >
            <span className="sp_ctg_icon ctg_icon_share">
              <span className="blind">공유</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CategoryProductListNav;
