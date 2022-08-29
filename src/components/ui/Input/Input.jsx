/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function Input(props) {
  const { labelFor, type, blindName, inputName, placeholder } = props;

  return (
    <span className="cmem_inp_txt2">
      <label htmlFor={labelFor}>
        <span className="blind">{blindName}</span>
      </label>
      <input
        type={type}
        name={inputName}
        placeholder={placeholder}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        maxLength="50"
      />
      <button type="button" className="inp_clear">
        <span className="sp_cmem_login cmem_ico_clear">
          <span className="blind">입력내용 삭제</span>
        </span>
      </button>
    </span>
  );
}

export default Input;
