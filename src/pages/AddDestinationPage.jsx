import React, { useState } from 'react';
import { MobileHeader } from '../components/ui';
import { Footer } from '../components/common';
import { AddAddressMyInfo, AddAddressZipCode } from '../components/contents';

function AddDestinationPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputDatas, setInputDatas] = useState({
    addrName: '',
    recipient: '',
    phone: '',
    homePhone: '',
    zipCode: '',
    streetAddr: '',
    lotAddr: '',
  });
  const [selectedItem, setSelectedItem] = useState({
    zipNo: '',
    lnmAdres: '',
    rnAdres: '',
    detailAddr: '',
  });

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleInputData = (e) => {
    setInputDatas({ ...inputDatas, [e.target.name]: e.target.value });
  };

  return (
    <div id="m_wrap" className="mcom_wrap ssg">
      <div id="m_container" className="mcom_container">
        <MobileHeader title="배송지 추가" />

        {!isOpen && (
          <AddAddressMyInfo
            handleIsOpen={handleIsOpen}
            inputDatas={inputDatas}
            handleInputData={handleInputData}
            selectedItem={selectedItem}
          />
        )}

        {/* 우편번호 찾기 */}
        {isOpen && (
          <AddAddressZipCode
            handleIsOpen={handleIsOpen}
            inputDatas={inputDatas}
            setInputDatas={setInputDatas}
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
