import React from 'react';
import { ProductList } from '../../product/ProductList/index';

function NoSearchValue({ hasResult, searchValue }) {
  return (
    <>
      <div className="cm_result_titbox go_link">
        <p>
          <b>‘{searchValue}’ 상품이 없습니다.</b>
        </p>
        <p>단어의 철자나 띄어쓰기가 정확한지 확인해 보세요.</p>
      </div>

      <div className="cm_search_ssgclick" data-areaid="nr_advert_item">
        <div className="cm_search_titbox">
          <h3>이런 상품 어떠세요?</h3>
          <div className="ssg-tooltip-wrap tt_adinfo_n">
            <a href="/" className="ssg-tooltip btn_tt_adinfo">
              광고
            </a>
            <div className="ssg-tooltip-layer">
              광고를 구매한 <br />
              상품으로 연관도 및<br />
              입찰가를 고려하여 노출됩니다.
              <button type="button" className="ssg-tooltip-close">
                <span className="blind">툴팁레이어 닫기</span>
              </button>
            </div>
          </div>
        </div>

        {/* 상품 리스트 */}
        <ProductList hasResult={hasResult} />
      </div>
    </>
  );
}

export default NoSearchValue;
