import React from 'react';
import { RecentShoppingFilter, RecentShoppingTitle } from '../index';
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
