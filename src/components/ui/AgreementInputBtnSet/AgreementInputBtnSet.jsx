import React from 'react';
import { AgreementInput } from '../index';

function AgreementInputBtnSet(props) {
  const { array } = props;

  return (
    <>
      {array.map((item) => (
        <div key={item.id}>
          <AgreementInput object={item} />
          <a href="/" className="cmem_btn cmem_btn_gray3" title="새창 열림">
            내용보기
          </a>
        </div>
      ))}
    </>
  );
}

export default AgreementInputBtnSet;
