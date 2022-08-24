import React from 'react';
import { useRecoilState } from 'recoil';
import { isModalOpenState } from '../../../recoil/states';
import './PaymentMeansAddCardBtn.scss';

function PaymentMeansAddCardBtn() {
  const [, setIsModalOpen] = useRecoilState(isModalOpenState);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="myssgpay_btnlst">
      <button
        className="btn_add_card modal-open-btn"
        type="button"
        onClick={handleModalOpen}
      >
        <span className="btn_txt">카드 등록하기</span>
      </button>
    </div>
  );
}

export default PaymentMeansAddCardBtn;
