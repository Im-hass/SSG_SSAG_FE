import React from 'react';
import { FloatingTalk } from '../FloatingTalk/index';
import { FloatingTopButton } from '../FloatingTopButton/index';
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
