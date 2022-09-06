/* eslint-disable no-useless-escape */
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import {
  MobileHeader,
  RequireLabel,
  WithdrawTit,
} from '../../components/ui/index';
import { SignUpAgreement } from '../../components/contents/index';
import { Footer } from '../../components/common/index';

function SignUpFormPage() {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    loginId: '',
    loginPwd: '',
    name: '',
    email: '',
    phone: '',
    marketing1: 0,
    marketing2: 0,
    marketing3: 0,
  });

  const [valid, setValid] = useState({
    loginId: false,
    confirmId: false,
    loginPwd: false,
    confirmPwd: false,
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

  const handleCheckDuplicateIdBtn = () => {
    if (valid.loginId) {
      axios
        .get(
          `http://13.209.26.150:9000/comm-users/signup/overlap/${inputData.loginId}`,
        )
        .then((res) => {
          if (res.data.isSuccess === true) {
            setValid({ ...valid, confirmId: true });
            toast.success(res.data.result);
          } else {
            setValid({ ...valid, confirmId: false });
            setError({ ...error, loginId: res.data.message });
          }
        });
    }
  };

  const handleInputData = (e) => {
    let val = e.target.value;

    if (e.target.name === 'loginId' || e.target.name === 'loginPwd') {
      setInputData({ ...inputData, [e.target.name]: val });

      if (val !== undefined && val.length >= 6) {
        if (validCheck(val) === true) {
          setValid({ ...valid, [e.target.name]: true });
          setError({ ...error, [e.target.name]: '' });
        } else return;
      } else {
        setValid({ ...valid, [e.target.name]: false });
        setError({
          ...error,
          [e.target.name]: `${e.target.title}값이 유효하지 않습니다.`,
        });
      }
    }

    if (e.target.name === 'confirmPwd') {
      if (inputData.loginPwd === val && valid.loginPwd === true) {
        setValid({ ...valid, confirmPwd: true });
        setError({ ...error, loginPwd: '' });
      } else {
        setValid({ ...valid, confirmPwd: false });
        setError({
          ...error,
          loginPwd: `${e.target.title}값이 유효하지 않습니다.`,
        });
      }
    }

    if (e.target.name === 'name') {
      if (val.length !== 0) {
        setValid({ ...valid, name: true });
      } else {
        setValid({ ...valid, name: false });
      }
      setInputData({ ...inputData, name: val });
    }

    if (e.target.name === 'phone') {
      val = val
        .replace(/[^0-9]/g, '')
        .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
      if (val.length === 13) {
        setValid({ ...valid, phone: true });
      } else setValid({ ...valid, phone: false });
      setInputData({ ...inputData, phone: val });
    }

    if (e.target.name === 'email') {
      if (emailValidCheck(val) === true) {
        setValid({ ...valid, email: true });
        setError({ ...error, email: '' });
      } else {
        setValid({ ...valid, email: false });
        setError({
          ...error,
          email: `${e.target.title}값이 유효하지 않습니다.`,
        });
      }
      setInputData({ ...inputData, email: val });
    }
  };

  const handleCheckOption = (e) => {
    if (e.target.checked === true) {
      setInputData({
        ...inputData,
        [e.target.name]: 1,
      });
    } else {
      setInputData({
        ...inputData,
        [e.target.name]: 0,
      });
    }
  };

  const handleSubmitSignUpForm = (e) => {
    e.preventDefault();

    if (Object.values(valid).every((v) => v === true) === true) {
      axios
        .post('http://13.209.26.150:9000/comm-users/signup', {
          loginId: inputData.loginId,
          loginPwd: inputData.loginPwd,
          name: inputData.name,
          email: inputData.email,
          phone: inputData.phone,
          marketing1: inputData.marketing1,
          marketing2: inputData.marketing2,
          marketing3: inputData.marketing3,
        })
        .then((res) => {
          if (res.data.isSuccess === true)
            navigate('/signupDone', { state: inputData.name });
        })
        .catch((err) => new Error(err));
    } else if (!valid.confirmId) toast.error('아이디 중복검사를 진행해주세요.');
    else {
      toast.error('유효하지 않은 값이 있습니다.');
    }
  };

  return (
    <div id="m_container" className="mcom_container" data-iframe-height="">
      <MobileHeader title="신세계포인트 통합회원 가입" />
      <form id="joinForm" onSubmit={handleSubmitSignUpForm} noValidate>
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
                        placeholder="6~20자리 (대소문자, 숫자 사용가능)"
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
                      <p style={{ color: '#f12e24' }}>{error.loginId}</p>
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
                      placeholder="6~20자리 (대소문자, 숫자 사용가능)"
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
                      <p style={{ color: '#f12e24' }}>{error.loginPwd}</p>
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
                    <RequireLabel htmlFor="mem_hpno" labelValue="휴대폰번호" />
                  </dt>
                  <dd>
                    <div className="cmem_inp_txt">
                      <input
                        type="tel"
                        name="phone"
                        title="휴대폰번호"
                        value={inputData.phone}
                        maxLength={13}
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
                      <p style={{ color: '#f12e24' }}>{error.email}</p>
                    </em>
                  </span>
                </dd>
              </dl>
            </div>
          </div>

          <WithdrawTit title="광고 정보 수신 동의" />
          <div className="cmem_cont">
            <SignUpAgreement handleCheckOption={handleCheckOption} />
            <div className="cmem_btn_area">
              <button type="submit" className="cmem_btn cmem_btn_orange2">
                가입하기
              </button>
            </div>
          </div>
        </div>
      </form>
      <Footer />
      <Toaster
        containerStyle={{
          top: 30,
        }}
      />
    </div>
  );
}

export default SignUpFormPage;
