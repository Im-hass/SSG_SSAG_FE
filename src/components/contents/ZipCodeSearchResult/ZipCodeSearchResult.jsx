import React from 'react';

function ZipCodeSearchResult({
  datas,
  isSelected,
  setIsSelected,
  selectedItem,
  setSelectedItem,
  handleIsOpen,
}) {
  const handleListSelected = (e, i) => {
    e.preventDefault();
    setIsSelected(!isSelected);
    let getZipNo = '';
    let getlnmAdres = '';
    let getRnAdres = '';

    // 공공 데이터 API
    // if (datas.length === undefined) {
    //   getZipNo = datas.zipNo;
    //   getlnmAdres = datas.lnmAdres;
    //   getRnAdres = datas.rnAdres;
    // } else {
    //   getZipNo = datas[i].zipNo;
    //   getlnmAdres = datas[i].lnmAdres;
    //   getRnAdres = datas[i].rnAdres;
    // }

    // 주소기반산업지원서비스 API
    getZipNo = datas[i].zipNo;
    getlnmAdres = datas[i].roadAddr;
    getRnAdres = datas[i].jibunAddr;

    setSelectedItem((pre) => ({
      ...pre,
      zipCode: getZipNo,
      streetAddr: getlnmAdres,
      lotAddr: getRnAdres,
    }));
  };

  const handleChange = (e) => {
    setSelectedItem({
      ...selectedItem,
      detailAddr: e.target.value,
    });
  };

  return (
    <>
      {
        // 결과 있을 때
        !isSelected && (
          <div className="srchaddr_sec srchaddr_sec_result">
            <h2 className="blind">주소 검색결과</h2>
            <div className="srchaddr_notice">
              <p className="notice_txt">
                <em>
                  검색한 결과 총 {datas.length === undefined ? 1 : datas.length}
                  건 입니다.
                </em>
              </p>
            </div>

            <div className="srchaddr_result">
              <ul className="result_list">
                {datas.length === undefined ? (
                  <li
                    key={datas.roadAddr}
                    role="menuitem"
                    onClick={(e) => handleListSelected(e, 0)}
                    onKeyDown={(e) => handleListSelected(e, 0)}
                  >
                    <div className="srchaddr_zipcode">
                      <strong className="blind">우편번호</strong>
                      {/* <span className="num">{datas.zipNo}</span> */}
                    </div>
                    <dl className="srchaddr_info">
                      <dt className="info_tit">도로명</dt>
                      <dd className="info_cont">
                        {/* <span>{datas.lnmAdres}</span> */}
                        <span>{datas.roadAddr}</span>
                      </dd>
                      <dt className="info_tit">지번</dt>
                      <dd className="info_cont">
                        {/* <span>{datas.rnAdres}</span> */}
                        <span>{datas.jibunAddr}</span>
                        <span className="srchaddr_rel" />
                      </dd>
                    </dl>
                  </li>
                ) : (
                  datas.map((data, i) => (
                    <li
                      key={data.roadAddr}
                      role="menuitem"
                      onClick={(e) => handleListSelected(e, i)}
                      onKeyDown={(e) => handleListSelected(e, i)}
                    >
                      <div className="srchaddr_zipcode">
                        <strong className="blind">우편번호</strong>
                        <span className="num">{data.zipNo}</span>
                      </div>
                      <dl className="srchaddr_info">
                        <dt className="info_tit">도로명</dt>
                        <dd className="info_cont">
                          {/* <span>{data.lnmAdres}</span> */}
                          <span>{data.roadAddr}</span>
                        </dd>
                        <dt className="info_tit">지번</dt>
                        <dd className="info_cont">
                          {/* <span>{data.rnAdres}</span> */}
                          <span>{data.jibunAddr}</span>
                          <span className="srchaddr_rel" />
                        </dd>
                      </dl>
                    </li>
                  ))
                )}
              </ul>

              {/* 더보기 */}
              <div className="srchaddr_more">
                <button type="button" className="more_btn">
                  더보기(1/7)
                </button>
              </div>
            </div>
          </div>
        )
      }

      {/* 검색 결과에서 하나를 선택하면 */}
      {isSelected && (
        <div className="srchaddr_sec srchaddr_sec_detail">
          <h2 className="blind">상세주소 입력</h2>
          <div className="srchaddr_final">
            <dl className="srchaddr_info">
              <dt className="info_tit">우편번호</dt>
              <dd name="zipcd" className="info_cont">
                <span className="num">{selectedItem.zipCode}</span>
              </dd>
              <dt className="info_tit">도로명</dt>
              <dd name="roadNmAddr" className="info_cont">
                <span className="notranslate">{selectedItem.streetAddr}</span>
              </dd>
              <dt className="info_tit">지번</dt>
              <dd name="lotnoAddr" className="info_cont">
                <span className="notranslate">{selectedItem.lotAddr}</span>
              </dd>
            </dl>
          </div>
          <div className="srchaddr_detail">
            <span className="srchaddr_input">
              <input
                name="dtlAddr"
                type="text"
                title="상세주소 입력"
                className="input_txt"
                placeholder="상세주소를 입력해주세요."
                maxLength="40"
                onChange={handleChange}
              />
            </span>
            <div className="srchaddr_btnarea">
              <button
                type="button"
                onClick={handleIsOpen}
                className="srchaddr_btn"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ZipCodeSearchResult;
