export const MY_DES_LIST = [
  {
    id: 1,
    destinationName: '울집',
    zipCode: '(11111)',
    addressDoro:
      '도로명주소: 우주시 태양계시 화성구 일런 머스크동 갈끄니까아 도로도로',
    addressJibeon:
      '지번주소: 우주시 태양계시 화성구 일런 머스크동 갈끄니까아 지번지번',
  },
  {
    id: 2,
    destinationName: '홈즈네',
    zipCode: '(22222)',
    addressDoro: '도로명주소: 영국 런던 베이커 221B 도로도로',
    addressJibeon: '지번주소: 영국 런던 베이커 221B 지번지번',
  },
];

export const DES_TAB_LIST = [
  {
    id: 1,
    listRole: 'presentation',
    aRole: 'tab',
    href: '/m/comm/shpplocList.ssg',
    className: 'myodr_tab_tx',
    name: 'MY배송지',
  },
  {
    id: 2,
    listRole: 'presentation',
    aRole: 'tab',
    href: '/m/comm/shareShpplocList.ssg',
    className: 'myodr_tab_tx',
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
