import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { isOpenState } from '../../../store/states';
import { HeaderBackArrow } from '../index';

import './HeaderLeftSide.scss';

function HeaderLeftSide() {
  const [isOpen] = useRecoilState(isOpenState);

  return (
    <>
      {isOpen && <HeaderBackArrow />}

      {!isOpen && (
        <Link to="/" className="header-logo-wrap">
          <div className="logo-ssg" />
          <div className="logo-ssg-mall" />
          <div className="open-mall-btn">
            <span className="open-mall-btn-icon" />
          </div>
        </Link>
      )}
    </>
  );
}

export default HeaderLeftSide;
