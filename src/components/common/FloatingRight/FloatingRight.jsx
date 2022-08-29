import React from 'react';
import { FloatingTopButton, FloatingTalk } from '../index';
import './FloatingRight.scss';

function FloatingRight() {
  return (
    <div className="floating_right" id="floating_right_id">
      <FloatingTalk />
      <FloatingTopButton />
    </div>
  );
}

export default FloatingRight;
