import React, { useState } from 'react';

function ZipCodeSearchResult({ datas, handleSelected, isSelected }) {
  const [selectedItem, setSelectedItem] = useState({
    zipNo: '',
    lnmAdres: '',
    rnAdres: '',
    detailAddr: '',
  });

  const handleListSelected = (e, i) => {
    e.preventDefault();
    console.log(e);
    console.log(e.target);
    console.log(datas);
    handleSelected(!isSelected);
    console.log(`i : ${i}`);
    console.log(datas[i].zipNo);
    console.log(datas[i].lnmAdres);
    console.log(datas[i].rnAdres);
    setSelectedItem((pre) => ({
      ...pre,
      zipNo: datas[i].zipNo,
      lnmAdres: datas[i].lnmAdres,
      rnAdres: datas[i].rnAdres,
    }));
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
                <em>검색한 결과 총 {datas.length} 건 입니다.</em>
              </p>
            </div>

            <div className="srchaddr_result">
              <ul className="result_list">
                {datas.map((data, i) => (
                  <li
                    key={data.lnmAdres}
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
                        <span>{data.lnmAdres}</span>
                      </dd>
                      <dt className="info_tit">지번</dt>
                      <dd className="info_cont">
                        <span>{data.rnAdres}</span>
                        <span className="srchaddr_rel" />
                      </dd>
                    </dl>
                  </li>
                ))}
              </ul>

              {/* 더보기 */}
              {/* <div className="srchaddr_more">
              <button type="button" className="more_btn">
                더보기(1/9)
              </button>
            </div> */}
            </div>
          </div>
        )
      }

      {/* 검색 결과가 0건일 때 */}
      {/* <div
        className="srchaddr_sec srchaddr_sec_result"
        // style={{ display: 'none' }}
      >
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

      {/* 검색 결과가 있을 때 */}
      {/* <div className="srchaddr_sec srchaddr_sec_result">
        <h2 className="blind">주소 검색결과</h2>
        <div className="srchaddr_notice">
          <p className="notice_txt">
            <em>검색한 결과 총 44 건 입니다.</em>
          </p>
        </div>

        <div className="srchaddr_result">
          <ul className="result_list">
            <li
              data-zipcd="12621"
              data-defroadnmaddr="경기도 여주시 세종로 17 (홍문동)"
              data-deflotnoaddr="경기도 여주시 홍문동 111-15"
              data-defroadnmaddreng="17, Sejong-ro Yeoju-si, Gyeonggi-do"
              data-deflotnoaddreng="111-15, Hongmun-dong, Yeoju-si, Gyeonggi-do"
              data-roadnmbascaddr="경기도 여주시 세종로"
              data-roadnmdtladdr="17"
              data-roadnmadddtladdr="(홍문동)"
              data-lotnobascaddr="경기도 여주시 홍문동"
              data-lotnodtladdr="111-15"
            >
              <div className="srchaddr_zipcode">
                <strong className="blind">우편번호</strong>
                <a
                  href="/"
                  // onClick="Zipcd.showZipcdDtl(this)"
                >
                  <span className="num">12621</span>
                </a>
              </div>
              <dl className="srchaddr_info">
                <dt className="info_tit">도로명</dt>
                <dd className="info_cont">
                  <a
                    href="/"
                    // onClick="Zipcd.showZipcdDtl(this)"
                  >
                    <span>경기도 여주시 세종로 17 (홍문동)</span>
                  </a>
                </dd>
                <dt className="info_tit">지번</dt>
                <dd className="info_cont">
                  <a
                    href="/"
                    // onClick="Zipcd.showZipcdDtl(this)"
                  >
                    <span>경기도 여주시 홍문동 111-15</span>
                  </a>
                  <span className="srchaddr_rel" />
                </dd>
              </dl>
            </li>
            <li
              data-zipcd="12621"
              data-defroadnmaddr="경기도 여주시 세종로 17-1 (홍문동)"
              data-deflotnoaddr="경기도 여주시 홍문동 111-2"
              data-defroadnmaddreng="17-1, Sejong-ro Yeoju-si, Gyeonggi-do"
              data-deflotnoaddreng="111-2, Hongmun-dong, Yeoju-si, Gyeonggi-do"
              data-rellotno="경기도 여주시 홍문동 111-16"
              data-roadnmbascaddr="경기도 여주시 세종로"
              data-roadnmdtladdr="17-1"
              data-roadnmadddtladdr="(홍문동)"
              data-lotnobascaddr="경기도 여주시 홍문동"
              data-lotnodtladdr="111-2"
            >
              <div className="srchaddr_zipcode">
                <strong className="blind">우편번호</strong>
                <a
                  href="/"
                  // onClick="Zipcd.showZipcdDtl(this)"
                >
                  <span className="num">12621</span>
                </a>
              </div>
              <dl className="srchaddr_info">
                <dt className="info_tit">도로명</dt>
                <dd className="info_cont">
                  <a
                    href="/"
                    // onClick="Zipcd.showZipcdDtl(this)"
                  >
                    <span>경기도 여주시 세종로 17-1 (홍문동)</span>
                  </a>
                </dd>
                <dt className="info_tit">지번</dt>
                <dd className="info_cont">
                  <a
                    href="/"
                    // onClick="Zipcd.showZipcdDtl(this)"
                  >
                    <span>경기도 여주시 홍문동 111-2</span>
                  </a>
                  <span className="srchaddr_rel">
                    <span className="rel_txt">
                      [관련지번]경기도 여주시 홍문동 111-16
                    </span>
                    <button
                      type="button"
                      className="rel_btn"
                      // onClick="Zipcd.toggleRelLotno(this);"
                      // style="display:none"
                    >
                      <span className="rel_btn_open">더보기</span>
                      <span className="rel_btn_close">접기</span>
                    </button>
                  </span>
                </dd>
              </dl>
            </li>
            <li
              data-zipcd="12627"
              data-defroadnmaddr="경기도 여주시 세종로 64-17 (창동)"
              data-deflotnoaddr="경기도 여주시 창동 159-25"
              data-defroadnmaddreng="64-17, Sejong-ro Yeoju-si, Gyeonggi-do"
              data-deflotnoaddreng="159-25, Chang-dong, Yeoju-si, Gyeonggi-do"
              data-roadnmbascaddr="경기도 여주시 세종로"
              data-roadnmdtladdr="64-17"
              data-roadnmadddtladdr="(창동)"
              data-lotnobascaddr="경기도 여주시 창동"
              data-lotnodtladdr="159-25"
            >
              <div className="srchaddr_zipcode">
                <strong className="blind">우편번호</strong>
                <a
                  href="/"
                  // onClick="Zipcd.showZipcdDtl(this)"
                >
                  <span className="num">12627</span>
                </a>
              </div>
              <dl className="srchaddr_info">
                <dt className="info_tit">도로명</dt>
                <dd className="info_cont">
                  <a
                    href="/"
                    // onClick="Zipcd.showZipcdDtl(this)"
                  >
                    <span>경기도 여주시 세종로 64-17 (창동)</span>
                  </a>
                </dd>
                <dt className="info_tit">지번</dt>
                <dd className="info_cont">
                  <a
                    href="/"
                    // onClick="Zipcd.showZipcdDtl(this)"
                  >
                    <span>경기도 여주시 창동 159-25</span>
                  </a>
                  <span className="srchaddr_rel" />
                </dd>
              </dl>
            </li>
            <li
              data-zipcd="12627"
              data-defroadnmaddr="경기도 여주시 세종로 68-17 (홍문동)"
              data-deflotnoaddr="경기도 여주시 홍문동 231"
              data-defroadnmaddreng="68-17, Sejong-ro Yeoju-si, Gyeonggi-do"
              data-deflotnoaddreng="231, Hongmun-dong, Yeoju-si, Gyeonggi-do"
              data-roadnmbascaddr="경기도 여주시 세종로"
              data-roadnmdtladdr="68-17"
              data-roadnmadddtladdr="(홍문동)"
              data-lotnobascaddr="경기도 여주시 홍문동"
              data-lotnodtladdr="231"
            >
              <div className="srchaddr_zipcode">
                <strong className="blind">우편번호</strong>
                <a
                  href="/"
                  // onClick="Zipcd.showZipcdDtl(this)"
                >
                  <span className="num">12627</span>
                </a>
              </div>
              <dl className="srchaddr_info">
                <dt className="info_tit">도로명</dt>
                <dd className="info_cont">
                  <a
                    href="/"
                    // onClick="Zipcd.showZipcdDtl(this)"
                  >
                    <span>경기도 여주시 세종로 68-17 (홍문동)</span>
                  </a>
                </dd>
                <dt className="info_tit">지번</dt>
                <dd className="info_cont">
                  <a
                    href="/"
                    // onClick="Zipcd.showZipcdDtl(this)"
                  >
                    <span>경기도 여주시 홍문동 231</span>
                  </a>
                  <span className="srchaddr_rel" />
                </dd>
              </dl>
            </li>
            <li
              data-zipcd="12633"
              data-defroadnmaddr="경기도 여주시 세종로 145-17 (홍문동)"
              data-deflotnoaddr="경기도 여주시 홍문동 428-6"
              data-defroadnmaddreng="145-17, Sejong-ro Yeoju-si, Gyeonggi-do"
              data-deflotnoaddreng="428-6, Hongmun-dong, Yeoju-si, Gyeonggi-do"
              data-roadnmbascaddr="경기도 여주시 세종로"
              data-roadnmdtladdr="145-17"
              data-roadnmadddtladdr="(홍문동)"
              data-lotnobascaddr="경기도 여주시 홍문동"
              data-lotnodtladdr="428-6"
            >
              <div className="srchaddr_zipcode">
                <strong className="blind">우편번호</strong>
                <a
                  href="/"
                  // onClick="Zipcd.showZipcdDtl(this)"
                >
                  <span className="num">12633</span>
                </a>
              </div>
              <dl className="srchaddr_info">
                <dt className="info_tit">도로명</dt>
                <dd className="info_cont">
                  <a
                    href="/"
                    // onClick="Zipcd.showZipcdDtl(this)"
                  >
                    <span>경기도 여주시 세종로 145-17 (홍문동)</span>
                  </a>
                </dd>
                <dt className="info_tit">지번</dt>
                <dd className="info_cont">
                  <a
                    href="/"
                    // onClick="Zipcd.showZipcdDtl(this)"
                  >
                    <span>경기도 여주시 홍문동 428-6</span>
                  </a>
                  <span className="srchaddr_rel" />
                </dd>
              </dl>
            </li>
          </ul>
          <div className="srchaddr_more">
            <button
              type="button"
              className="more_btn"
              // onClick="Zipcd.goPage(2)"
            >
              더보기(1/9)
            </button>
          </div>
        </div>
      </div> */}

      {/* 검색 결과가 없을 때 */}
      {/* <div className="srchaddr_sec srchaddr_sec_noresult">
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
              행정안전부 도로명주소 시스템에 주소 등록 후 익일부터 주소 검색이
              가능합니다.
            </li>
            <li>
              도로명주소 홈페이지에서 주소 등록 여부를 확인해주세요.
              <br />
              · 도로명주소 안내 홈페이지 : https://www.juso.go.kr
              <br />· 도로명주소 도움센터 : 1588-0061
            </li>
          </ul>
        </div>
      </div> */}

      {/* 검색 결과에서 하나를 선택하면 */}
      {isSelected && (
        <div className="srchaddr_sec srchaddr_sec_detail">
          <h2 className="blind">상세주소 입력</h2>
          <div className="srchaddr_final">
            <dl className="srchaddr_info">
              <dt className="info_tit">우편번호</dt>
              <dd name="zipcd" className="info_cont">
                <span className="num">{selectedItem.zipNo}</span>
              </dd>
              <dt className="info_tit">도로명</dt>
              <dd name="roadNmAddr" className="info_cont">
                <span className="notranslate">{selectedItem.lnmAdres}</span>
              </dd>
              <dt className="info_tit">지번</dt>
              <dd name="lotnoAddr" className="info_cont">
                <span className="notranslate">{selectedItem.rnAdres}</span>
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
              />
            </span>
            <div className="srchaddr_btnarea">
              <a href="/" className="srchaddr_btn">
                확인
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ZipCodeSearchResult;
