import React from 'react';
import './ProductList.scss';
import ProductItem from '../ProductItem/ProductItem';
// import { PRODUCT_LIST } from '../../../assets/datas';

function ProductList({ datas, isLogin = false }) {
  return (
    <>
      {/* 필터 */}
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
                className="cmft_sort_tit clickable sort-filter"
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

      <div className="cmitem_grid">
        <ul className="cmitem_grid_lst cmitem_ty_thmb">
          {datas &&
            datas.map((data) => (
              <ProductItem
                key={data.categoryProductDtoRes.productProductId}
                data={data}
                isLogin={isLogin}
              />
            ))}
        </ul>
      </div>
    </>
  );
}

export default ProductList;
