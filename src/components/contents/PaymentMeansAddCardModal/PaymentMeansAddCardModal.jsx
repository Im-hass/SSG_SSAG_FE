import React, { useState } from 'react';
import axios from 'axios';
import './PaymentMeansAddCardModal.scss';
import { useRecoilState } from 'recoil';
import { isModalOpenState } from '../../../recoil/states';

function PaymentMeansAddCardModal({ isSubmit, setIsSubmit }) {
  const [isModalOpen, setIsModalOpen] = useRecoilState(isModalOpenState);
  const [addCardInputData, setAddCardInputData] = useState({
    cardCompany: '',
    cardNumber: '',
  });
  const [inputVal, setInputVal] = useState('');

  const handleModalOpen = () => {
    setIsModalOpen(false);
  };

  const validCheck = (data) => {
    const testData = data.split('');

    if (testData.length > 16) {
      return false;
    }
    for (let i = 0; i < testData.length; i += 1) {
      if (Number.isNaN(Number(testData[i]))) return false;
    }

    return true;
  };

  const handleAddCardInputData = (e) => {
    const nums = e.target.value;

    setInputVal(nums);

    if (validCheck(nums)) {
      setAddCardInputData({
        ...addCardInputData,
        cardNumber: nums,
      });
    }
  };

  const handleSelectedCardData = (e) => {
    const card = e.target.value;
    setAddCardInputData({
      ...addCardInputData,
      cardCompany: card,
    });
  };

  const test = () => {
    let nums = addCardInputData.cardNumber;
    nums = nums.split('');
    nums.splice(4, 0, '-');
    nums.splice(9, 0, '-');
    nums.splice(14, 0, '-');
    return nums.join('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    const data = {
      cardCompany: addCardInputData.cardCompany,
      cardNumber: test(),
    };
    const headers = {
      headers: {
        Authorization: JSON.parse(token),
      },
    };
    axios
      .post('http://13.209.26.150:9000/users/payment', data, headers)
      .then((res) => {
        console.log(res);
        setIsSubmit(!isSubmit);
      })
      .catch((err) => console.log(err));

    setAddCardInputData({
      cardCompany: '',
      cardNumber: '',
    });
    setInputVal('');
    setIsModalOpen(false);
  };

  return (
    <div
      className="myssgpay_modal_addcard"
      role="dialog"
      tabIndex="-1"
      aria-hidden="false"
      id="myssgpay_modal_addcard"
      style={{ display: isModalOpen ? 'block' : 'none' }}
    >
      <button
        type="button"
        className="pay_modal_close_btn"
        onClick={handleModalOpen}
      >
        <span />
      </button>

      <form
        className="codr_modal_wrap codr_modal_focus"
        role="document"
        // tabIndex="0"
        style={{ userSelect: 'auto' }}
        onSubmit={handleSubmit}
      >
        <div className="codr_modal_ctn" style={{ userSelect: 'auto' }}>
          <div className="codr_modal_head" style={{ userSelect: 'auto' }}>
            <h2 className="codr_modal_tit" style={{ userSelect: 'auto' }}>
              카드 등록
            </h2>
          </div>

          <div className="codr_modal_cont" style={{ userSelect: 'auto' }}>
            <ul
              className="codr_info_lst ty_noindent ty_space_btm"
              style={{ userSelect: 'auto' }}
            >
              <li style={{ userSelect: 'auto' }}>
                <span className="codr_tx_gray" style={{ userSelect: 'auto' }}>
                  카드를 선택해주세요.
                </span>
              </li>
            </ul>

            <ul
              className="codr_pay_cardlst"
              style={{ userSelect: 'auto' }}
              onChange={handleSelectedCardData}
            >
              <li style={{ userSelect: 'auto' }}>
                <input
                  type="radio"
                  name="cardCompany"
                  id="woori_card"
                  className="blind"
                  value="우리카드"
                  style={{ userSelect: 'auto' }}
                />
                <label htmlFor="woori_card" style={{ userSelect: 'auto' }}>
                  우리카드
                </label>
              </li>

              <li style={{ userSelect: 'auto' }}>
                <input
                  type="radio"
                  name="cardCompany"
                  id="hyundai_card"
                  className="blind"
                  value="현대카드"
                  style={{ userSelect: 'auto' }}
                />
                <label htmlFor="hyundai_card" style={{ userSelect: 'auto' }}>
                  현대카드
                </label>
              </li>

              <li style={{ userSelect: 'auto' }}>
                <input
                  type="radio"
                  name="cardCompany"
                  id="kb_card"
                  className="blind"
                  value="국민카드"
                  style={{ userSelect: 'auto' }}
                />
                <label htmlFor="kb_card" style={{ userSelect: 'auto' }}>
                  국민카드
                </label>
              </li>

              <li style={{ userSelect: 'auto' }}>
                <input
                  type="radio"
                  name="cardCompany"
                  id="samsung_card"
                  className="blind"
                  value="삼성카드"
                  style={{ userSelect: 'auto' }}
                />
                <label htmlFor="samsung_card" style={{ userSelect: 'auto' }}>
                  삼성카드
                </label>
              </li>

              <li style={{ userSelect: 'auto' }}>
                <input
                  type="radio"
                  name="cardCompany"
                  id="shinhan_card"
                  className="blind"
                  value="신한카드"
                  style={{ userSelect: 'auto' }}
                />
                <label htmlFor="shinhan_card" style={{ userSelect: 'auto' }}>
                  신한카드
                </label>
              </li>
            </ul>

            <div className="add_card_num_input_box">
              <span className="codr_tx_gray" style={{ userSelect: 'auto' }}>
                카드번호를 입력해주세요.
              </span>
              <div className="add_card_num_inputs">
                <input
                  className="add_card_num_input"
                  type="text"
                  maxLength={16}
                  name="input1"
                  onChange={handleAddCardInputData}
                  value={inputVal}
                />
              </div>
            </div>

            <div className="codr_btnarea" style={{ userSelect: 'auto' }}>
              <ul className="ty_inbtn" style={{ userSelect: 'auto' }}>
                <li
                  role="presentation"
                  style={{ userSelect: 'auto' }}
                  onClick={handleModalOpen}
                >
                  <span
                    className="codr_btn codr_btn_blkline"
                    style={{ userSelect: 'auto' }}
                  >
                    취소
                  </span>
                </li>
                <button type="submit" style={{ userSelect: 'auto' }}>
                  <span
                    className="codr_btn codr_btn_blkline"
                    style={{ userSelect: 'auto' }}
                  >
                    확인
                  </span>
                </button>
              </ul>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PaymentMeansAddCardModal;
