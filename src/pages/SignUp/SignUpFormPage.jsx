import axios from 'axios';
import React, { useState, useEffect } from 'react';

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
} from '../../components/ui/index';
import { AddAddressZipCode } from '../../components/contents/index';
import SignUpTermTit from '../../components/ui/SignUpTermTit/SignUpTermTit';
import * as datas from '../../assets/datas';

function SignUpFormPage() {
  const {
    INPUT_CONTENT,
    AGREEMENT_CONTENTS1,
    AGREEMENT_CONTENTS2,
    AGREEMENT_CONTENTS3,
    OPTION_CONTENTS1,
    OPTION_CONTENTS2,
    OPTION_CONTENTS3,
    OPTION_CONTENTS4,
  } = datas;

  const [information, setInformation] = useState({
    loginId: '',
    loginPwd: '',
    name: '',
    email: '',
    phone: '',
    marketing1: 0,
    updateAt1: '',
    marketing2: 0,
    updateAt2: '',
    marketing3: 0,
    updateAt3: '',
  });

  const [idStatus, setIdStatus] = useState(false);
  const [pwdStatus, setPwdStatus] = useState('');
  const [enteredId, setEnteredId] = useState('');
  const [validId, setValidId] = useState(false);
  const [enteredPwd, setEnteredPwd] = useState('');
  const [enteredPwdConfirm, setEnteredPwdConfirm] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailStatusMessage, setEmailStatusMessage] = useState('');
  const [enteredPhoneNumber, setEnteredPhoneNumber] = useState('');
  const [clickZipCodeBtn, setClickZipCodeBtn] = useState(false);

  const handleCheckDuplicateIdBtn = () => {
    const id = enteredId;

    if (validId) {
      axios
        .get(`http://10.10.10.174:8081/comm-users/signup/overlap/${id}`)
        .then((res) => {
          if (!res.data.result) setIdStatus(res.data.message);
          else {
            setIdStatus(res.data.result);
            setInformation({ loginId: `${enteredId}` });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleChangeId = (e) => {
    setEnteredId(e.target.value);
  };

  const handleChangePassword = (e) => {
    setEnteredPwd(e.target.value);
  };

  const handleChangePasswordConfirm = (e) => {
    setEnteredPwdConfirm(e.target.value);
  };

  const handleChangeName = (e) => {
    const name = e.target.value;
    setInformation({ name: `${name}` });
  };

  const handleChangeEmail = (e) => {
    setEnteredEmail(e.target.value);
  };

  const handleChangePhoneNumber = (e) => {
    setEnteredPhoneNumber(e.target.value);
  };

  useEffect(() => {
    const validCheck = /^[a-zA-Z0-9]+$/g.test(enteredId);

    if (enteredId.length !== 0) {
      if (validCheck && enteredId.length >= 6) {
        setValidId(true);
        setIdStatus('');
      } else {
        setValidId(false);
        setIdStatus('유효하지 않은 아이디입니다.');
      }
    }
  }, [enteredId]);

  useEffect(() => {
    const validCheck = /^[A-Za-z0-9]+$/g.test(enteredPwd);

    if (enteredPwd.length !== 0) {
      if (validCheck && enteredPwd.length >= 8) {
        setValidPwd(true);
        setPwdStatus('');
      } else {
        setValidPwd(false);
        setPwdStatus('유효하지 않은 비밀번호입니다.');
      }
    }

    if (validPwd && enteredPwdConfirm.length !== 0) {
      if (enteredPwd === enteredPwdConfirm) {
        setPwdStatus('비밀번호가 일치합니다.');
        setInformation({ loginPwd: `${enteredPwdConfirm}` });
      } else {
        setPwdStatus('비밀번호가 일치하지 않습니다.');
      }
    }
  }, [enteredPwd, enteredPwdConfirm]);

  useEffect(() => {
    if (enteredPwdConfirm.length !== 0) {
      if (validEmail) {
        setEmailStatusMessage('');
        setInformation({ email: `${enteredPwdConfirm}` });
      } else {
        setEmailStatusMessage('이메일 형식에 맞지 않습니다.');
      }
    }
  }, [enteredEmail]);

  const handleClickZipCodeBtn = () => {
    setClickZipCodeBtn((prev) => !prev);
  };

  const handleSubmitSignUpForm = (e) => {
    e.preventDefault();
  };

  return (
    <div id="m_container" className="mcom_container" data-iframe-height="">
      <MobileHeader title="신세계포인트 통합회원 가입" />
      {clickZipCodeBtn ? (
        <AddAddressZipCode handleIsOpen={handleClickZipCodeBtn} />
      ) : (
        <form id="joinForm" onSubmit={handleSubmitSignUpForm}>
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
                        <SignUpInput
                          object={INPUT_CONTENT[0]}
                          onChange={handleChangeId}
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
                        <p id="id_msg">{idStatus}</p>
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
                      <SignUpInput
                        object={INPUT_CONTENT[1]}
                        onChange={handleChangePassword}
                      />
                    </div>
                    <div className="cmem_inp_txt">
                      <SignUpInput
                        object={INPUT_CONTENT[2]}
                        onChange={handleChangePasswordConfirm}
                      />
                    </div>
                    <span className="cmem_noti">
                      <em className="usable_value">
                        <p id="id_msg">{pwdStatus}</p>
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
                      <SignUpInput
                        object={INPUT_CONTENT[3]}
                        onChange={handleChangeName}
                      />
                    </div>
                  </dd>
                </dl>
              </div>
              <div className="cmem_row">
                <div className="cmem_user_addr">
                  <dl className="cmem_ip">
                    <dt>
                      <RequireLabel htmlFor="zipcd" labelValue="주소" />
                    </dt>
                    <dd>
                      <div className="cmem_inpbtn_set">
                        <span className="cmem_inp_txt">
                          <SignUpInput object={INPUT_CONTENT[4]} />
                        </span>
                        <button
                          type="button"
                          className="cmem_btn cmem_btn_gray"
                          id="btnPostNum"
                          onClick={handleClickZipCodeBtn}
                        >
                          우편번호<span className="blind">찾기</span>
                        </button>
                      </div>
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
                      <RequireLabel
                        htmlFor="mem_hpno"
                        labelValue="휴대폰번호"
                      />
                    </dt>
                    <dd>
                      <div className="cmem_inp_txt">
                        <SignUpInput
                          object={INPUT_CONTENT[5]}
                          onChange={handleChangePhoneNumber}
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
                      <SignUpInput
                        object={INPUT_CONTENT[6]}
                        onChange={handleChangeEmail}
                      />
                    </div>
                    <span className="cmem_noti">
                      <em className="usable_value">
                        <p id="id_msg">{emailStatusMessage}</p>
                      </em>
                    </span>
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
                <p className="cmem_noti">
                  <strong style={{ fontWeight: 'bold' }}>
                    선택 항목에 동의하지 않더라도 SSG,COM회원가입 및 기본
                    서비스를 이용하실 수 있습니다.
                  </strong>
                </p>
              </div>
              <Button
                type="submit"
                className="cmem_btn cmem_btn_orange2"
                name="가입하기"
              />
            </div>
          </div>
        </form>
      )}
      <Footer />
    </div>
  );
}

export default SignUpFormPage;
