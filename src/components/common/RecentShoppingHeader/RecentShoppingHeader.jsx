import React from 'react';
import { RecentShoppingTitle } from '../RecentShoppingTitle/index';
import { RecentShoppingFilter } from '../RecentShoppingFilter/index';
import './RecentShoppingHeader.scss';

function RecentShoppingHeader() {
  return (
    <div className="cmhistory_top">
      <RecentShoppingTitle />
      <RecentShoppingFilter />
    </div>
  );
}

export default RecentShoppingHeader;
