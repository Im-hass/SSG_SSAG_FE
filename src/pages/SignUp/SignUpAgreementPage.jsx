import React from 'react';
import { Link } from 'react-router-dom';

import {
  MobileHeader,
  AgreementInputBtnSet,
  AgreementInput,
} from '../../components/ui/index';
import { Footer } from '../../components/common/index';
import SignUpTermTit from '../../components/ui/SignUpTermTit/SignUpTermTit';
import * as datas from '../../assets/datas/SignUpAgreementContents';

function SignUpAgreementPage() {
  const { AGREEMENT_CONTENT0, AGREEMENT_CONTENT1, AGREEMENT_CONTENT2 } = datas;

  return (
    <div id="m_container" className="mcom_container">
      <MobileHeader title="신세계포인트 통합회원 가입" />
      <div id="content" className="cmem_ct_join">
        <div className="cmem_cont">
          <div className="cmem_row">
            <div className="cmem_term_box">
              <strong style={{ fontWeight: 'bold' }}>
                <AgreementInput object={AGREEMENT_CONTENT0} />
              </strong>
            </div>
            <div className="cmem_terms ty_sub">
              <SignUpTermTit title="신세계포인트" />
              <div className="cmem_term_box">
                <AgreementInputBtnSet array={AGREEMENT_CONTENT1} />
              </div>
              <SignUpTermTit title="SSG.COM" />
              <div className="cmem_term_box">
                <AgreementInputBtnSet array={AGREEMENT_CONTENT2} />
              </div>
            </div>
          </div>
          <form id="agreeForm" method="POST" action="/m/member/join/form.ssg">
            <div className="cmem_btn_area">
              <Link to="/signupForm" className="cmem_btn cmem_btn_orange2">
                다음
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignUpAgreementPage;
