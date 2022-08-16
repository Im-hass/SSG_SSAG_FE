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
                  data-fncco-cd="76"
                  style={{ userSelect: 'auto' }}
                />
                <label
                  htmlFor="_codrPayModalCard1"
                  style={{ userSelect: 'auto' }}
                >
                  SSG.COM카드 EDITION2
                </label>
              </li>

              <li style={{ userSelect: 'auto' }}>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard2"
                  className="blind"
                  data-fncco-cd="74"
                  style={{ userSelect: 'auto' }}
                />
                <label
                  htmlFor="_codrPayModalCard2"
                  style={{ userSelect: 'auto' }}
                >
                  SSG.COM카드
                </label>
              </li>

              <li style={{ userSelect: 'auto' }}>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard3"
                  className="blind"
                  data-fncco-cd="66"
                  style={{ userSelect: 'auto' }}
                />
                <label
                  htmlFor="_codrPayModalCard3"
                  style={{ userSelect: 'auto' }}
                >
                  이마트e카드(현대카드)
                </label>
              </li>

              <li style={{ userSelect: 'auto' }}>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard4"
                  className="blind"
                  data-fncco-cd="08"
                  style={{ userSelect: 'auto' }}
                />
                <label
                  htmlFor="_codrPayModalCard4"
                  style={{ userSelect: 'auto' }}
                >
                  현대카드
                </label>
              </li>

              <li style={{ userSelect: 'auto' }}>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard5"
                  className="blind"
                  data-fncco-cd="64"
                  style={{ userSelect: 'auto' }}
                />
                <label
                  htmlFor="_codrPayModalCard5"
                  style={{ userSelect: 'auto' }}
                >
                  이마트KB국민카드
                </label>
              </li>

              <li style={{ userSelect: 'auto' }}>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard6"
                  className="blind"
                  data-fncco-cd="02"
                  style={{ userSelect: 'auto' }}
                />
                <label
                  htmlFor="_codrPayModalCard6"
                  style={{ userSelect: 'auto' }}
                >
                  KB국민카드
                </label>
              </li>

              <li style={{ userSelect: 'auto' }}>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard7"
                  className="blind"
                  data-fncco-cd="62"
                  style={{ userSelect: 'auto' }}
                />
                <label
                  htmlFor="_codrPayModalCard7"
                  style={{ userSelect: 'auto' }}
                >
                  이마트삼성카드
                </label>
              </li>

              <li style={{ userSelect: 'auto' }}>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard8"
                  className="blind"
                  data-fncco-cd="75"
                  style={{ userSelect: 'auto' }}
                />
                <label
                  htmlFor="_codrPayModalCard8"
                  style={{ userSelect: 'auto' }}
                >
                  SSG.COM 삼성카드
                </label>
              </li>

              <li style={{ userSelect: 'auto' }}>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard9"
                  className="blind"
                  data-fncco-cd="61"
                  style={{ userSelect: 'auto' }}
                />
                <label
                  htmlFor="_codrPayModalCard9"
                  style={{ userSelect: 'auto' }}
                >
                  신세계삼성카드
                </label>
              </li>

              <li style={{ userSelect: 'auto' }}>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard10"
                  className="blind"
                  data-fncco-cd="67"
                  style={{ userSelect: 'auto' }}
                />
                <label
                  htmlFor="_codrPayModalCard10"
                  style={{ userSelect: 'auto' }}
                >
                  트레이더스삼성카드
                </label>
              </li>

              <li style={{ userSelect: 'auto' }}>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard11"
                  className="blind"
                  data-fncco-cd="06"
                  style={{ userSelect: 'auto' }}
                />
                <label
                  htmlFor="_codrPayModalCard11"
                  style={{ userSelect: 'auto' }}
                >
                  삼성카드
                </label>
              </li>

              <li style={{ userSelect: 'auto' }}>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard12"
                  className="blind"
                  data-fncco-cd="63"
                  style={{ userSelect: 'auto' }}
                />
                <label
                  htmlFor="_codrPayModalCard12"
                  style={{ userSelect: 'auto' }}
                >
                  이마트신한카드
                </label>
              </li>

              <li style={{ userSelect: 'auto' }}>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard13"
                  className="blind"
                  data-fncco-cd="70"
                  style={{ userSelect: 'auto' }}
                />
                <label
                  htmlFor="_codrPayModalCard13"
                  style={{ userSelect: 'auto' }}
                >
                  신세계신한카드
                </label>
              </li>

              <li style={{ userSelect: 'auto' }}>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard14"
                  className="blind"
                  data-fncco-cd="07"
                  style={{ userSelect: 'auto' }}
                />
                <label
                  htmlFor="_codrPayModalCard14"
                  style={{ userSelect: 'auto' }}
                >
                  신한카드
                </label>
              </li>

              <li style={{ userSelect: 'auto' }}>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard15"
                  className="blind"
                  data-fncco-cd="01"
                  style={{ userSelect: 'auto' }}
                />
                <label
                  htmlFor="_codrPayModalCard15"
                  style={{ userSelect: 'auto' }}
                >
                  비씨카드
                </label>
              </li>

              <li style={{ userSelect: 'auto' }}>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard16"
                  className="blind"
                  data-fncco-cd="73"
                  style={{ userSelect: 'auto' }}
                />
                <label
                  htmlFor="_codrPayModalCard16"
                  style={{ userSelect: 'auto' }}
                >
                  신세계하나체크카드
                </label>
              </li>

              <li style={{ userSelect: 'auto' }}>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard17"
                  className="blind"
                  data-fncco-cd="03"
                  style={{ userSelect: 'auto' }}
                />
                <label
                  htmlFor="_codrPayModalCard17"
                  style={{ userSelect: 'auto' }}
                >
                  하나카드
                </label>
              </li>

              <li style={{ userSelect: 'auto' }}>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard18"
                  className="blind"
                  data-fncco-cd="38"
                  style={{ userSelect: 'auto' }}
                />
                <label
                  htmlFor="_codrPayModalCard18"
                  style={{ userSelect: 'auto' }}
                >
                  롯데카드
                </label>
              </li>

              <li style={{ userSelect: 'auto' }}>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard19"
                  className="blind"
                  data-fncco-cd="11"
                  style={{ userSelect: 'auto' }}
                />
                <label
                  htmlFor="_codrPayModalCard19"
                  style={{ userSelect: 'auto' }}
                >
                  NH카드
                </label>
              </li>

              <li style={{ userSelect: 'auto' }}>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard20"
                  className="blind"
                  data-fncco-cd="72"
                  style={{ userSelect: 'auto' }}
                />
                <label
                  htmlFor="_codrPayModalCard20"
                  style={{ userSelect: 'auto' }}
                >
                  카카오뱅크카드
                </label>
              </li>

              <li style={{ userSelect: 'auto' }}>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard21"
                  className="blind"
                  data-fncco-cd="89"
                  style={{ userSelect: 'auto' }}
                />
                <label
                  htmlFor="_codrPayModalCard21"
                  style={{ userSelect: 'auto' }}
                >
                  신세계씨티카드
                </label>
              </li>

              <li style={{ userSelect: 'auto' }}>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard22"
                  className="blind"
                  data-fncco-cd="16"
                  style={{ userSelect: 'auto' }}
                />
                <label
                  htmlFor="_codrPayModalCard22"
                  style={{ userSelect: 'auto' }}
                >
                  씨티카드
                </label>
              </li>

              <li style={{ userSelect: 'auto' }}>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard23"
                  className="blind"
                  data-fncco-cd="65"
                  style={{ userSelect: 'auto' }}
                />
                <label
                  htmlFor="_codrPayModalCard23"
                  style={{ userSelect: 'auto' }}
                >
                  이마트우리체크카드
                </label>
              </li>

              <li style={{ userSelect: 'auto' }}>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard24"
                  className="blind"
                  data-fncco-cd="15"
                  style={{ userSelect: 'auto' }}
                />
                <label
                  htmlFor="_codrPayModalCard24"
                  style={{ userSelect: 'auto' }}
                >
                  우리카드
                </label>
              </li>

              <li style={{ userSelect: 'auto' }}>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard25"
                  className="blind"
                  data-fncco-cd="18"
                  style={{ userSelect: 'auto' }}
                />
                <label
                  htmlFor="_codrPayModalCard25"
                  style={{ userSelect: 'auto' }}
                >
                  IBK기업은행카드
                </label>
              </li>

              <li style={{ userSelect: 'auto' }}>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard26"
                  className="blind"
                  data-fncco-cd="69"
                  style={{ userSelect: 'auto' }}
                />
                <label
                  htmlFor="_codrPayModalCard26"
                  style={{ userSelect: 'auto' }}
                >
                  이마트SC카드
                </label>
              </li>

              <li style={{ userSelect: 'auto' }}>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard27"
                  className="blind"
                  data-fncco-cd="68"
                  style={{ userSelect: 'auto' }}
                />
                <label
                  htmlFor="_codrPayModalCard27"
                  style={{ userSelect: 'auto' }}
                >
                  신세계SC카드
                </label>
              </li>

              <li style={{ userSelect: 'auto' }}>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard28"
                  className="blind"
                  data-fncco-cd="17"
                  style={{ userSelect: 'auto' }}
                />
                <label
                  htmlFor="_codrPayModalCard28"
                  style={{ userSelect: 'auto' }}
                >
                  SC은행카드
                </label>
              </li>

              <li style={{ userSelect: 'auto' }}>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard29"
                  className="blind"
                  data-fncco-cd="71"
                  style={{ userSelect: 'auto' }}
                />
                <label
                  htmlFor="_codrPayModalCard29"
                  style={{ userSelect: 'auto' }}
                >
                  SSGPAY카드
                </label>
              </li>

              <li style={{ userSelect: 'auto' }}>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard30"
                  className="blind"
                  data-fncco-cd="22"
                  style={{ userSelect: 'auto' }}
                />
                <label
                  htmlFor="_codrPayModalCard30"
                  style={{ userSelect: 'auto' }}
                >
                  광주카드
                </label>
              </li>

              <li style={{ userSelect: 'auto' }}>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard31"
                  className="blind"
                  data-fncco-cd="13"
                  style={{ userSelect: 'auto' }}
                />
                <label
                  htmlFor="_codrPayModalCard31"
                  style={{ userSelect: 'auto' }}
                >
                  수협카드
                </label>
              </li>

              <li style={{ userSelect: 'auto' }}>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard32"
                  className="blind"
                  data-fncco-cd="21"
                  style={{ userSelect: 'auto' }}
                />
                <label
                  htmlFor="_codrPayModalCard32"
                  style={{ userSelect: 'auto' }}
                >
                  제주카드
                </label>
              </li>

              <li style={{ userSelect: 'auto' }}>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard33"
                  className="blind"
                  data-fncco-cd="23"
                  style={{ userSelect: 'auto' }}
                />
                <label
                  htmlFor="_codrPayModalCard33"
                  style={{ userSelect: 'auto' }}
                >
                  전북카드
                </label>
              </li>
            </ul>
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
