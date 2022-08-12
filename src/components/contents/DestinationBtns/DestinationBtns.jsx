import React from 'react';
import './DestinationBtns.scss';

const DES_BTNS_LIST = [
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

function DestinationBtns() {
  return (
    <div className="myodr_btnarea">
      <ul>
        {DES_BTNS_LIST.map((el) => (
          <li key={el.id}>
            <button type="button" className={el.className} onClick={el.onClick}>
              <span>{el.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DestinationBtns;
