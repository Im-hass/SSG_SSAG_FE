import React from 'react';

function CircleImgList(props) {
  const { imgClassName, text1, text2 } = props;

  return (
    <li>
      <span className={imgClassName} />
      <span className="cmem_benefit_name">
        <span>
          {text1}
          <br />
          {text2}
        </span>
      </span>
    </li>
  );
}

export default CircleImgList;
