import React from 'react';
import { useRecoilState } from 'recoil';
import { isOpenState } from '../../../recoil/isOpenState';
import { HeaderBackArrow } from '../index';

import './HeaderLeftSide.scss';

function HeaderLeftSide() {
  const [isOpen, setIsOpen] = useRecoilState(isOpenState);

  return (
    <>
      {isOpen && <HeaderBackArrow />}

      {!isOpen && (
        <div className="header-logo-wrap">
          <div className="logo-ssg" />
          <div className="logo-ssg-mall" />
          <div className="open-mall-btn">
            <span className="open-mall-btn-icon" />
          </div>
        </div>
      )}
    </>
  );
}

export default HeaderLeftSide;
