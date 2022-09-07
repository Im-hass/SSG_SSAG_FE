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
          <img
            src="https://user-images.githubusercontent.com/68591616/188794549-2591ec2c-dac6-4a11-bb5e-1faea77a9b33.png"
            alt="logo"
            style={{ height: '14px' }}
          />
          <div className="open-mall-btn">
            <span className="open-mall-btn-icon" />
          </div>
        </Link>
      )}
    </>
  );
}

export default HeaderLeftSide;
