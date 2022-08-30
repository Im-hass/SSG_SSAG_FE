import React from 'react';
import { useLocation } from 'react-router-dom';
import { MobileHeader } from '../components/ui';
import { Footer } from '../components/common';
import { AddAddressMyInfo } from '../components/contents';

function ModifyDestinationPage() {
  const { state } = useLocation();

  return (
    <div id="m_wrap" className="mcom_wrap ssg">
      <div id="m_container" className="mcom_container">
        <MobileHeader title="배송지 수정" />
        <AddAddressMyInfo state={state} />
        <Footer />
      </div>
    </div>
  );
}

export default ModifyDestinationPage;
