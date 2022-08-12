import React from 'react';

import {
  MobileHeader,
  Button,
  AgreementInputBtnSet,
  AgreementInput,
} from '../../components/ui/index';
import SignUpTermTit from '../../components/ui/SignUpTermTit/SignUpTermTit';

const AGREEMENT_CONTENT0 = {
  id: 'checkAll',
  content: '약관 전체 동의',
};

const AGREEMENT_CONTENT1 = [
  {
    id: 'ssgterms02',
    content: '(필수) 신세계포인트 회원 이용약관',
  },
  {
    id: 'ssgterms03',
    content: '(필수) 개인정보 수집 및 이용 동의',
  },
  {
    id: 'ssgterms04',
    content:
      '(필수) 필수 정보 이마트/신세계백화점 공동 개인정보 수집 이용 동의',
  },
  {
    id: 'ssgterms05',
    content: '(필수) 통합회원 서비스 제공을 위한 개인정보 제3자 제공 동의',
  },
];

const AGREEMENT_CONTENT2 = [
  {
    id: 'ssgterms06',
    content: '(필수) SSG.COM회원 이용약관',
  },
  {
    id: 'ssgterms07',
    content: '(필수) 개인정보 수집 및 이용 동의',
  },
];

function SignUpAgreementPage() {
  return (
    <div>
      <div id="m_container" className="mcom_container" data-iframe-height="">
        <MobileHeader title="신세계포인트 통합회원 가입" />
        <div id="content" className="cmem_ct_join">
          <div className="cmem_cont">
            <div className="cmem_row">
              <div className="cmem_term_box">
                <AgreementInput array={AGREEMENT_CONTENT0} />
              </div>
              <div className="cmem_terms ty_sub">
                <SignUpTermTit title="신세계포인트" />
                <AgreementInputBtnSet array={AGREEMENT_CONTENT1} />
                <SignUpTermTit title="SSG.COM" />
                <AgreementInputBtnSet array={AGREEMENT_CONTENT2} />
              </div>
            </div>
            <form id="agreeForm" method="POST" action="/m/member/join/form.ssg">
              <input
                type="hidden"
                name="selfCertTokenId"
                value="146a39cd18b011edb8ca8030e02dff00"
              />
              <input type="hidden" name="autoFillYn" value="N" />
              <Button
                type="submit"
                className="cmem_btn cmem_btn_orange2"
                name="다음"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpAgreementPage;
