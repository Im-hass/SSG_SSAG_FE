/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import {
  Captcha,
  CheckCircleInput,
  MobileHeader,
  SNSLoginBtn,
  Button,
} from '../../ui/index';
import { Footer } from '../../common/index';
import './Login.scss';

const SNS_LOGIN_CONTENT = [
  {
    href: '/',
    iconClassName: 'sp_cmem_sns cmem_ico_naver',
    iconName: '네이버',
  },
  {
    href: '/',
    iconClassName: 'sp_cmem_sns cmem_ico_kakao',
    iconName: '카카오',
  },
  {
    href: '/',
    iconClassName: 'sp_cmem_sns cmem_ico_apple',
    iconName: '애플',
  },
  {
    href: '/',
    iconClassName: 'sp_cmem_sns cmem_ico_phone',
    iconName: '휴대폰',
  },
];

function Login() {
  const navigate = useNavigate();

  const [inputData, setInputData] = useState({
    loginId: '',
    loginPwd: '',
  });
  const [error, setError] = useState('');

  const handleInputData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();

    if (inputData.loginId.length !== 0 && inputData.loginPwd.length !== 0) {
      axios
        .post('http://13.209.26.150:9000/comm-users/login/user', {
          loginId: inputData.loginId,
          loginPwd: inputData.loginPwd,
        })
        .then((res) => {
          if (res.data.isSuccess === false) setError(res.data.message);
          else {
            localStorage.setItem('token', JSON.stringify(res.data.result));
            navigate('/');
          }
        });
    }
  };

  return (
    <div>
      <MobileHeader title="로그인" />
      <div className="cmem_ct_login v2">
        <div className="cmem_login_form">
          <form id="login_form" method="post" onSubmit={handleSubmitLogin}>
            <fieldset>
              <legend>로그인</legend>
              <div className="cmem_inp_area">
                <span className="cmem_inp_txt2">
                  <label htmlFor="inp_id">
                    <span className="blind">아이디</span>
                  </label>
                  <input
                    type="text"
                    id="inp_id"
                    name="loginId"
                    placeholder="아이디"
                    maxLength="50"
                    // defaultValue="testId"
                    onChange={handleInputData}
                  />
                  <button type="button" className="inp_clear">
                    <span className="sp_cmem_login cmem_ico_clear">
                      <span className="blind">입력내용 삭제</span>
                    </span>
                  </button>
                </span>
                <span className="cmem_inp_txt2">
                  <label htmlFor="inp_pw">
                    <span className="blind">비밀번호</span>
                  </label>
                  <input
                    type="password"
                    id="inp_pw"
                    name="loginPwd"
                    // defaultValue="testPwd"
                    placeholder="비밀번호"
                    onChange={handleInputData}
                  />
                  <button type="button" className="inp_clear">
                    <span className="sp_cmem_login cmem_ico_clear">
                      <span className="blind">입력내용 삭제</span>
                    </span>
                  </button>
                </span>
              </div>

              <span className="cmem_noti">
                <em className="usable_value">
                  <p style={{ marginTop: '8px' }}>{error}</p>
                </em>
              </span>

              <div className="cmem_login_chk">
                <CheckCircleInput
                  inputId="keep_id"
                  inputName="chk_log"
                  inputValue="Y"
                  labelFor="keep_id"
                  laberValue="아이디 저장"
                />
              </div>
              <Captcha />
              <Button
                type="submit"
                className="cmem_btn cmem_btn_orange3"
                name="로그인"
              />
              <div className="cmem_login_support">
                <a href="/m/member/findIdPw.ssg">아이디 찾기</a>
                <a href="/m/member/findIdPw.ssg?tabType=pw">비밀번호 찾기</a>
                <Link to="/signup">회원가입</Link>
              </div>
            </fieldset>
          </form>
        </div>
      </div>

      <ul className="cmem_sns_login">
        {SNS_LOGIN_CONTENT.map((login) => (
          <SNSLoginBtn
            key={login.iconName}
            href={login.href}
            onClick={login.onClick}
            iconClassName={login.iconClassName}
            iconName={login.iconName}
          />
        ))}
      </ul>
      <div className="cmem_nomemarea notranslate">
        <a href="/m/member/nonMemberLogin.ssg" className="cmem_nomem_btn">
          <span>비회원 조회하기</span>
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
