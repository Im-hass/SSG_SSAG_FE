import React, { useState } from 'react';
import { MobileHeader } from '../components/ui';
import { Footer } from '../components/common';
import { AddAddressMyInfo, AddAddressZipCode } from '../components/contents';

function AddDestinationPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({
    zipNo: '',
    lnmAdres: '',
    rnAdres: '',
    detailAddr: '',
  });

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="m_wrap" className="mcom_wrap ssg">
      <div id="m_container" className="mcom_container">
        <MobileHeader title="배송지 추가" />

        {!isOpen && (
          <AddAddressMyInfo
            handleIsOpen={handleIsOpen}
            selectedItem={selectedItem}
          />
        )}

        {/* 우편번호 찾기 */}
        {isOpen && (
          <AddAddressZipCode
            handleIsOpen={handleIsOpen}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        )}

        <Footer />
      </div>
    </div>
  );
}

export default AddDestinationPage;
