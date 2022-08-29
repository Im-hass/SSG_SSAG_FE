import React from 'react';
import {
  FooterNotification,
  FooterService,
  FooterButtonBox,
  FooterMallWrap,
} from '../../contents';
import './Footer.scss';

function Footer(props) {
  const { pageName } = props;

  return (
    <footer id="m_footer" className="mcom_footer react-area">
      {pageName === 'main' && <FooterNotification />}
      <FooterService />
      <FooterButtonBox />
      <FooterMallWrap />
    </footer>
  );
}

export default Footer;
