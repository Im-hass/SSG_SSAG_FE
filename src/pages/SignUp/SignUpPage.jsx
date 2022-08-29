import React from 'react';
import { Link } from 'react-router-dom';

import { Footer } from '../../components/common/index';
import CircleImgList from '../../components/ui/CircleImgList/CircleImgList';
import {
  MobileHeader,
  SNSLoginBtn,
  WithdrawTit,
} from '../../components/ui/index';
import * as datas from '../../assets/datas';

function SignUpPage() {
  const { BENEFIT_CONTENT, SNS_LOGIN_CONTENT } = datas;

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
            <div className="cmem_btn_area">
              <Link to="/signupAgreement" className="cmem_btn cmem_btn_orange">
                통합회원가입
              </Link>
            </div>
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
