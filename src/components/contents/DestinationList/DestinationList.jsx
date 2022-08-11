import React from 'react';
import { DestinationListBtns } from '../index';
import './DestinationList.scss';

const MY_DES_LIST = [
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

function DestinationList() {
  return (
    <div className="myodr_btnarea">
      <ul>
        <li>
          <button
            type="button"
            className="myodr_btn myodr_btn_gray"
            onClick="ShpplocList.setOnlyOne();"
          >
            <span>이번만배송지 설정</span>
          </button>
        </li>
        <li>
          <button
            type="button"
            className="myodr_btn myodr_btn_orange"
            onClick="ShpplocList.setBasc();"
          >
            <span>기본 배송지 설정</span>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default DestinationList;
