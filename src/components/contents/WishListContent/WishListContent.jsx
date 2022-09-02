import React from 'react';
import { WishList } from '../../list/WishList';
import { WishFolder, WishFilter } from '../../ui';
import './WishListContent.scss';

function WishListContent() {
  return (
    <div id="m_content" className="react-area">
      <div className="mylike_wrap">
        <WishFolder />
        <WishFilter />
        <WishList />
      </div>
    </div>
  );
}

export default WishListContent;
