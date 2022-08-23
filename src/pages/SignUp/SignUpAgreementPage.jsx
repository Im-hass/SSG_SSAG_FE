import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { MobileHeader } from '../../components/ui/index';
import { Footer } from '../../components/common/index';
import SignUpTermTit from '../../components/ui/SignUpTermTit/SignUpTermTit';

function SignUpAgreementPage() {
  const navigate = useNavigate();
  const [validForm, setValidForm] = useState(false);
  const [checkedAll, setCheckedAll] = useState(false);
  const [checkedInput, setCheckedInput] = useState({
    agree1: false,
    agree2: false,
    agree3: false,
    agree4: false,
    agree5: false,
    agree6: false,
  });

  const handleCheckAll = (e) => {
    setCheckedAll(e.target.checked);
    setCheckedInput(
      Object.keys(checkedInput).reduce(
        (prev, key) => ({ ...prev, [key]: e.target.checked }),
        {},
      ),
    );
    if (Object.values(checkedInput).every((v) => v === true) === false) {
      setCheckedAll(false);
    }
  };

  const handleInputCheck = (e) => {
    setCheckedInput({
      ...checkedInput,
      [e.target.name]: !checkedInput[e.target.name],
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (Object.values(checkedInput).every((v) => v === true) === true) {
      setValidForm(true);
      navigate('/signupForm');
    } else setValidForm(false);
  };

  return (
    <div id="m_container" className="mcom_container">
      <MobileHeader title="신세계포인트 통합회원 가입" />
      <div id="content" className="cmem_ct_join">
        <div className="cmem_cont">
          <div className="cmem_row">
            <div className="cmem_term_box">
              <span className="cmem_inp_chk">
                <input
                  type="checkbox"
                  id="checkAll"
                  name="checkAll"
                  onClick={handleCheckAll}
                  defaultChecked={checkedAll}
                />
                <label htmlFor="checkAll" style={{ fontWeight: 'bold' }}>
                  약관 전체 동의
                </label>
              </span>
            </div>
            <div className="cmem_terms ty_sub">
              <SignUpTermTit title="신세계포인트" />
              <div className="cmem_term_box">
                <span className="cmem_inp_chk">
                  <input
                    type="checkbox"
                    id="agree1"
                    name="agree1"
                    onChange={handleInputCheck}
                    checked={checkedInput.agree1}
                  />
                  <label htmlFor="agree1">
                    (필수) 신세계포인트 회원 이용약관
                  </label>
                </span>
                <button type="button" className="cmem_btn cmem_btn_gray3">
                  내용보기
                </button>
              </div>
              <div className="cmem_term_box">
                <span className="cmem_inp_chk">
                  <input
                    type="checkbox"
                    id="agree2"
                    name="agree2"
                    onChange={handleInputCheck}
                    checked={checkedInput.agree2}
                  />
                  <label htmlFor="agree2">
                    (필수) 개인정보 수집 및 이용 동의
                  </label>
                </span>
                <button type="button" className="cmem_btn cmem_btn_gray3">
                  내용보기
                </button>
              </div>
              <div className="cmem_term_box">
                <span className="cmem_inp_chk">
                  <input
                    type="checkbox"
                    id="agree3"
                    name="agree3"
                    onChange={handleInputCheck}
                    checked={checkedInput.agree3}
                  />
                  <label htmlFor="agree3">
                    (필수) 필수 정보 이마트/신세계백화점 공동 개인정보 수집 이용
                    동의
                  </label>
                </span>
                <button type="button" className="cmem_btn cmem_btn_gray3">
                  내용보기
                </button>
              </div>
              <div className="cmem_term_box">
                <span className="cmem_inp_chk">
                  <input
                    type="checkbox"
                    id="agree4"
                    name="agree4"
                    onChange={handleInputCheck}
                    checked={checkedInput.agree4}
                  />
                  <label htmlFor="agree4">
                    (필수) 통합회원 서비스 제공을 위한 개인정보 제3자 제공 동의
                  </label>
                </span>
                <button type="button" className="cmem_btn cmem_btn_gray3">
                  내용보기
                </button>
              </div>
              <SignUpTermTit title="SSG.COM" />
              <div className="cmem_term_box">
                <div className="cmem_term_box">
                  <span className="cmem_inp_chk">
                    <input
                      type="checkbox"
                      id="agree5"
                      name="agree5"
                      onChange={handleInputCheck}
                      checked={checkedInput.agree5}
                    />
                    <label htmlFor="agree5">(필수) SSG.COM회원 이용약관</label>
                  </span>
                  <button type="button" className="cmem_btn cmem_btn_gray3">
                    내용보기
                  </button>
                </div>
                <div className="cmem_term_box">
                  <span className="cmem_inp_chk">
                    <input
                      type="checkbox"
                      id="agree6"
                      name="agree6"
                      onChange={handleInputCheck}
                      checked={checkedInput.agree6}
                    />
                    <label htmlFor="agree6">
                      (필수) 개인정보 수집 및 이용 동의
                    </label>
                  </span>
                  <button type="button" className="cmem_btn cmem_btn_gray3">
                    내용보기
                  </button>
                </div>
              </div>
            </div>
          </div>
          <form
            id="agreeForm"
            method="POST"
            action="/m/member/join/form.ssg"
            onSubmit={handleSubmitForm}
          >
            <div className="cmem_btn_area">
              <button type="submit" className="cmem_btn cmem_btn_orange2">
                다음
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignUpAgreementPage;
