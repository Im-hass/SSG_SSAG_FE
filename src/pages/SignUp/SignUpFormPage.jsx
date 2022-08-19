/* eslint-disable no-useless-escape */
import axios from 'axios';
import React, { useState, useEffect } from 'react';

import { Footer } from '../../components/common/index';
import {
  AgreementInputBtnSet,
  Button,
  MemberNotice,
  MobileHeader,
  OptionCheckInputArr,
  OptionCheckInput,
  RequireLabel,
  WithdrawTit,
} from '../../components/ui/index';
import { AddAddressZipCode } from '../../components/contents/index';
import SignUpTermTit from '../../components/ui/SignUpTermTit/SignUpTermTit';
import * as datas from '../../assets/datas';

function SignUpFormPage() {
  const {
    AGREEMENT_CONTENTS1,
    AGREEMENT_CONTENTS2,
    AGREEMENT_CONTENTS3,
    OPTION_CONTENTS1,
    OPTION_CONTENTS2,
    OPTION_CONTENTS3,
    OPTION_CONTENTS4,
  } = datas;

  const [inputData, setInputData] = useState({
    loginId: '',
    loginPwd: '',
    confirmPwd: '',
    name: '',
    email: '',
    phone: '',
    marketing1: 0,
    updateAt1: '',
    marketing2: 0,
    updateAt2: '',
    marketing3: 0,
    updateAt3: '',
  });

  const [valid, setValid] = useState({
    loginId: false,
    loginPwd: false,
    name: false,
    email: false,
    phone: false,
  });

  const [error, setError] = useState({
    loginId: '',
    loginPwd: '',
    email: '',
    phone: '',
  });

  const [clickZipCodeBtn, setClickZipCodeBtn] = useState(false);

  const validCheck = (data) => {
    const validValue = /^[a-zA-Z0-9]+$/;

    if (validValue.test(data)) return true;

    return false;
  };

  const emailValidCheck = (data) => {
    const validValue =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (validValue.test(data)) return true;

    return false;
  };

  const handleInputData = (e) => {
    if (e.target.name === 'loginId' || e.target.name === 'loginPwd') {
      const val = e.target.value;

      if (val !== undefined && val.length >= 6) {
        if (validCheck(val) === true) {
          setValid({ [e.target.name]: true });
          setError({
            [e.target.name]: '',
          });
        } else return;
      } else {
        setError({
          [e.target.name]: `${e.target.title}값이 유효하지 않습니다.`,
        });
      }
    }

    if (e.target.name === 'confirmPwd') {
      if (inputData.loginPwd === e.target.value) {
        setValid({ confirmPwd: true });
        setError({ loginPwd: '' });
      } else {
        setError({
          loginPwd: `${e.target.title}값이 유효하지 않습니다.`,
        });
      }
    }

    if (e.target.name === 'name') {
      if (e.target.value.length !== 0) {
        setValid({ name: true });
      } else {
        setValid({ name: false });
      }
    }

    if (e.target.name === 'email') {
      if (emailValidCheck(e.target.value) === true) {
        setValid({ email: true });
        setError({ email: '' });
      } else {
        setError({
          email: `${e.target.title}값이 유효하지 않습니다.`,
        });
      }
    }

    if (e.target.name === 'phone') {
      e.target.value = e.target.value
        .replace(/[^0-9]/g, '')
        .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
      setValid({ email: true });
    }

    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleCheckDuplicateIdBtn = () => {
    if (valid.loginId) {
      axios
        .get(
          `http://10.10.10.174:8081/comm-users/signup/overlap/${inputData.loginId}`,
        )
        .then((res) => {
          if (!res.data.result) setError({ loginId: res.data.message });
          else {
            setError({ loginId: res.data.result });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  // useEffect(() => {
  //   if (enteredPwdConfirm.length !== 0) {
  //     if (validEmail) {
  //       setEmailStatusMessage('');
  //       setInformation({ email: `${enteredPwdConfirm}` });
  //     } else {
  //       setEmailStatusMessage('이메일 형식에 맞지 않습니다.');
  //     }
  //   }
  // }, [enteredEmail]);

  const handleClickZipCodeBtn = () => {
    setClickZipCodeBtn((prev) => !prev);
  };

  const handleSubmitSignUpForm = (e) => {
    e.preventDefault();
  };

  return (
    <div id="m_container" className="mcom_container" data-iframe-height="">
      <MobileHeader title="신세계포인트 통합회원 가입" />
      {clickZipCodeBtn ? (
        <AddAddressZipCode handleIsOpen={handleClickZipCodeBtn} />
      ) : (
        <form id="joinForm" onSubmit={handleSubmitSignUpForm}>
          <div id="m_content" className="cmem_ct_join">
            <WithdrawTit title="회원 정보" />
            <div className="cmem_cont">
              <div className="cmem_row">
                <dl className="cmem_ip">
                  <dt>
                    <RequireLabel htmlFor="mbrLoginId" labelValue="아이디" />
                  </dt>
                  <dd>
                    <div className="cmem_inpbtn_set" id="idIpt">
                      <span className="cmem_inp_txt">
                        <input
                          type="text"
                          name="loginId"
                          title="아이디"
                          value={inputData.loginId}
                          maxLength={20}
                          placeholder="대소문자 또는 숫자로 6~20자리"
                          onChange={handleInputData}
                        />
                      </span>
                      <button
                        type="button"
                        className="cmem_btn cmem_btn_gray3"
                        onClick={handleCheckDuplicateIdBtn}
                      >
                        중복확인
                      </button>
                    </div>
                    <span className="cmem_noti">
                      <em className="usable_value">
                        <p>{error.loginId}</p>
                      </em>
                    </span>
                  </dd>
                </dl>
              </div>
              <div className="cmem_row">
                <dl className="cmem_ip">
                  <dt>
                    <RequireLabel htmlFor="pwd" labelValue="비밀번호" />
                  </dt>
                  <dd>
                    <div className="cmem_inp_txt">
                      <input
                        type="password"
                        name="loginPwd"
                        title="패스워드"
                        value={inputData.loginPwd}
                        maxLength={20}
                        placeholder="대소문자 또는 숫자로 6~20자리"
                        onChange={handleInputData}
                      />
                    </div>
                    <div className="cmem_inp_txt">
                      <input
                        type="password"
                        name="confirmPwd"
                        title="패스워드"
                        value={inputData.confirmPwd}
                        maxLength={20}
                        placeholder="비밀번호 재확인"
                        onChange={handleInputData}
                      />
                    </div>
                    <span className="cmem_noti">
                      <em className="usable_value">
                        <p>{error.loginPwd}</p>
                      </em>
                    </span>
                  </dd>
                </dl>
              </div>
              <div className="cmem_row">
                <dl className="cmem_ip">
                  <dt>
                    <RequireLabel htmlFor="mem_name" labelValue="이름" />
                  </dt>
                  <dd>
                    <div className="cmem_inp_txt">
                      <input
                        type="text"
                        name="name"
                        title="이름"
                        value={inputData.name}
                        maxLength={20}
                        onChange={handleInputData}
                      />
                    </div>
                  </dd>
                </dl>
              </div>
              <div className="cmem_row">
                <div className="cmem_user_phone">
                  <dl className="cmem_ip">
                    <dt>
                      <RequireLabel
                        htmlFor="mem_hpno"
                        labelValue="휴대폰번호"
                      />
                    </dt>
                    <dd>
                      <div className="cmem_inp_txt">
                        <input
                          type="tel"
                          name="phone"
                          title="휴대폰번호"
                          value={inputData.phone}
                          maxLength={20}
                          placeholder="ex) 010-1234-5678"
                          onChange={handleInputData}
                        />
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
              <div className="cmem_row">
                <dl className="cmem_ip">
                  <dt>
                    <RequireLabel htmlFor="email" labelValue="이메일주소" />
                  </dt>
                  <dd>
                    <div className="cmem_inp_txt">
                      <input
                        type="email"
                        name="email"
                        title="이메일주소"
                        value={inputData.email}
                        maxLength={50}
                        placeholder="이메일주소"
                        onChange={handleInputData}
                      />
                    </div>
                    <span className="cmem_noti">
                      <em className="usable_value">
                        <p>{error.email}</p>
                      </em>
                    </span>
                  </dd>
                </dl>
              </div>
            </div>

            <WithdrawTit title="광고 정보 수신 동의" />
            <div className="cmem_cont">
              <div className="cmem_row">
                <div className="cmem_terms">
                  <SignUpTermTit title="신세계포인트" />
                  <div className="cmem_term_box">
                    <AgreementInputBtnSet array={AGREEMENT_CONTENTS1} />
                  </div>
                  <div className="cmem_term_box">
                    <AgreementInputBtnSet array={AGREEMENT_CONTENTS2} />
                    <ul className="cmem_termlst ty_inner" id="agree10">
                      <li className="ty_full">
                        <OptionCheckInput array={OPTION_CONTENTS1} />
                        <span className="tx_bracket">(</span>
                        <ul className="cmem_inp_lst">
                          <OptionCheckInputArr array={OPTION_CONTENTS2} />
                        </ul>
                        <span className="tx_bracket">)</span>
                      </li>
                      <OptionCheckInputArr array={OPTION_CONTENTS3} />
                    </ul>
                    <MemberNotice title="광고 정보 수신동의를 하시면 신세계포인트 서비스 및 이벤트 정보를 받으실 수 있습니다." />
                  </div>
                  <SignUpTermTit title="SSG.COM" />
                  <div className="cmem_term_box">
                    <AgreementInputBtnSet array={AGREEMENT_CONTENTS3} />
                    <ul className="cmem_termlst" id="agree40019">
                      <OptionCheckInputArr array={OPTION_CONTENTS4} />
                    </ul>
                    <MemberNotice title="광고 정보 수신동의를 하시면 SSG.COM 서비스 및 이벤트 정보를 받으실 수 있습니다." />
                  </div>
                </div>
              </div>
              <div className="cmem_row">
                <p className="cmem_noti">
                  <strong style={{ fontWeight: 'bold' }}>
                    선택 항목에 동의하지 않더라도 SSG,COM회원가입 및 기본
                    서비스를 이용하실 수 있습니다.
                  </strong>
                </p>
              </div>
              <Button
                type="submit"
                className="cmem_btn cmem_btn_orange2"
                name="가입하기"
              />
            </div>
          </div>
        </form>
      )}
      <Footer />
    </div>
  );
}

export default SignUpFormPage;
