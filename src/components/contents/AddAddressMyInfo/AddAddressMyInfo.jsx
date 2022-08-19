import React from 'react';
import { Link } from 'react-router-dom';
import './AddAddressMyInfo.scss';

function AddAddressMyInfo(props) {
  const { handleIsOpen, selectedItem } = props;

  const handleAdd = (e) => {
    e.preventDefault();
    handleIsOpen();
    window.location.href = '/my';
  };

  return (
    <div id="m_content">
      <div className="m_addrbx order_sectionwrap">
        <div className="delivery_detail">
          <div
            className="order_article new_delivery_add"
            style={{ display: 'block' }}
          >
            <div className="order_artcont">
              <div className="order_infoset">
                <form onSubmit={handleAdd}>
                  <ul className="order_infolist">
                    <li className="oi_th_inp">
                      <span className="oi_th">
                        <label htmlFor="shpplocAntnmNm">주소별칭</label>
                      </span>
                      <div className="oi_cont">
                        <span className="inpbx">
                          <input
                            type="text"
                            id="shpplocAntnmNm"
                            name="shpplocAntnmNm"
                            placeholder="주소별칭 입력"
                            defaultValue=""
                            maxLength="20"
                          />
                        </span>
                      </div>
                    </li>

                    <li className="oi_th_inp">
                      <span className="oi_th">
                        <label htmlFor="rcptpeNm">받는 분</label>
                      </span>
                      <div className="oi_cont">
                        <span className="inpbx">
                          <input
                            type="text"
                            id="rcptpeNm"
                            name="rcptpeNm"
                            placeholder="받는분 성함입력"
                            defaultValue=""
                            maxLength="20"
                          />
                        </span>
                      </div>
                    </li>
                    <li className="oi_th_inp">
                      <span className="oi_th">
                        <label htmlFor="phoneNum1">휴대폰</label>
                      </span>
                      <div className="oi_cont">
                        <div className="oi_phone_pd">
                          <span className="p_first">
                            <span className="des_select">
                              <span className="cc_ellip_in selected">010</span>
                              <span className="sp_com sel_arrow">&nbsp;</span>
                              <span className="hide_select">
                                <select id="phoneNum1" title="휴대폰 앞자리">
                                  <option
                                    value="010"
                                    addtoptnval1=""
                                    addtoptnval2=""
                                  >
                                    010
                                  </option>
                                  <option
                                    value="011"
                                    addtoptnval1=""
                                    addtoptnval2=""
                                  >
                                    011
                                  </option>
                                  <option
                                    value="016"
                                    addtoptnval1=""
                                    addtoptnval2=""
                                  >
                                    016
                                  </option>
                                  <option
                                    value="017"
                                    addtoptnval1=""
                                    addtoptnval2=""
                                  >
                                    017
                                  </option>
                                  <option
                                    value="018"
                                    addtoptnval1=""
                                    addtoptnval2=""
                                  >
                                    018
                                  </option>
                                  <option
                                    value="019"
                                    addtoptnval1=""
                                    addtoptnval2=""
                                  >
                                    019
                                  </option>
                                </select>
                              </span>
                            </span>
                          </span>
                          <span className="inpbx">
                            <input
                              type="tel"
                              title="휴대폰(숫자만 입력)"
                              placeholder="휴대폰(숫자만 입력)"
                              id="phoneNum2"
                              defaultValue=""
                              maxLength="8"
                            />
                          </span>
                        </div>
                      </div>
                    </li>
                    <li className="oi_th_inp">
                      <span className="oi_th">
                        <label htmlFor="lf_like4">전화번호(선택)</label>
                      </span>
                      <div className="oi_cont">
                        <div className="oi_phone_pd">
                          <span className="p_first">
                            <span className="des_select">
                              <span className="cc_ellip_in">선택</span>
                              <span className="sp_com sel_arrow">&nbsp;</span>
                              <span className="hide_select">
                                <select id="telNum1" title="전화번호 앞자리">
                                  <option defaultValue="">선택</option>
                                  <option
                                    value="02"
                                    addtoptnval1=""
                                    addtoptnval2=""
                                  >
                                    02
                                  </option>
                                  <option
                                    value="031"
                                    addtoptnval1=""
                                    addtoptnval2=""
                                  >
                                    031
                                  </option>
                                  <option
                                    value="032"
                                    addtoptnval1=""
                                    addtoptnval2=""
                                  >
                                    032
                                  </option>
                                  <option
                                    value="033"
                                    addtoptnval1=""
                                    addtoptnval2=""
                                  >
                                    033
                                  </option>
                                  <option
                                    value="041"
                                    addtoptnval1=""
                                    addtoptnval2=""
                                  >
                                    041
                                  </option>
                                  <option
                                    value="042"
                                    addtoptnval1=""
                                    addtoptnval2=""
                                  >
                                    042
                                  </option>
                                  <option
                                    value="043"
                                    addtoptnval1=""
                                    addtoptnval2=""
                                  >
                                    043
                                  </option>
                                  <option
                                    value="051"
                                    addtoptnval1=""
                                    addtoptnval2=""
                                  >
                                    051
                                  </option>
                                  <option
                                    value="044"
                                    addtoptnval1=""
                                    addtoptnval2=""
                                  >
                                    044
                                  </option>
                                  <option
                                    value="052"
                                    addtoptnval1=""
                                    addtoptnval2=""
                                  >
                                    052
                                  </option>
                                  <option
                                    value="053"
                                    addtoptnval1=""
                                    addtoptnval2=""
                                  >
                                    053
                                  </option>
                                  <option
                                    value="054"
                                    addtoptnval1=""
                                    addtoptnval2=""
                                  >
                                    054
                                  </option>
                                  <option
                                    value="055"
                                    addtoptnval1=""
                                    addtoptnval2=""
                                  >
                                    055
                                  </option>
                                  <option
                                    value="061"
                                    addtoptnval1=""
                                    addtoptnval2=""
                                  >
                                    061
                                  </option>
                                  <option
                                    value="062"
                                    addtoptnval1=""
                                    addtoptnval2=""
                                  >
                                    062
                                  </option>
                                  <option
                                    value="063"
                                    addtoptnval1=""
                                    addtoptnval2=""
                                  >
                                    063
                                  </option>
                                  <option
                                    value="064"
                                    addtoptnval1=""
                                    addtoptnval2=""
                                  >
                                    064
                                  </option>
                                  <option
                                    value="070"
                                    addtoptnval1=""
                                    addtoptnval2=""
                                  >
                                    070
                                  </option>
                                  <option
                                    value="080"
                                    addtoptnval1=""
                                    addtoptnval2=""
                                  >
                                    080
                                  </option>
                                  <option
                                    value="0505"
                                    addtoptnval1=""
                                    addtoptnval2=""
                                  >
                                    0505
                                  </option>
                                  <option
                                    value="0507"
                                    addtoptnval1=""
                                    addtoptnval2=""
                                  >
                                    0507
                                  </option>
                                  <option
                                    value="010"
                                    addtoptnval1=""
                                    addtoptnval2=""
                                  >
                                    010
                                  </option>
                                  <option
                                    value="011"
                                    addtoptnval1=""
                                    addtoptnval2=""
                                  >
                                    011
                                  </option>
                                  <option
                                    value="016"
                                    addtoptnval1=""
                                    addtoptnval2=""
                                  >
                                    016
                                  </option>
                                  <option
                                    value="017"
                                    addtoptnval1=""
                                    addtoptnval2=""
                                  >
                                    017
                                  </option>
                                  <option
                                    value="018"
                                    addtoptnval1=""
                                    addtoptnval2=""
                                  >
                                    018
                                  </option>
                                  <option
                                    value="019"
                                    addtoptnval1=""
                                    addtoptnval2=""
                                  >
                                    019
                                  </option>
                                </select>
                              </span>
                            </span>
                          </span>
                          <span className="inpbx">
                            <input
                              type="tel"
                              id="telNum2"
                              defaultValue=""
                              maxLength="8"
                              placeholder="전화번호(숫자만 입력)"
                              title="전화번호(숫자만 입력)"
                            />
                          </span>
                        </div>
                      </div>
                    </li>
                    <li className="oi_th_inp">
                      <span className="oi_th">
                        <label htmlFor="zipcd">배송주소</label>
                      </span>
                      <div className="oi_cont">
                        <div className="oi_cblock oi_post_pd">
                          <div className="in_bwrap">
                            <span className="in_b">
                              <span className="inpbx">
                                <input
                                  type="text"
                                  name="zipcd"
                                  title="우편번호 입력"
                                  readOnly="readonly"
                                  onClick={handleIsOpen}
                                  value={selectedItem.zipNo}
                                />
                              </span>
                            </span>
                          </div>
                          <button
                            type="button"
                            className="b_def3"
                            onClick={handleIsOpen}
                          >
                            우편번호
                          </button>
                        </div>
                        {selectedItem.detailAddr && (
                          <div className="addr_info">
                            <strong className="info_tit">도로명</strong>
                            <span id="roadNmAddr" className="info_cont">
                              {selectedItem.lnmAdres} {selectedItem.detailAddr}
                            </span>
                            <strong className="info_tit">지번</strong>
                            <span id="lotnoAddr" className="info_cont">
                              {selectedItem.rnAdres} {selectedItem.detailAddr}
                            </span>
                          </div>
                        )}
                      </div>
                    </li>
                  </ul>
                  <div className="order_btnarea2 order_btnarea3">
                    <ul className="bnbox">
                      <li>
                        <a
                          // href="javascript:void(0);"
                          href="/"
                          // onClick="ShpplocForm.reset()"
                          className="b_def"
                        >
                          초기화
                        </a>
                      </li>

                      <li>
                        <Link to="/destination" className="b_def">
                          취소
                        </Link>
                      </li>

                      <li>
                        <button type="submit" className="b_def5">
                          등록
                        </button>
                      </li>
                    </ul>
                  </div>

                  {/* <input type="hidden" name="shpplocSeq" defaultValue="" />
                  <input type="hidden" name="bascShpplocYn" defaultValue="" />
                  <input type="hidden" name="oldZipcd" defaultValue="" />
                  <input type="hidden" name="roadNmBascAddr" defaultValue="" />
                  <input type="hidden" name="roadNmDtlAddr" defaultValue="" />
                  <input type="hidden" name="lotnoBascAddr" defaultValue="" />
                  <input type="hidden" name="lotnoDtlAddr" defaultValue="" />
                  <input
                    type="hidden"
                    name="mbrIptAddrTypeCd"
                    defaultValue=""
                  />
                  <input type="hidden" name="mbrIptAddr" defaultValue="" />
                  <input type="hidden" name="shpplocRegPstCd" defaultValue="" />
                  <input type="hidden" name="addrExamRstCd" defaultValue="" />
                  <input type="hidden" name="rcptpeTelno" defaultValue="" />
                  <input type="hidden" name="rcptpeHpno" defaultValue="" /> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddAddressMyInfo;
