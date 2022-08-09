import React from 'react';
import { Footer } from '../components/common/index';
import CircleImgList from '../components/ui/CircleImgList/CircleImgList';
import {
  MobileHeader,
  SNSLoginBtn,
  WithdrawTit,
  Button,
} from '../components/ui/index';

const BENEFIT_CONTENT = [
  {
    class: 'sp_cmem_join cmem_ico_birthday_coupon',
    text1: '최대 20만원',
    text2: '생일쿠폰 제공',
  },
  {
    class: 'sp_cmem_join cmem_ico_ssgpoint',
    text1: '신세계포인트',
    text2: '적립 및 사용',
  },
  {
    class: 'sp_cmem_join cmem_ico_event',
    text1: '다양한 이벤트',
    text2: '참여 혜택',
  },
];

const SNS_LOGIN_CONTENT = [
  {
    href: '/',
    iconClassName: 'sp_cmem_sns cmem_ico_email',
    iconName: '이메일',
  },
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
];

function SignUpPage() {
  return (
    <div>
      <MobileHeader title="회원가입" />
      <div id="m_content" className="cmem_ct_join">
        <div className="cmem_card">
          <WithdrawTit title="신세계포인트 통합회원" />
          <div className="cmem_cont ty_benefit">
            <ul className="cmem_join_benefit">
              {BENEFIT_CONTENT.map((list) => (
                <CircleImgList
                  key={list.text1}
                  imgClassName={list.class}
                  text1={list.text1}
                  text2={list.text2}
                />
              ))}
            </ul>
            <Button
              type="button"
              className="cmem_btn cmem_btn_orange"
              name="통합회원가입"
            />
          </div>
        </div>
        <div className="cmem_card">
          <WithdrawTit title="간편회원" />
          <SNSLoginBtn />
          <div className="cmem_cont">
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignUpPage;
