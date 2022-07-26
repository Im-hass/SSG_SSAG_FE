import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { useInView } from 'react-intersection-observer';
import { isOpenState, searchValueState } from '../../../store/states';
import { AdInfo } from '../../ui/AdInfo';
import { NoSearchValue } from '../NoSearchValue';
import { FindSearchValue } from '../FindSearchValue';
import { RelateSearchValue } from '../../common/RelateSearchValue';
import { LoadingSpinner } from '../../common/LoadingSpinner';
import './SearchContent.scss';
import useAxios from '../../../lib/useAxios';

function SearchContent() {
  const { value } = useParams();
  const navigate = useNavigate();
  const [isOpen] = useRecoilState(isOpenState);
  const [searchValue, setSearchValue] = useRecoilState(searchValueState);
  const [datas, setDatas] = useState(null);
  const [hasNextPage, setHasNextPage] = useState(true);
  const { ref, inView } = useInView();
  const [isWishChange, setIsWishChange] = useState(false);
  const [urlParams, setUrlParams] = useState({
    page: 0,
    base: '',
  });
  const { response, loading, fetchData } = useAxios({
    method: 'get',
    url: `/products/search/${value}?size=10&page=0`,
    userOrNot: true,
  });

  useEffect(() => {
    if (!isOpen) {
      if (response !== null && response !== undefined) {
        if (!inView) {
          setDatas(response.productDtoRes);
          setHasNextPage(response.next);
        }
      }
      setSearchValue(value);
    }
  }, [response]);

  useEffect(() => {
    if (datas !== null) {
      const strUrlParams = `?size=10&page=0&sort=product.${urlParams.base}`;
      fetchData({
        reMethod: 'get',
        reUrl: `/products/search/${value}${strUrlParams}`,
        reUserOrNot: true,
        afterThen: (res) => {
          setDatas(res.productDtoRes);
          setHasNextPage(res.next);
        },
      });
    }
  }, [value, isOpen]);

  useEffect(() => {
    if (inView && hasNextPage) {
      const strUrlParams = `?size=10&page=${urlParams.page + 1}&sort=product.${
        urlParams.base
      }`;
      fetchData({
        reMethod: 'get',
        reUrl: `/products/search/${value}${strUrlParams}`,
        reUserOrNot: true,
        afterThen: (res) => {
          setUrlParams({
            ...urlParams,
            page: res.pageNumber,
          });
          setDatas((prevDatas) => {
            const arr = prevDatas;
            return [...arr, ...res.productDtoRes];
          });
          setHasNextPage(res.next);
        },
      });
    }
  }, [inView]);

  useEffect(() => {
    if (datas !== null) {
      const strUrlParams = `?size=${datas.length}&page=0&sort=product.${urlParams.base}`;
      fetchData({
        reMethod: 'get',
        reUrl: `/products/search/${value}${strUrlParams}`,
        reUserOrNot: true,
      });
    }
  }, [isWishChange, urlParams.base]);

  const handleBack = () => {
    setSearchValue(value);
    navigate(-1);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div id="m_wrap" className="mcom_wrap sm_v3">
      {/* 검색 결과 타이틀 */}
      <div className="mcom_tit_renew react-area search-value">
        <h2 className="mcom_tit_txt clickable">
          <Link to={`/search/${searchValue}`} className="search-title-link">
            &apos;<em className="point">{searchValue}</em>&apos; 검색결과
          </Link>
        </h2>
        <div className="mcom_tit_lft">
          <button
            type="button"
            className="btn_back clickable"
            onClick={handleBack}
          >
            <span className="sp_ctg_icon ctg_icon_back">
              <span className="blind">이전 페이지</span>
            </span>
          </button>
        </div>
        <div className="mcom_tit_rgt" />
      </div>

      <div id="m_content" className="content_csrch react-area">
        {/* 검색 결과가 있을 때 : 연관 검색어 */}
        {datas && <RelateSearchValue setSearchValue={setSearchValue} />}

        <div className="m_scharea seach-background">
          <div className="cm_sch_result v2">
            {/* 광고 배너 */}
            <div className="mcom_ban react-search">
              <span className=" gate_unit">
                <Link to={`/search/${searchValue}`} className="clickable">
                  <img
                    src="//sui.ssgcdn.com/ssgadp/1m/14/1002057141m.jpg"
                    alt="오일릴리 기획전"
                    width="100%"
                  />
                </Link>
              </span>

              {/* on 클래스 추가시 배너 광고 구좌 */}
              <AdInfo isBanner />
            </div>

            {/* 검색 결과 배너 */}
            {/* 검색 결과가 있을 때 */}
            {/* 검색 결과가 없을 때 */}
            {datas && datas.length !== 0 ? (
              <FindSearchValue
                datas={datas}
                value={value}
                isWishChange={isWishChange}
                setIsWishChange={setIsWishChange}
                urlParams={urlParams}
                setUrlParams={setUrlParams}
                listEndRef={ref}
              />
            ) : (
              <NoSearchValue searchValue={searchValue} />
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
