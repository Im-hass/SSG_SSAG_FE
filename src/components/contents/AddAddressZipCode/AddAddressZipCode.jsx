import React, { useState } from 'react';
import axios from 'axios';
import './AddAddressZipCode.scss';
import { ZipCodeSearchResult } from '../ZipCodeSearchResult';

const ifFunc = (condition, then, otherwise) => (condition ? then : otherwise);

function AddAddressZipCode(props) {
  const { handleIsOpen, selectedItem, setSelectedItem } = props;
  const [hasDatas, setHasDatas] = useState(false);
  const [searchVal, setSearchVal] = useState();
  const [datas, setDatas] = useState();
  const [isSelected, setIsSelected] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setHasDatas(true);
    setIsSelected(false);

    // 공공 데이터 API
    // axios
    //   .get(
    //     `${process.env.REACT_APP_ZIPCODE_SERVICE_URL}?ServiceKey=${process.env.REACT_APP_ZIPCODE_SERVICE_KEY}&srchwrd=${searchVal}`,
    //   )
    //   .then((res) => {
    //     console.log(res);
    //     setDatas(res.data.NewAddressListResponse.newAddressListAreaCdSearchAll);
    //   })
    //   .catch((err) => new Error(err));

    // 주소기반산업지원서비스 API
    axios
      .get(
        `${process.env.REACT_APP_ZIPCODE_SERVICE_URL2}?currentPage=1&countPerPage=10&keyword=${searchVal}&confmKey=${process.env.REACT_APP_ZIPCODE_SERVICE_KEY2}&resultType=json
        `,
      )
      .then((res) => {
        setDatas(res.data.results.juso);
      })
      .catch((err) => new Error(err));
  };

  const handleInputData = (e) => {
    setSearchVal(e.target.value);
  };

  return (
    <div id="zipcode" style={{ display: 'block' }}>
      <div className="m_fullpop_header">
        <h1 className="m_fullpop_tit">우편번호 찾기</h1>
        <button
          type="button"
          onClick={handleIsOpen}
          className="m_fullpop_close"
        >
          <span className="blind">닫기</span>
        </button>
      </div>

      <div className="search_address">
        <div className="srchaddr_form">
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend className="blind">검색어 입력</legend>
              <div className="srchaddr_search">
                <input
                  name="searchKeyword"
                  type="text"
                  title="검색어 입력"
                  className="search_txt"
                  autoComplete="off"
                  placeholder="도로명 또는 지번 주소를 입력해주세요."
                  onChange={handleInputData}
                />
                <button type="button" className="search_clear">
                  <span className="blind">검색어 지우기</span>
                </button>
                <button type="submit" className="search_btn">
                  <span className="blind">검색</span>
                </button>
              </div>
            </fieldset>
          </form>
        </div>

        {hasDatas ? (
          ifFunc(
            !datas,
            <div className="srchaddr_sec srchaddr_sec_noresult">
              <h2 className="blind">주소 검색결과</h2>
              <div className="srchaddr_noresult">
                <p className="noresult_txt">
                  <span className="point">검색결과가 없습니다</span>
                </p>
              </div>
              <div className="srchaddr_tip">
                <strong className="tip_tit">TIP_찾으시는 주소가 없나요?</strong>
                <ul className="tip_desc">
                  <li>
                    행정안전부 도로명주소 시스템에 주소 등록 후 익일부터 주소
                    검색이 가능합니다.
                  </li>
                  <li>
                    도로명주소 홈페이지에서 주소 등록 여부를 확인해주세요.
                    <br />
                    · 도로명주소 안내 홈페이지 : https://www.juso.go.kr
                    <br />· 도로명주소 도움센터 : 1588-0061
                  </li>
                </ul>
              </div>
            </div>,
            <ZipCodeSearchResult
              datas={datas}
              isSelected={isSelected}
              setIsSelected={setIsSelected}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              handleIsOpen={handleIsOpen}
            />,
          )
        ) : (
          <div className="srchaddr_sec srchaddr_sec_init">
            <div className="srchaddr_tip">
              <strong className="tip_tit">TIP_이렇게 검색하세요!</strong>
              <div className="tip_search">
                <dl>
                  <dt>도로명 + 건물번호</dt>
                  <dd className="notranslate">
                    <span>우정국로 26</span>
                  </dd>
                </dl>
                <dl>
                  <dt>지역명 + 번지</dt>
                  <dd className="notranslate">
                    <span>공평동 17</span>
                  </dd>
                </dl>
                <dl>
                  <dt>지역명 + 건물명</dt>
                  <dd className="notranslate">
                    <span>회현동 신세계백화점</span>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        )}

        {/* 검색 결과가 0건일 때 */}
        {/* <div className="srchaddr_sec srchaddr_sec_result">
          <h2 className="blind">주소 검색결과</h2>
          <div className="srchaddr_notice">
            <p className="notice_txt">
              <em>검색한 결과 총 0건 입니다.</em>
            </p>
          </div>

          <div className="srchaddr_result">
            <ul className="result_list" />
            <div className="srchaddr_more" style={{ display: 'none' }} />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default AddAddressZipCode;
