export const INPUT_CONTENT = [
  {
    type: 'text',
    title: '아이디 입력',
    id: 'mbrLoginId',
    placeholder: '영어 또는 숫자로 6~20자리',
    name: 'mbrDto.mbrLoginId',
    maxLength: '20',
  },
  {
    type: 'password',
    id: 'pwd',
    title: '비밀번호 입력',
    placeholder: '대소문자, 숫자조합 8~20자리',
    name: 'mbrDto.pwd',
    maxLength: '20',
  },
  {
    type: 'password',
    id: 'pwd2',
    title: '비밀번호 재확인',
    placeholder: '비밀번호 재확인',
    name: '',
    maxLength: '20',
  },
  {
    type: 'text',
    id: 'mbrLoginName',
    title: '이름 입력',
    placeholder: '한글로 입력',
    name: 'mbrDto.mbrLoginName',
    maxLength: '20',
  },
  {
    type: 'text',
    title: '',
    id: 'zipcd',
    placeholder: '',
    name: 'mbrNshpploc[0].zipcd',
    maxLength: '',
  },
  {
    type: 'tel',
    id: 'mbrLoginPhoneNumber',
    title: '휴대폰번호 입력',
    placeholder: 'ex) 010-1234-5678',
    name: 'mbrDto.mbrLoginPhoneNumber',
    maxLength: '20',
  },
  {
    type: 'email',
    id: 'email',
    title: '',
    placeholder: '이메일주소',
    name: 'mbrDto.email',
    maxLength: '50',
  },
];

export const AGREEMENT_CONTENTS1 = [
  {
    id: 'policy1',
    content: `(선택) 서비스·이벤트정보 제공을 위한
    개인정보 수집 및 이용 동의`,
  },
];

export const AGREEMENT_CONTENTS2 = [
  {
    id: 'policy2',
    content: `(선택) 선택 정보 이마트/신세계백화점 공동
    개인정보 수집 및 이용 동의`,
  },
];

export const AGREEMENT_CONTENTS3 = [
  {
    id: 'policy3',
    content: `(선택) 서비스·이벤트정보 제공을 위한
  개인정보 수집 및 이용 동의`,
  },
];

export const OPTION_CONTENTS1 = {
  id: 'infoRcvAgreeEmail',
  title: '이메일 모두 선택',
  name: '',
  value: '',
  labelValue: '이메일',
};

export const OPTION_CONTENTS2 = [
  {
    id: 'chkPoint',
    title: '신세계포인트 선택',
    name: 'emailAgreeSiteCd',
    value: '40017',
    labelValue: '신세계포인트',
  },
  {
    id: 'chkEmart',
    title: '이마트 선택',
    name: 'emailAgreeSiteCd',
    value: '40021',
    labelValue: '이마트',
  },
  {
    id: 'chkDepart',
    title: '신세계백화점 선택',
    name: 'emailAgreeSiteCd',
    value: '40009',
    labelValue: '신세계백화점',
  },
];

export const OPTION_CONTENTS3 = [
  {
    id: 'chkAgreeSMS',
    title: '문자 선택',
    name: 'infoRcvMediaCd',
    value: '20',
    labelValue: '문자',
  },
  {
    id: 'chkAgreeDM',
    title: '우편물 선택',
    name: 'infoRcvMediaCd',
    value: '30',
    labelValue: '우편물',
  },
  {
    id: 'chkAgreeTM',
    title: '텔레마케팅 선택',
    name: 'infoRcvMediaCd',
    value: '40',
    labelValue: '텔레마케팅',
  },
];

export const OPTION_CONTENTS4 = [
  {
    id: 'emailRcvYn',
    title: '이메일 선택',
    name: 'ssgInfoRcvAgreeDto.emailRcvYn',
    value: 'Y',
    labelValue: '이메일',
  },
  {
    id: 'smsRcvYn',
    title: '이메일 선택',
    name: 'ssgInfoRcvAgreeDto.smsRcvYn',
    value: 'Y',
    labelValue: '문자',
  },
];
