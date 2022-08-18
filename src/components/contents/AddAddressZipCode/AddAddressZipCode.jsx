import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AddAddressZipCode.scss';
import { ZipCodeSearchResult } from '../ZipCodeSearchResult';

function AddAddressZipCode(props) {
  const { handleIsOpen } = props;
  const [isOpen, setIsOpen] = useState(true);
  const [searchVal, setSearchVal] = useState();
  const [datas, setDatas] = useState();
  const [isSelected, setIsSelected] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(false);
    setIsSelected(false);
    axios
      .get(
        `${process.env.REACT_APP_ZIPCODE_SERVICE_URL}?ServiceKey=${process.env.REACT_APP_ZIPCODE_SERVICE_KEY}&srchwrd=${searchVal}`,
      )
      .then((res) => {
        setDatas(res.data.NewAddressListResponse.newAddressListAreaCdSearchAll);
      });
  };

  const handleInputData = (e) => {
    setSearchVal(e.target.value);
  };

  const handleSelected = () => {
    setIsSelected(!isSelected);
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
          {/* <div className="srchaddr_suggest" style={{ display: 'none' }}>
            <strong className="blind">제안 검색어</strong>
            <ul className="suggest_list" />
          </div> */}
        </div>

        {isOpen ? (
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
        ) : (
          datas && (
            <ZipCodeSearchResult
              datas={datas}
              handleSelected={handleSelected}
              isSelected={isSelected}
            />
          )
        )}

        {/* 결과가 없을 때 */}
        {!isOpen && !datas && (
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
          </div>
        )}
      </div>
    </div>
  );
}

export default AddAddressZipCode;
