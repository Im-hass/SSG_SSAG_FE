import React from 'react';
import { FloatingLeft, FloatingRight } from '../index';
import './FloatingContents.scss';

function FloatingContents({ pageName }) {
  return (
    <div id="m_floating" className="mcom_floating_v2 react-area">
      {pageName !== 'home' && <FloatingLeft />}
      <FloatingRight />
    </div>
  );
}

export default FloatingContents;
