import React, { useState } from 'react';
import './PaymentMeansAddCardModal.scss';
import { useRecoilState } from 'recoil';
import { isModalOpenState } from '../../../recoil/states';

function PaymentMeansAddCardModal() {
  const [isModalOpen, setIsModalOpen] = useRecoilState(isModalOpenState);
  const [addCardInputData, setAddCardInputData] = useState({
    cardCompany: '',
    cardNumber: '',
    input1: '',
    input2: '',
    input3: '',
    input4: '',
  });
  const [inputVal, setInputVal] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
  });
  const { input1, input2, input3, input4 } = inputVal;
  const [isInputValValid, setIsInputValValid] = useState(
    new Array(4).fill(false),
  );
  const [cardNums, setCardNums] = useState(new Array(4).fill(''));

  const handleModalOpen = () => {
    setIsModalOpen(false);
  };

  const inputValCheck = (data) => {
    const testData = data.split('');

    if (testData.length < 4) {
      return false;
    }
    for (let i = 0; i < testData.length; i += 1) {
      if (Number.isNaN(Number(testData[i]))) return false;
    }

    return true;
  };

  const handleSelectedCardData = (e) => {
    const selectedCard = e.target.value;

    setAddCardInputData({
      ...addCardInputData,
      [e.target.name]: selectedCard,
    });
  };

  const handleAddCardInputData = (e) => {
    const nums = e.target.value;
    const idx = +e.target.getAttribute('index');
    const validArr = [...isInputValValid];
    const cardNumArr = [...cardNums];

    setInputVal({
      ...inputVal,
      [e.target.name]: nums,
    });

    if (inputValCheck(nums)) {
      validArr[idx] = true;
      cardNumArr[idx] = nums;

      // setAddCardInputData((prevData) => ({
      //   ...prevData,
      //   [e.target.name]: nums,
      // }));
      setCardNums(cardNumArr);
      setIsInputValValid(validArr);
    } else {
      validArr[idx] = false;
      setIsInputValValid(validArr);
    }
  };

  const joinedCardNumber = () => {
    const joinedCardNums = cardNums.join('-');
    setAddCardInputData({
      ...addCardInputData,
      cardNumber: joinedCardNums,
    });
    // return joinedCardNums;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isInputValValid.includes(false)) return;
    joinedCardNumber();
    console.log('final', isInputValValid);
    console.log('final', addCardInputData);
    setAddCardInputData({
      cardCompany: '',
      cardNumber: '',
      input1: '',
      input2: '',
      input3: '',
      input4: '',
    });
    setInputVal({
      input1: '',
      input2: '',
      input3: '',
      input4: '',
    });
    // setIsModalOpen(false);
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

            <ul className="codr_pay_cardlst" style={{ userSelect: 'auto' }}>
              <li style={{ userSelect: 'auto' }}>
                <input
                  type="radio"
                  name="cardCompany"
                  id="woori_card"
                  className="blind"
                  value="우리카드"
                  style={{ userSelect: 'auto' }}
                  onChange={handleSelectedCardData}
                  index={0}
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
                  onChange={handleSelectedCardData}
                  index={1}
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
                  onChange={handleSelectedCardData}
                  index={2}
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
                  onChange={handleSelectedCardData}
                  index={3}
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
                  onChange={handleSelectedCardData}
                  index={4}
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
                {/* input 4개 값 각각 쏴서 백 넘기기 전에 '-'넣고 join 
                각 입력값 길이 4되면 옆으로 넘기기
                */}
                <input
                  className="add_card_num_input"
                  type="text"
                  maxLength={4}
                  name="input1"
                  onChange={handleAddCardInputData}
                  value={input1}
                  index={0}
                />
                <input
                  className="add_card_num_input"
                  type="password"
                  maxLength={4}
                  name="input2"
                  onChange={handleAddCardInputData}
                  value={input2}
                  index={1}
                />
                <input
                  className="add_card_num_input"
                  type="password"
                  maxLength={4}
                  name="input3"
                  onChange={handleAddCardInputData}
                  value={input3}
                  index={2}
                />
                <input
                  className="add_card_num_input"
                  type="text"
                  maxLength={4}
                  name="input4"
                  onChange={handleAddCardInputData}
                  value={input4}
                  index={3}
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
