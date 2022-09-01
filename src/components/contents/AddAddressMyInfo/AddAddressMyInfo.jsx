import React, { useState, useEffect } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios/index';
import './AddAddressMyInfo.scss';
import toast, { Toaster } from 'react-hot-toast';
import { AddAddressZipCode } from '../index';

function AddAddressMyInfo({ state }) {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [isReset, setIsReset] = useState(false);
  const [code, setCode] = useState({
    phoneCode: '010',
    homePhoneCode: '선택',
  });
  const [data, setData] = useState({
    addrName: '',
    recipient: '',
    phone: '',
    homePhone: '',
  });
  const [selectedItem, setSelectedItem] = useState({
    zipCode: '',
    streetAddr: '', // 도로명
    lotAddr: '', // 지번
    detailAddr: '',
  });
  const [valid, setValid] = useState({
    addrName: false,
    recipient: false,
    phone: false,
    homePhone: true,
    zipCode: false,
  });
  const [error, setError] = useState({
    addrName: '',
    recipient: '',
    phone: '',
    homePhone: '',
    zipCode: '',
  });

  useEffect(() => {
    if (state !== undefined) {
      setCode({
        ...code,
        phoneCode: state.phone.slice(0, 3),
        homePhoneCode:
          state.homePhone.length === 0 ? '선택' : state.homePhone.slice(0, 3),
      });
      setData({
        ...data,
        addrName: state.addrName,
        recipient: state.recipient,
        phone: state.phone.slice(3),
        homePhone: state.homePhone.slice(3),
      });
      setSelectedItem({
        ...selectedItem,
        zipCode: state.zipCode,
        streetAddr: state.streetAddr, // 도로명
        lotAddr: state.lotAddr, // 지번
      });
      setValid({
        addrName: true,
        recipient: true,
        phone: true,
        homePhone: true,
        zipCode: true,
      });
    }
  }, []);

  useEffect(() => {
    if (selectedItem.zipCode.length !== 0) {
      setValid({
        ...valid,
        zipCode: true,
      });
    }
  }, [selectedItem.zipCode]);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleCodeChange = (e) => {
    setCode({
      ...code,
      [e.target.id]: e.target.value,
    });
  };

  const handleNumber = (e) => {
    const { name, value } = e.target;
    const number = value.replace(/[^0-9]/gi, '');
    setData({ ...data, [name]: number });
  };

  const isBlank = (value) => {
    if (value.length === 0) return true;
    return false;
  };

  const checkedValid = (name, value) => {
    if (isBlank(value)) {
      setValid({
        ...valid,
        [name]: false,
      });
      setError({
        ...error,
        [name]: '값을 입력해주세요.',
      });

      if (name === 'homePhone') {
        console.log(name, value);
        setValid({
          ...valid,
          [name]: true,
        });
        setError({
          ...error,
          [name]: '',
        });
      }
    } else {
      setValid({
        ...valid,
        [name]: true,
      });
      setError({
        ...error,
        [name]: '',
      });

      if (name === 'homePhone') {
        if (value.length === 0 || (value.length > 0 && value.length > 7)) {
          setValid({
            ...valid,
            [name]: true,
          });
          setError({
            ...error,
            [name]: '',
          });
        } else {
          setValid({
            ...valid,
            [name]: false,
          });
          setError({
            ...error,
            [name]: '값을 입력해주세요.',
          });
        }
      }

      if (name === 'phone' && value.length > 7) {
        setValid({
          ...valid,
          [name]: true,
        });
        setError({
          ...error,
          [name]: '',
        });
      }
    }
  };

  const handleInputData = (e) => {
    const { name, value } = e.target;
    checkedValid(name, value);
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    checkedValid('addrName', data.addrName);
    checkedValid('recipient', data.recipient);
    checkedValid('phone', data.phone);
    checkedValid('homePhone', data.homePhone);
    checkedValid('zipCode', selectedItem.zipCode);

    if (Object.values(valid).every((v) => v === true) === true) {
      const token = localStorage.getItem('token');
      if (state !== undefined) {
        const homeNumber = code.homePhoneCode + data.homePhone;
        axios
          .put(
            `http://13.209.26.150:9000/users/shipping-addr`,
            {
              addrId: state.addrId,
              addrName: data.addrName,
              recipient: data.recipient,
              phone: `${code.phoneCode}${data.phone}`,
              homePhone: `${code.homePhoneCode === '선택' ? '' : homeNumber}`,
              zipCode: selectedItem.zipCode,
              streetAddr: `${selectedItem.streetAddr} ${selectedItem.detailAddr}`,
              lotAddr: `${selectedItem.lotAddr} ${selectedItem.detailAddr}`,
            },
            {
              headers: {
                Authorization: JSON.parse(token),
              },
            },
          )
          .then(() => {
            navigate(-1);
            toast.success('배송지가 수정되었습니다.');
          });
      } else {
        const homeNumber = code.homePhoneCode + data.homePhone;
        axios
          .post(
            'http://13.209.26.150:9000/users/shipping-addr',
            {
              addrName: data.addrName,
              recipient: data.recipient,
              phone: `${code.phoneCode}${data.phone}`,
              homePhone: `${code.homePhoneCode === '선택' ? '' : homeNumber}`,
              zipCode: selectedItem.zipCode,
              streetAddr: `${selectedItem.streetAddr} ${selectedItem.detailAddr}`,
              lotAddr: `${selectedItem.lotAddr} ${selectedItem.detailAddr}`,
            },
            {
              headers: {
                Authorization: JSON.parse(token),
              },
            },
          )
          .then(() => {
            navigate(-1);
            toast.success('배송지가 추가되었습니다.');
          });
      }
    } else {
      Object.entries(valid).map((v, key) => console.log(v, key));
      toast.error('비어있는 값이 있습니다. 값을 입력해주세요.');
    }
  };

  const onReset = () => {
    setIsReset(!isReset);
    setData({
      ...data,
      addrName: '',
      recipient: '',
      phone: '',
      homePhone: '',
    });
    setSelectedItem({
      ...selectedItem,
      zipCode: '',
      streetAddr: '', // 도로명
      lotAddr: '', // 지번
      detailAddr: '',
    });
    setValid({
      ...valid,
      addrName: false,
      recipient: false,
      phone: false,
      homePhone: true,
      zipCode: false,
    });
    setError({
      ...error,
      addrName: '',
      recipient: '',
      phone: '',
      homePhone: '',
      zipCode: '',
    });
  };

  return (
    <>
      <div id="m_content" style={isOpen ? { display: 'none' } : {}}>
        <div className="m_addrbx order_sectionwrap">
          <div className="delivery_detail">
            <div
              className="order_article new_delivery_add"
              style={{ display: 'block' }}
            >
              <div className="order_artcont">
                <div className="order_infoset">
                  <form onSubmit={handleSubmit}>
                    <ul className="order_infolist">
                      <li className="oi_th_inp">
                        <span className="oi_th">
                          <label htmlFor="addrName">주소별칭</label>
                        </span>
                        <div className="oi_cont">
                          <span className="inpbx">
                            <input
                              type="text"
                              id="addrName"
                              name="addrName"
                              placeholder="주소별칭 입력"
                              value={data.addrName}
                              maxLength="20"
                              onChange={handleInputData}
                            />
                          </span>
                          <span className="cmem_noti">
                            <em className="usable_value">
                              <p>{error.addrName}</p>
                            </em>
                          </span>
                        </div>
                      </li>

                      <li className="oi_th_inp">
                        <span className="oi_th">
                          <label htmlFor="recipient">받는 분</label>
                        </span>
                        <div className="oi_cont">
                          <span className="inpbx">
                            <input
                              type="text"
                              id="recipient"
                              name="recipient"
                              placeholder="받는분 성함입력"
                              value={data.recipient}
                              maxLength="20"
                              onChange={handleInputData}
                            />
                          </span>
                          <span className="cmem_noti">
                            <em className="usable_value">
                              <p>{error.recipient}</p>
                            </em>
                          </span>
                        </div>
                      </li>
                      <li className="oi_th_inp">
                        <span className="oi_th">
                          <label htmlFor="phone">휴대폰</label>
                        </span>
                        <div className="oi_cont">
                          <div className="oi_phone_pd">
                            <span className="p_first">
                              <span className="des_select">
                                <span className="cc_ellip_in selected select_opt">
                                  {code.phoneCode}
                                </span>
                                <span className="sp_com sel_arrow">&nbsp;</span>
                                <span className="hide_select">
                                  <select
                                    id="phoneCode"
                                    title="휴대폰 앞자리"
                                    onChange={handleCodeChange}
                                  >
                                    <option value="010">010</option>
                                    <option value="011">011</option>
                                    <option value="016">016</option>
                                    <option value="017">017</option>
                                    <option value="018">018</option>
                                    <option value="019">019</option>
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
                                name="phone"
                                value={data.phone}
                                maxLength="8"
                                onChange={handleInputData}
                                onKeyUp={handleNumber}
                              />
                            </span>
                            <span className="cmem_noti">
                              <em className="usable_value">
                                <p>{error.phone}</p>
                              </em>
                            </span>
                          </div>
                        </div>
                      </li>
                      <li className="oi_th_inp">
                        <span className="oi_th">
                          <label htmlFor="homePhone">전화번호(선택)</label>
                        </span>
                        <div className="oi_cont">
                          <div className="oi_phone_pd">
                            <span className="p_first">
                              <span className="des_select">
                                <span className="cc_ellip_in select_opt">
                                  {code.homePhoneCode}
                                </span>
                                <span className="sp_com sel_arrow">&nbsp;</span>
                                <span className="hide_select">
                                  <select
                                    id="homePhoneCode"
                                    title="전화번호 앞자리"
                                    onChange={handleCodeChange}
                                  >
                                    <option value="">선택</option>
                                    <option value="02">02</option>
                                    <option value="031">031</option>
                                    <option value="032">032</option>
                                    <option value="033">033</option>
                                    <option value="041">041</option>
                                    <option value="042">042</option>
                                    <option value="043">043</option>
                                    <option value="051">051</option>
                                    <option value="044">044</option>
                                    <option value="052">052</option>
                                    <option value="053">053</option>
                                    <option value="054">054</option>
                                    <option value="055">055</option>
                                    <option value="061">061</option>
                                    <option value="062">062</option>
                                    <option value="063">063</option>
                                    <option value="064">064</option>
                                    <option value="070">070</option>
                                    <option value="080">080</option>
                                    <option value="0505">0505</option>
                                    <option value="0507">0507</option>
                                    <option value="010">010</option>
                                    <option value="011">011</option>
                                    <option value="016">016</option>
                                    <option value="017">017</option>
                                    <option value="018">018</option>
                                    <option value="019">019</option>
                                  </select>
                                </span>
                              </span>
                            </span>
                            <span className="inpbx">
                              <input
                                type="tel"
                                id="homePhone"
                                name="homePhone"
                                value={data.homePhone}
                                maxLength="8"
                                placeholder="전화번호(숫자만 입력)"
                                title="전화번호(숫자만 입력)"
                                onChange={handleInputData}
                                onKeyUp={handleNumber}
                              />
                            </span>
                            <span className="cmem_noti">
                              <em className="usable_value">
                                <p>{error.homePhone}</p>
                              </em>
                            </span>
                          </div>
                        </div>
                      </li>
                      <li className="oi_th_inp">
                        <span className="oi_th">
                          <label htmlFor="zipCode">배송주소</label>
                        </span>
                        <div className="oi_cont">
                          <div className="oi_cblock oi_post_pd">
                            <div className="in_bwrap">
                              <span className="in_b">
                                <span className="inpbx">
                                  <input
                                    type="text"
                                    name="zipCode"
                                    title="우편번호 입력"
                                    readOnly="readonly"
                                    onClick={handleIsOpen}
                                    onChange={handleInputData}
                                    value={selectedItem.zipCode}
                                  />
                                </span>
                                <span className="cmem_noti">
                                  <em className="usable_value">
                                    <p>{error.zipCode}</p>
                                  </em>
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
                                {selectedItem.streetAddr}{' '}
                                {selectedItem.detailAddr}
                              </span>
                              <strong className="info_tit">지번</strong>
                              <span id="lotnoAddr" className="info_cont">
                                {selectedItem.lotAddr} {selectedItem.detailAddr}
                              </span>
                            </div>
                          )}
                        </div>
                      </li>
                    </ul>
                    <div className="order_btnarea2 order_btnarea3">
                      <ul className="bnbox">
                        <li>
                          <button
                            type="button"
                            onClick={onReset}
                            className="b_def"
                          >
                            초기화
                          </button>
                        </li>

                        <li>
                          <Link to="/destination" className="b_def">
                            취소
                          </Link>
                        </li>

                        <li>
                          <button type="submit" className="b_def5">
                            {state !== undefined ? '수정완료' : '등록'}
                          </button>
                        </li>
                      </ul>
                    </div>

                    {/* <input type="hidden" name="shpplocSeq" defaultValue="" />
                  <input type="hidden" name="bascShpplocYn" defaultValue="" />
                  <input type="hidden" name="oldzipCode" defaultValue="" />
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
        <Toaster
          containerStyle={{
            top: 30,
          }}
        />
      </div>

      {/* 우편번호 찾기 */}
      {isOpen && (
        <AddAddressZipCode
          handleIsOpen={handleIsOpen}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      )}
    </>
  );
}

export default AddAddressMyInfo;
