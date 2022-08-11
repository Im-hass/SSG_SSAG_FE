import React from 'react';
import './CartPageTab.scss';

const CART_TAB_LIST = [
  {
    id: 1,
    data: '일반배송',
    name: '일반배송',
    count: 5,
  },
  {
    id: 2,
    data: '정기배송',
    name: '정기배송',
    count: 0,
  },
  {
    id: 3,
    data: '_cartshare_tutorial',
    name: '함께장보기',
    count: 0,
  },
];

function CartPageTab() {
  return (
    <ul className="mnodr_tab" id="cartTab">
      {CART_TAB_LIST.map((el, i) => (
        <li key={el.id}>
          <a href="/" data={el.data} className="cartTracking">
            <span className="mnodr_tab_tx">
              {el.name}
              <span>({el.count})</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default CartPageTab;
