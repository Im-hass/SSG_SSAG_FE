export const BUTTON_LIST = [
  {
    id: 1,
    // href: "javascript:mobileLogin('login');"
    href: '/login',
    onClick: '',
    name: '로그인',
  },
  {
    id: 2,
    // href: "javascript:logout();"
    href: '/',
    onClick: '',
    name: '로그아웃',
  },
  {
    id: 3,
    href: '/signup',
    onClick: '',
    name: '회원가입',
  },
  {
    id: 4,
    href: 'https://m-shinsegaemall.ssg.com/comm/app/appLink.ssg?mobilAppSvcNo=2',
    onClick: '',
    name: '앱다운로드',
  },
  {
    id: 5,
    href: '#',
    onClick:
      "appBroswer('https://shinsegaemall.ssg.com','pc','Y'); return false;",
    name: 'PC버전',
  },
];
