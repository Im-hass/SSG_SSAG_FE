export const DES_TAB_LIST = [
  {
    to: '/destination/myDes',
    name: 'MY배송지',
  },
  {
    to: '/destination/withDes',
    name: '함께장보기 배송지',
  },
];

export const DES_BTNS_LIST = [
  {
    id: 1,
    name: '이번만배송지 설정',
    className: 'myodr_btn myodr_btn_gray',
    onClick: 'ShpplocList.setOnlyOne();',
  },
  {
    id: 2,
    name: '기본 배송지 설정',
    className: 'myodr_btn myodr_btn_orange',
    onClick: 'ShpplocList.setBasc();',
  },
];
