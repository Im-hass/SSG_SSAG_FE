import React from 'react';

function SignUpInputBtnSet(props) {
  const { object } = props;

  return (
    <div className="cmem_inpbtn_set" id="idIpt">
      <span className="cmem_inp_txt">
        <input
          type={object.type}
          title={object.title}
          id={object.id}
          placeholder={object.placeholder}
          name={object.name}
          maxLength={object.maxLength}
        />
      </span>
      <button type="button" className={object.btnClass} id={object.btnId}>
        {object.btnValue}
      </button>
      <input type="hidden" id="isDuplicateMbrLoginId" value="" />
    </div>
  );
}

export default SignUpInputBtnSet;
