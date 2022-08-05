import React from 'react';
import {
  FooterNotification,
  FooterService,
  FooterButtonBox,
  FooterMallWrap,
} from '../../contents';
import './Footer.scss';

function Footer() {
  return (
    <footer id="m_footer" className="mcom_footer react-area">
      <FooterNotification />
      <FooterService />
      <FooterButtonBox />
      <FooterMallWrap />
    </footer>
  );
}

export default Footer;
