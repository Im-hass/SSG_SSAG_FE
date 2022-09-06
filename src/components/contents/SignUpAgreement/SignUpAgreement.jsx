import React from 'react';
import { SignUpTermTit } from '../../ui/index';

function SignUpAgreement(props) {
  const { handleCheckOption } = props;

  return (
    <>
      <div className="cmem_row">
        <div className="cmem_terms">
          <SignUpTermTit title="신세계포인트" />
          <div className="cmem_term_box">
            <span className="cmem_inp_chk">
              <input
                type="checkbox"
                id="marketing1"
                name="marketing1"
                onChange={handleCheckOption}
              />
              <label htmlFor="marketing1">
                (선택) 서비스·이벤트정보 제공을 위한 개인정보 수집 및 이용 동의
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
                id="marketing2"
                name="marketing2"
                onChange={handleCheckOption}
              />
              <label htmlFor="marketing2">
                (선택) 선택 정보 이마트/신세계백화점 공동 개인정보 수집 및 이용
                동의
              </label>
            </span>
            <button type="button" className="cmem_btn cmem_btn_gray3">
              내용보기
            </button>
          </div>
          <SignUpTermTit title="SSG.COM" />
          <div className="cmem_term_box">
            <span className="cmem_inp_chk">
              <input
                type="checkbox"
                id="marketing3"
                name="marketing3"
                onChange={handleCheckOption}
              />
              <label htmlFor="marketing3">
                (선택) 서비스·이벤트정보 제공을 위한 개인정보 수집 및 이용 동의
              </label>
            </span>
            <button type="button" className="cmem_btn cmem_btn_gray3">
              내용보기
            </button>
          </div>
        </div>
      </div>
      <div className="cmem_row">
        <p className="cmem_noti">
          <strong style={{ fontWeight: 'bold' }}>
            선택 항목에 동의하지 않더라도 SSG,COM회원가입 및 기본 서비스를
            이용하실 수 있습니다.
          </strong>
        </p>
      </div>
    </>
  );
}

export default SignUpAgreement;
