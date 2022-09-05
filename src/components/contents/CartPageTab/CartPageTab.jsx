import React from 'react';
import { Link } from 'react-router-dom';
import { CART_TAB_LIST } from '../../../assets/datas';
import './CartPageTab.scss';

function CartPageTab({ dataCount }) {
  return (
    <ul className="mnodr_tab" id="cartTab">
      {CART_TAB_LIST.map((el) => (
        <li key={el.id}>
          <Link to="/cart" data={el.data} className="cartTracking">
            <span className="mnodr_tab_tx">
              {el.name}
              <span>({el.name === '일반배송' ? dataCount : el.count})</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default CartPageTab;
