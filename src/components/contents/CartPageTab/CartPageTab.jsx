import React from 'react';
import './CartPageTab.scss';
import { CART_TAB_LIST } from '../../../assets/datas/CartPageTab';

function CartPageTab() {
  return (
    <ul className="mnodr_tab" id="cartTab">
      {CART_TAB_LIST.map((el) => (
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
