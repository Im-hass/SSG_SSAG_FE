import React from 'react';
import { Link } from 'react-router-dom';
import { FloatingContents, Footer } from '../components/common';
import ToolbarList from '../components/toolbar/ToolbarList/ToolbarList';
import { MobileHeader } from '../components/ui';

function MyPage() {
  return (
    <div>
      <MobileHeader title="MY SSG" />
      <h1>마이 페이지</h1>
      <Link to="/destination">배송지 관리</Link>
      <br />
      <Link to="/paymentMeans">결제수단 관리</Link>
      <Footer />
      <ToolbarList />
      <FloatingContents />
    </div>
  );
}

export default MyPage;
