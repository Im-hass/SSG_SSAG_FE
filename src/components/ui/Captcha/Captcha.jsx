/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function Captcha() {
  return (
    <div className="cmem_captcha" style={{ display: 'none' }}>
      <p className="captcha_guide">
        정보 보호를 위해 자동입력 방지문자를 입력해주세요.
      </p>
      <div className="captcha_box">
        <img src="" alt="자동입력 방지문자" title="자동입력 방지문자" />
        <button type="button" className="btn_refresh">
          <span>새로고침</span>
        </button>
      </div>
      <div className="cmem_inp_txt2">
        <label htmlFor="inp_autonot">
          <span className="blind">자동입력 방지문자</span>
        </label>
        <input
          type="text"
          id="inp_autonot"
          name="captcha_response"
          placeholder="자동입력 방지문자"
        />
        <button type="button" className="inp_clear">
          <span className="sp_cmem_login cmem_ico_clear">
            <span className="blind">입력내용 삭제</span>
          </span>
        </button>
        <span className="sp_cmem_login cmem_ico_ok" />
      </div>
    </div>
  );
}

export default Captcha;
