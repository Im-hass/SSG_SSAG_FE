import React from 'react';
import './PaymentMeansAddCardModal.scss';
import { useRecoilState } from 'recoil';
import { isModalOpenState } from '../../../recoil/states';

function PaymentMeansAddCardModal() {
  const [isModalOpen, setIsModalOpen] = useRecoilState(isModalOpenState);

  const handleModalOpen = () => {
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

      <div
        className="codr_modal_wrap codr_modal_focus"
        role="document"
        // tabIndex="0"
        style={{ userSelect: 'auto' }}
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
                  name="_codrPayModalCard"
                  id="_codrPayModalCard1"
                  className="blind"
                  data-fncco-cd="우리카드"
                  style={{ userSelect: 'auto' }}
                />
                <label
                  htmlFor="_codrPayModalCard1"
                  style={{ userSelect: 'auto' }}
                >
                  우리카드
                </label>
              </li>

              <li style={{ userSelect: 'auto' }}>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard1"
                  className="blind"
                  data-fncco-cd="현대카드"
                  style={{ userSelect: 'auto' }}
                />
                <label
                  htmlFor="_codrPayModalCard1"
                  style={{ userSelect: 'auto' }}
                >
                  현대카드
                </label>
              </li>

              <li style={{ userSelect: 'auto' }}>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard1"
                  className="blind"
                  data-fncco-cd="76"
                  style={{ userSelect: 'auto' }}
                />
                <label
                  htmlFor="_codrPayModalCard1"
                  style={{ userSelect: 'auto' }}
                >
                  국민카드
                </label>
              </li>

              <li style={{ userSelect: 'auto' }}>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard1"
                  className="blind"
                  data-fncco-cd="76"
                  style={{ userSelect: 'auto' }}
                />
                <label
                  htmlFor="_codrPayModalCard1"
                  style={{ userSelect: 'auto' }}
                >
                  삼성카드
                </label>
              </li>

              <li style={{ userSelect: 'auto' }}>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard1"
                  className="blind"
                  data-fncco-cd="76"
                  style={{ userSelect: 'auto' }}
                />
                <label
                  htmlFor="_codrPayModalCard1"
                  style={{ userSelect: 'auto' }}
                >
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
                <input type="text" maxLength={4} />
                <input type="password" maxLength={4} />
                <input type="password" maxLength={4} />
                <input type="text" maxLength={4} />
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
                <li style={{ userSelect: 'auto' }}>
                  <span
                    className="codr_btn codr_btn_blkline"
                    style={{ userSelect: 'auto' }}
                  >
                    확인
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentMeansAddCardModal;
