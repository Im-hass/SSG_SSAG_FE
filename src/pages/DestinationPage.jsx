import React from 'react';
import { Footer } from '../components/common';
import { MobileHeader } from '../components/ui';
import { DestinationContent } from '../components/contents/DestinationContent';

function DestinationPage() {
  return (
    <>
      <MobileHeader title="배송지 관리" />
      <DestinationContent />
      <Footer pageName="destination" />
    </>
  );
}

export default DestinationPage;
