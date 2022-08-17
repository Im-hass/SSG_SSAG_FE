import React from 'react';
import { AgreementInput } from '../index';

function AgreementInputBtnSet(props) {
  const { array } = props;

  return (
    <div>
      {array.map((item) => (
        <div className="cmem_term_box" key={item.id}>
          <AgreementInput object={item} />
          <a href="/" className="cmem_btn cmem_btn_gray3" title="새창 열림">
            내용보기
          </a>
        </div>
      ))}
    </div>
  );
}

export default AgreementInputBtnSet;
