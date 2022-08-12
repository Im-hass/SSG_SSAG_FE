import React from 'react';

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
  SignUpInput,
  SignUpInputBtnSet,
} from '../../components/ui/index';
import SignUpTermTit from '../../components/ui/SignUpTermTit/SignUpTermTit';
import * as datas from '../../assets/datas/SignUpFormContents';

function SignUpFormPage() {
  const {
    INPUT_BTN_CONTENT,
    INPUT_CONTENT,
    AGREEMENT_CONTENTS1,
    AGREEMENT_CONTENTS2,
    AGREEMENT_CONTENTS3,
    OPTION_CONTENTS1,
    OPTION_CONTENTS2,
    OPTION_CONTENTS3,
    OPTION_CONTENTS4,
  } = datas;

  return (
    <div id="m_container" className="mcom_container" data-iframe-height="">
      <form id="joinForm" method="POST">
        <input
          type="hidden"
          name="selfCertTokenId"
          value="146a39cd18b011edb8ca8030e02dff00"
        />
        <div id="m_content" className="cmem_ct_join">
          <WithdrawTit title="회원 정보" />
          <div className="cmem_cont">
            <div className="cmem_row">
              <dl className="cmem_ip">
                <dt>
                  <RequireLabel htmlFor="mbrLoginId" labelValue="아이디" />
                </dt>
                <dd>
                  <SignUpInputBtnSet object={INPUT_BTN_CONTENT[0]} />
                  <span className="cmem_noti">
                    <em className="usable_value">
                      <p id="id_msg" />
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
                  <SignUpInput object={INPUT_CONTENT[0]} />
                  <SignUpInput object={INPUT_CONTENT[1]} />
                </dd>
              </dl>
            </div>
            <div className="cmem_row">
              <dl className="cmem_ip">
                <dt>
                  <RequireLabel htmlFor="mem_name" labelValue="이름" />
                </dt>
                <dd>
                  <SignUpInput object={INPUT_CONTENT[2]} />
                </dd>
              </dl>
            </div>
            <input type="hidden" name="mbrNshpploc[0].lotnoBascAddr" />
            <input type="hidden" name="mbrNshpploc[0].lotnoDtlAddr" />
            <input type="hidden" name="mbrNshpploc[0].roadNmBascAddr" />
            <input type="hidden" name="mbrNshpploc[0].roadNmDtlAddr" />
            <input type="hidden" name="mbrNshpploc[0].mbrIptAddrTypeCd" />
            <input type="hidden" name="mbrNshpploc[0].mbrIptAddr" />
            <input type="hidden" name="mbrNshpploc[0].addrExamRstCd" />
            <div className="cmem_row">
              <div className="cmem_user_addr">
                <dl className="cmem_ip">
                  <dt>
                    <RequireLabel htmlFor="zipcd" labelValue="주소" />
                  </dt>
                  <dd>
                    <SignUpInputBtnSet object={INPUT_BTN_CONTENT[1]} />
                    <div className="addr_info v2" id="addr_info" />
                  </dd>
                </dl>
              </div>
            </div>
            <input type="hidden" name="mbrCnts[0].cntsTypeCd" value="20" />
            <div className="cmem_row">
              <div className="cmem_user_phone">
                <dl className="cmem_ip">
                  <dt>
                    <RequireLabel htmlFor="mem_hpno" labelValue="휴대폰번호" />
                  </dt>
                  <dd>
                    <SignUpInput object={INPUT_CONTENT[3]} />
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
                  <SignUpInput object={INPUT_CONTENT[4]} />
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
              <MemberNotice title="선택 항목에 동의하지 않더라도 SSG,COM회원가입 및 기본 서비스를 이용하실 수 있습니다." />
            </div>
            <Button
              type="submit"
              className="cmem_btn cmem_btn_orange2"
              name="가입하기"
            />
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default SignUpFormPage;
