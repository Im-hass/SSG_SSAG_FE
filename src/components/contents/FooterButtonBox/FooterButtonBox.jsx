import React from 'react';
import './FooterButtonBox.scss';

const BUTTONLIST = [
  {
    id: 1,
    // href: "javascript:mobileLogin('login');"
    href: '/',
    data: '푸터|로그인',
    onClick: '',
    name: '로그인',
  },
  {
    id: 2,
    // href: "javascript:logout();"
    href: '/',
    data: '푸터|로그아웃',
    onClick: '',
    name: '로그아웃',
  },
  {
    id: 3,
    href: '#',
    data: '푸터|회원가입',
    onClick:
      "appBroswer('https://member.ssg.com/m/member/join/simpleJoinIntro.ssg', 'stack'); return false;",
    name: '회원가입',
  },
  {
    id: 4,
    href: 'https://m-shinsegaemall.ssg.com/comm/app/appLink.ssg?mobilAppSvcNo=2',
    data: '푸터|앱다운로드',
    onClick: '',
    name: '앱다운로드',
  },
  {
    id: 5,
    href: '#',
    data: '푸터|PC버전',
    onClick:
      "appBroswer('https://shinsegaemall.ssg.com','pc','Y'); return false;",
    name: 'PC버전',
  },
];

function FooterButtonBox() {
  return (
    <div className="mcom_btnbx_warp">
      <ul className="mcom_btnbx_list">
        {BUTTONLIST.map((el, i) => (
          <li key={el.id} id="footer_loginBtn">
            <a
              href={el.href}
              className="clickable"
              data-react-tarea={el.data}
              onClick={el.onClick}
              style={{ display: el.name === '로그아웃' ? 'none' : '' }}
            >
              {el.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterButtonBox;