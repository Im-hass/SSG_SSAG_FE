import React from 'react';
import { Footer } from '../../components/common/index';
import {
  MobileHeader,
  WithdrawNotice,
  WithdrawTit,
  SquareBorderBtn,
} from '../../components/ui';
import { NOTICE_LIST } from '../../assets/datas';

function SignUpAuthPage() {
  return (
    <div>
      <div id="m_content" className="cmem_ct_join">
        <MobileHeader title="신세계포인트 통합회원 가입" />
        <WithdrawTit title="본인인증" />
        <div className="cmem_certi_area">
          <p className="cmem_certi_tit">
            자주 사용하시는 인증 수단으로 본인인증을 진행해주세요.
          </p>
          <div className="cmem_certi">
            <SquareBorderBtn
              btnImgClass="cmem_certi_phone"
              btnName="휴대폰 인증"
            />
            <SquareBorderBtn
              btnImgClass="cmem_certi_card"
              btnName="신용/체크카드 인증"
            />
          </div>
          <ul className="cmem_certi_notice">
            <WithdrawNotice contentsArray={NOTICE_LIST} />
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignUpAuthPage;
