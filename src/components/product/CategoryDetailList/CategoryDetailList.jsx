import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios/index';

import './CategoryDetailList.scss';
import { ProductList } from '../ProductList';

const datas = [
  {
    categoryProductDtoRes: {
      productSale: 0,
      productImgSaveName:
        'f1bf7b09-b0f5-4bd3-b4f3-e080edb6f4d0SSG_SSAG_BE31c38aa0-48b8-45f5-bdbc-acd7126c4cfc.jpg',
      productSaleStartDate: null,
      productSaleEndDate: null,
      productImgOriginName: '슬랙스.jpg',
      productImgUrl:
        'https://ssg-ssag-bucket.s3.ap-northeast-2.amazonaws.com/product/f1bf7b09-b0f5-4bd3-b4f3-e080edb6f4d0SSG_SSAG_BE31c38aa0-48b8-45f5-bdbc-acd7126c4cfc.jpg',
      productStoreName: '슥삭매장',
      productProductId: 1,
      productName: '스탠다드 슬랙스',
      productPrice: 25000,
      productStoreStoreId: 1,
    },
    reviewTotalDto: {
      reviewAvg: 5.0,
      reviewCount: 1,
    },
    wishDto: null,
  },
];

function CategoryDetailList({ mediumCateList }) {
  const { largeCategoryId, mediumCategoryId } = useParams();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [smallCateList, setSmallCateList] = useState();
  const [hasMId, setHasMid] = useState(false);

  const handleNavOpen = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    if (mediumCategoryId !== undefined) {
      setHasMid(true);
    } else {
      setHasMid(false);
    }

    if (mediumCategoryId !== undefined) {
      axios
        .get(
          `http://13.209.26.150:9000/comm-users/category/small/${mediumCategoryId}`,
        )
        .then((res) => {
          setSmallCateList(res.data.result);
        });
    }
  }, [hasMId, mediumCategoryId]);

  return (
    <>
      <div id="m_top_catelist" className="m_catelst_wrap_v2">
        <div className={`cmgrid_full_box ${isNavOpen ? 'nav-modal' : ''}`}>
          <div className={`cmctg_nav ${isNavOpen ? 'is_open' : ''}`}>
            <div className="cmctg_top">
              <h3>전체메뉴</h3>
              <span className="cmctg_toggle">
                <button
                  type="button"
                  aria-expanded="false"
                  onClick={handleNavOpen}
                >
                  <span className="btn_label ty_off">
                    <span className="blind">메뉴 펼치기</span>
                  </span>
                  <span className="btn_label ty_on">
                    <span className="blind">메뉴 접기</span>
                  </span>
                </button>
              </span>
            </div>
            <div className="cmctg_scroll">
              <ul className="cmctg_menu">
                {mediumCateList &&
                  mediumCateList.map((v) => (
                    <li
                      key={v.mediumCategoryId}
                      className="cmctg_item"
                      role="menuitem"
                      onClick={() =>
                        isNavOpen ? handleNavOpen() : setIsNavOpen(false)
                      }
                      onKeyDown={() =>
                        isNavOpen ? handleNavOpen() : setIsNavOpen(false)
                      }
                    >
                      <Link
                        to={`/products/${largeCategoryId}/${v.mediumCategoryId}`}
                        className={`clickable cmctg_lnk ${
                          v.mediumCategoryId === Number(mediumCategoryId)
                            ? 'on'
                            : ''
                        }`}
                        // onClick={handleSamllMenuList}
                      >
                        <span className="cmctg_txt">
                          {v.mediumCategoryTitle}
                        </span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>

        {hasMId && smallCateList && (
          <div className="m_catelst">
            <ul className="lst_cate">
              {smallCateList.map((v) => (
                <li key={v.smallCategoryId}>
                  <Link
                    to={`/products/${largeCategoryId}/${mediumCategoryId}/${v.smallCategoryId}`}
                    className="clickable"
                  >
                    <span>{v.smallCategoryTitle}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div id="m_dimmed" className={`${isNavOpen ? 'mcom_dimmed' : ''}`} />
      </div>

      <div className="cmft_sort v2">
        <div className="cmft_sort_opts">
          <ul className="cmft_sort_lst">
            <li className="cmft_cell cmft_sort_ship" id="filter_shpp">
              <div className="cmft_sel_wrap">
                <span
                  className="cmft_inp_chk clickable"
                  data-react-tarea="카테고리|바닥필터|배송_필터_선택|매장픽업"
                >
                  <input type="checkbox" id="ui_ship_view" value="picku" />
                </span>
                <a
                  href="/('picku')"
                  className="clickable"
                  data-react-tarea="카테고리|바닥필터|배송_필터_선택|매장픽업"
                >
                  <label
                    htmlFor="ui_ship_view"
                    className="cmft_sort_tit cmft_label_curent"
                  >
                    <span className="cmft_txt">매장픽업</span>
                  </label>
                </a>
              </div>
            </li>
            <li className="cmft_cell cmft_sort_rank">
              <div className="cmft_sel_wrap">
                <a href="/" className="cmft_sort_tit cmft_sel_curent">
                  <span className="cmft_txt">추천순</span>
                </a>
                <ul className="cmft_sel_lst">
                  <li
                    className="clickable on"
                    data-react-tarea="카테고리|바닥필터|정렬_필터_선택|추천순"
                  >
                    <a href="/">
                      <span className="cmft_txt">추천순</span>
                    </a>
                  </li>
                  <li
                    className="clickable "
                    data-react-tarea="카테고리|바닥필터|정렬_필터_선택|판매순"
                  >
                    <a href="/">
                      <span className="cmft_txt">판매순</span>
                    </a>
                  </li>
                  <li
                    className="clickable "
                    data-react-tarea="카테고리|바닥필터|정렬_필터_선택|낮은가격순"
                  >
                    <a href="/">
                      <span className="cmft_txt">낮은가격순</span>
                    </a>
                  </li>
                  <li
                    className="clickable "
                    data-react-tarea="카테고리|바닥필터|정렬_필터_선택|높은가격순"
                  >
                    <a href="/">
                      <span className="cmft_txt">높은가격순</span>
                    </a>
                  </li>
                  <li
                    className="clickable "
                    data-react-tarea="카테고리|바닥필터|정렬_필터_선택|할인율순"
                  >
                    <a href="/">
                      <span className="cmft_txt">할인율순</span>
                    </a>
                  </li>
                  <li
                    className="clickable "
                    data-react-tarea="카테고리|바닥필터|정렬_필터_선택|신상품순"
                  >
                    <a href="/">
                      <span className="cmft_txt">신상품순</span>
                    </a>
                  </li>
                  <li
                    className="clickable "
                    data-react-tarea="카테고리|바닥필터|정렬_필터_선택|리뷰많은순"
                  >
                    <a href="/">
                      <span className="cmft_txt">리뷰많은순</span>
                    </a>
                  </li>
                  <input type="hidden" name="sortType" id="sortType" value="" />
                </ul>
              </div>
            </li>
            <li className="cmft_cell cmft_sort_srch ">
              <a
                href="/"
                className="cmft_sort_tit clickable"
                data-react-tarea="카테고리|바닥필터|필터더보기_선택"
              >
                <span className="cmft_txt">필터</span>
                <span className="cmft_num">
                  <strong />
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div className="cmft_allstore_lst" style={{ display: 'none' }}>
          <div className="cmft_allstore_parent">
            <ul className="cmft_allstore_round" />
          </div>
          <div className="cmft_dtstore_lst ">
            <ul>
              <li
                className="clickable "
                data-react-tarea="카테고리|바닥필터|백화점픽업_필터_선택|전체"
              >
                <a href="/">전체</a>
              </li>
              <li
                className="clickable "
                data-react-tarea="카테고리|바닥필터|백화점픽업_필터_선택|본점"
              >
                <a href="/">본점</a>
              </li>
              <li
                className="clickable "
                data-react-tarea="카테고리|바닥필터|백화점픽업_필터_선택|강남점"
              >
                <a href="/">강남점</a>
              </li>
              <li
                className="clickable "
                data-react-tarea="카테고리|바닥필터|백화점픽업_필터_선택|경기점"
              >
                <a href="/">경기점</a>
              </li>
              <li
                className="clickable "
                data-react-tarea="카테고리|바닥필터|백화점픽업_필터_선택|센텀시티점"
              >
                <a href="/">센텀시티점</a>
              </li>
              <li
                className="clickable "
                data-react-tarea="카테고리|바닥필터|백화점픽업_필터_선택|타임스퀘어점패션관"
              >
                <a href="/">타임스퀘어점패션관</a>
              </li>
              <li
                className="clickable "
                data-react-tarea="카테고리|바닥필터|백화점픽업_필터_선택|타임스퀘어점리빙관"
              >
                <a href="/">타임스퀘어점리빙관</a>
              </li>
              <li
                className="clickable "
                data-react-tarea="카테고리|바닥필터|백화점픽업_필터_선택|의정부점"
              >
                <a href="/">의정부점</a>
              </li>
              <li
                className="clickable "
                data-react-tarea="카테고리|바닥필터|백화점픽업_필터_선택|광주신세계"
              >
                <a href="/">광주신세계</a>
              </li>
              <li
                className="clickable "
                data-react-tarea="카테고리|바닥필터|백화점픽업_필터_선택|마산점"
              >
                <a href="/">마산점</a>
              </li>
              <li
                className="clickable "
                data-react-tarea="카테고리|바닥필터|백화점픽업_필터_선택|천안아산점"
              >
                <a href="/">천안아산점</a>
              </li>
              <li
                className="clickable "
                data-react-tarea="카테고리|바닥필터|백화점픽업_필터_선택|김해점"
              >
                <a href="/">김해점</a>
              </li>
              <li
                className="clickable "
                data-react-tarea="카테고리|바닥필터|백화점픽업_필터_선택|하남점"
              >
                <a href="/">하남점</a>
              </li>
              <li
                className="clickable "
                data-react-tarea="카테고리|바닥필터|백화점픽업_필터_선택|대구신세계"
              >
                <a href="/">대구신세계</a>
              </li>
              <li
                className="clickable "
                data-react-tarea="카테고리|바닥필터|백화점픽업_필터_선택|대전신세계"
              >
                <a href="/">대전신세계</a>
              </li>
              <input
                type="hidden"
                name="pickuSalestr"
                id="pickuSalestr"
                value=""
              />
            </ul>
          </div>
        </div>

        <div className="cmft_store_lst" style={{ display: 'none' }}>
          <ul>
            <li
              className="clickable "
              data-react-tarea="카테고리|바닥필터|백화점상품_필터_선택|전체"
            >
              <a href="/">전체</a>
            </li>
            <li
              className="clickable "
              data-react-tarea="카테고리|바닥필터|백화점상품_필터_선택|본점"
            >
              <a href="/">본점</a>
            </li>
            <li
              className="clickable "
              data-react-tarea="카테고리|바닥필터|백화점상품_필터_선택|강남점"
            >
              <a href="/">강남점</a>
            </li>
            <li
              className="clickable "
              data-react-tarea="카테고리|바닥필터|백화점상품_필터_선택|경기점"
            >
              <a href="/">경기점</a>
            </li>
            <li
              className="clickable "
              data-react-tarea="카테고리|바닥필터|백화점상품_필터_선택|센텀시티점"
            >
              <a href="/">센텀시티점</a>
            </li>
            <li
              className="clickable "
              data-react-tarea="카테고리|바닥필터|백화점상품_필터_선택|타임스퀘어점패션관"
            >
              <a href="/">타임스퀘어점패션관</a>
            </li>
            <li
              className="clickable "
              data-react-tarea="카테고리|바닥필터|백화점상품_필터_선택|타임스퀘어점리빙관"
            >
              <a href="/">타임스퀘어점리빙관</a>
            </li>
            <li
              className="clickable "
              data-react-tarea="카테고리|바닥필터|백화점상품_필터_선택|의정부점"
            >
              <a href="/">의정부점</a>
            </li>
            <li
              className="clickable "
              data-react-tarea="카테고리|바닥필터|백화점상품_필터_선택|광주신세계"
            >
              <a href="/">광주신세계</a>
            </li>
            <li
              className="clickable "
              data-react-tarea="카테고리|바닥필터|백화점상품_필터_선택|마산점"
            >
              <a href="/">마산점</a>
            </li>
            <li
              className="clickable "
              data-react-tarea="카테고리|바닥필터|백화점상품_필터_선택|천안아산점"
            >
              <a href="/">천안아산점</a>
            </li>
            <li
              className="clickable "
              data-react-tarea="카테고리|바닥필터|백화점상품_필터_선택|김해점"
            >
              <a href="/">김해점</a>
            </li>
            <li
              className="clickable "
              data-react-tarea="카테고리|바닥필터|백화점상품_필터_선택|하남점"
            >
              <a href="/">하남점</a>
            </li>
            <li
              className="clickable "
              data-react-tarea="카테고리|바닥필터|백화점상품_필터_선택|대구신세계"
            >
              <a href="/">대구신세계</a>
            </li>
            <li
              className="clickable "
              data-react-tarea="카테고리|바닥필터|백화점상품_필터_선택|대전신세계"
            >
              <a href="/">대전신세계</a>
            </li>
            <input type="hidden" name="salestr" id="salestr" value="" />
          </ul>
        </div>
      </div>
      <ProductList datas={datas} />
    </>
  );
}

export default CategoryDetailList;
