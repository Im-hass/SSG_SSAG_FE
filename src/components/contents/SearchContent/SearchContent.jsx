import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { searchValueState } from '../../../recoil/isOpenState';
import { AdInfo } from '../../ui/AdInfo';
import { NoSearchValue } from '../NoSearchValue';
import { FindSearchValue } from '../FindSearchValue';
import { RelateSearchValue } from '../../common/RelateSearchValue';
import './SearchContent.scss';

const hasResult = true; // 검색 결과

function SearchContent() {
  const { value } = useParams();
  const [searchValue] = useRecoilState(searchValueState);

  return (
    <div id="m_wrap" className="mcom_wrap sm_v3">
      {/* 검색 결과 타이틀 */}
      <div className="mcom_tit_renew react-area search-value">
        <h2 className="mcom_tit_txt clickable">
          <a href="/" className="search-title-link">
            &apos;<em className="point">{value}</em>&apos; 검색결과
          </a>
        </h2>
        <div className="mcom_tit_lft">
          <a
            href="/"
            // href="javascript:history.back();"
            className="btn_back clickable"
          >
            <span className="sp_ctg_icon ctg_icon_back">
              <span className="blind">이전 페이지</span>
            </span>
          </a>
        </div>
        <div className="mcom_tit_rgt" />
      </div>

      <div id="m_content" className="content_csrch react-area">
        {/* 검색 결과가 있을 때 */}
        {hasResult && <RelateSearchValue />}

        <div className="m_scharea seach-background">
          <div className="cm_sch_result v2" data-areaid="nr_description">
            {/* 광고 배너 */}
            <div className="mcom_ban react-search">
              <span className=" gate_unit">
                <a
                  href="/"
                  className="clickable"
                  onClick="ssg_ad.adClick(this, {link: 'https://www.ssg.com/plan/planShop.ssg?dispCmptId=6000244304&amp;src_area=mbnr', position: 'banr'});return false;"
                >
                  <img
                    src="//sui.ssgcdn.com/ssgadp/1m/14/1002057141m.jpg"
                    alt="오일릴리 기획전"
                    width="100%"
                  />
                </a>
              </span>

              {/* on 클래스 추가시 배너 광고 구좌 */}
              <AdInfo isBanner />
            </div>

            {/* 검색 결과 배너 */}
            {/* 검색 결과가 있을 때 */}
            {/* 검색 결과가 없을 때 */}
            {hasResult ? (
              <FindSearchValue
                hasResult={hasResult}
                searchValue={searchValue}
              />
            ) : (
              <NoSearchValue hasResult={hasResult} searchValue={searchValue} />
            )}
          </div>

          {/* 검색만족도 설문 */}
          <div className="cm_btn_resch ico_arrow_st1" id="searchEvaluate">
            <a href="/">
              찾으시는 상품을 알려주세요
              <br /> 빠른 시일 내로 준비하도록 노력하겠습니다
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchContent;
