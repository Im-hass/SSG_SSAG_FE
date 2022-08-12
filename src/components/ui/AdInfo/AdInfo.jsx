import React from 'react';

function AdInfo({ isBanner }) {
  return (
    <>
      {/* on 클래스 추가시 광고 info */}
      {/* isBanner ? 배너 구좌 : 광고 구좌 */}
      {isBanner ? (
        <div className="ssg-tooltip-wrap sr_toggle cmunit_tt_adinfo">
          <em className="blind">광고</em>
          <a
            href="/"
            className="ssg-tooltip cmunit_btn_tt_adinfo"
            role="button"
          >
            <span className="sr_off">
              <span className="blind">광고란? 툴팁 열기</span>
            </span>
            <span className="sr_on">
              <span className="blind">광고란? 툴팁 닫기</span>
            </span>
          </a>
          <div
            className="ssg-tooltip-layer cmunit_tt_adinfo_layer"
            role="tooltip"
            aria-label="광고란?"
          >
            검색 배너구좌를 구매한 상품으로 <br />
            입찰가 순으로 전시됩니다.{' '}
            <button
              type="button"
              className="ssg-tooltip-close cmunit_close_tt_adinfo"
            >
              <span className="blind">툴팁 닫기</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="ssg-tooltip-wrap sr_toggle cmitem_tt_adinfo">
          <em className="blind">광고</em>
          <a
            href="/"
            className="ssg-tooltip cmitem_btn_tt_adinfo"
            role="button"
          >
            <span className="sr_off">
              <span className="blind">광고란? 툴팁 열기</span>
            </span>
            <span className="sr_on">
              <span className="blind">광고란? 툴팁 닫기</span>
            </span>
          </a>
          <div
            className="ssg-tooltip-layer cmitem_tt_adinfo_layer clickable"
            role="tooltip"
            aria-label="광고란?"
          >
            광고구좌를 구매한 상품으로 입찰가 순으로 전시됩니다.
            <button
              type="button"
              className="ssg-tooltip-close cmitem_close_tt_adinfo"
            >
              <span className="blind">툴팁 닫기</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default AdInfo;
