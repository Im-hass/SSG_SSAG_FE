import React from 'react';
import './FloatingContents.scss';
import FloatingLeft from '../FloatingLeft/FloatingLeft';
import FloatingRight from '../FloatingRight/FloatingRight';

function FloatingContents() {
  return (
    <div id="m_floating" className="mcom_floating_v2 react-area">
      <FloatingLeft />
      <FloatingRight />
    </div>
  );
}

export default FloatingContents;
