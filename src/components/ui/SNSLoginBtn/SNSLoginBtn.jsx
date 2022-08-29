import React from 'react';

function SNSLoginBtn(props) {
  const { href, iconClassName, iconName } = props;
  return (
    <li>
      <a href={href} name="snsLogin">
        <span className="ico_area">
          <span className={iconClassName} />
        </span>
        <span className="cmem_sns_name">{iconName}</span>
      </a>
    </li>
  );
}

export default SNSLoginBtn;
