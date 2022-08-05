/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {
  Captcha,
  HiddenInput,
  Input,
  CheckInput,
  MobileHeader,
  SNSLoginBtn,
  SubmitBtn,
} from '../../ui/index';
import { Footer } from '../../common/index';

const INPUT_CONTENT = [
  {
    labelFor: 'inp_id',
    type: 'text',
    blindName: '아이디',
    inputName: 'mbrLoginId',
    placeholder: '아이디',
  },
  {
    labelFor: 'inp_pw',
    type: 'password',
    blindName: '비밀번호',
    inputName: 'password',
    placeholder: '비밀번호',
  },
];

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
  return (
    <div>
      <MobileHeader title="로그인" />
      <div className="cmem_ct_login v2">
        <div className="cmem_login_form">
          <form id="login_form" method="post">
            <HiddenInput
              inputName="loginCertCode"
              inputValue="L6DqmLF_JvV1FQfVUTk1B10yp9WKV1xlQDy"
            />
            <HiddenInput
              inputName="PCID"
              inputValue="16587089474241102959881"
            />
            <fieldset>
              <legend>로그인</legend>
              <div className="cmem_inp_area">
                {INPUT_CONTENT.map((input) => (
                  <Input
                    key={input.inputName}
                    laberFor={input.labelFor}
                    type={input.type}
                    blindName={input.blindName}
                    inputName={input.inputName}
                    placeholder={input.placeholder}
                  />
                ))}
              </div>
              <div className="cmem_login_chk">
                <CheckInput
                  inputId="keep_id"
                  inputName="chk_log"
                  inputValue="Y"
                  labelFor="keep_id"
                  laberValue="아이디 저장"
                />
              </div>
              <Captcha />
              <SubmitBtn className="cmem_btn cmem_btn_orange3" name="로그인" />
              <div className="cmem_login_support">
                <a href="/m/member/findIdPw.ssg">아이디 찾기</a>
                <a href="/m/member/findIdPw.ssg?tabType=pw">비밀번호 찾기</a>
                <a href="/m/member/join/simpleJoinIntro.ssg">회원가입</a>
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
      <form
        id="snsJoin"
        method="post"
        action="/m/member/join/simpleJoinGuide.ssg"
      >
        <HiddenInput inputName="mbrId" inputValue="" />
        <HiddenInput inputName="email" inputValue="" />
        <HiddenInput inputName="snsTypeCd" inputValue="" />
        <HiddenInput inputName="accessToken" inputValue="" />
      </form>
      <Footer />
    </div>
  );
}

export default Login;
