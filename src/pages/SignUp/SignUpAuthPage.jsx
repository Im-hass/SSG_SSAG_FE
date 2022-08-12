import React from 'react';
import { Footer } from '../../components/common/index';
import {
  MobileHeader,
  WithdrawNotice,
  WithdrawTit,
} from '../../components/ui/index';
import SquareBorderBtn from '../../components/ui/SquareBorderBtn/SquareBorderBtn';

const NOTICE_LIST = [
  {
    id: 'noti_1',
    content:
      '법인폰 사용자는 법인폰 개인인증 서비스 신청 후 휴대폰 인증을 하실 수 있습니다.',
  },
  {
    id: 'noti_2',
    content:
      '본인인증이 잘 되지 않으시면 본인인증기관 고객센터로 문의 해주세요. NICE평가정보(주) 고객센터 : 1600-1522 코리아크레딧뷰로(주) 고객센터 : 02-708-1000',
  },
];

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
