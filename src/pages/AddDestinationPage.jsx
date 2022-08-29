import React from 'react';
import { MobileHeader } from '../components/ui';
import { Footer } from '../components/common';
import { AddAddressMyInfo } from '../components/contents';

function AddDestinationPage() {
  return (
    <div id="m_wrap" className="mcom_wrap ssg">
      <div id="m_container" className="mcom_container">
        <MobileHeader title="배송지 추가" />
        <AddAddressMyInfo />
        <Footer />
      </div>
    </div>
  );
}

export default AddDestinationPage;
