import React from 'react';
import './PaymentMeansAddCardModal.scss';

function PaymentMeansAddCardModal() {
  return (
    <div
      className="codr_modal myssgpay_modal_addcard"
      role="dialog"
      tabIndex="-1"
      aria-hidden="false"
      id="myssgpay_modal_addcard"
    >
      <div
        className="codr_modal_wrap codr_modal_focus"
        role="document"
        // tabIndex="0"
      >
        <div className="codr_modal_ctn">
          <div className="codr_modal_head">
            <h2 className="codr_modal_tit">카드 등록</h2>
          </div>
          <div className="codr_modal_cont">
            <ul className="codr_info_lst ty_noindent ty_space_btm">
              <li>
                <span className="codr_tx_gray">카드를 선택해주세요.</span>
              </li>
            </ul>
            <ul className="codr_pay_cardlst">
              <li>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard1"
                  className="blind"
                  data-fncco-cd="76"
                />
                <label htmlFor="_codrPayModalCard1">SSG.COM카드 EDITION2</label>
              </li>

              <li>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard2"
                  className="blind"
                  data-fncco-cd="74"
                />
                <label htmlFor="_codrPayModalCard2">SSG.COM카드</label>
              </li>

              <li>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard3"
                  className="blind"
                  data-fncco-cd="66"
                />
                <label htmlFor="_codrPayModalCard3">
                  이마트e카드(현대카드)
                </label>
              </li>

              <li>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard4"
                  className="blind"
                  data-fncco-cd="08"
                />
                <label htmlFor="_codrPayModalCard4">현대카드</label>
              </li>

              <li>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard5"
                  className="blind"
                  data-fncco-cd="64"
                />
                <label htmlFor="_codrPayModalCard5">이마트KB국민카드</label>
              </li>

              <li>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard6"
                  className="blind"
                  data-fncco-cd="02"
                />
                <label htmlFor="_codrPayModalCard6">KB국민카드</label>
              </li>

              <li>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard7"
                  className="blind"
                  data-fncco-cd="62"
                />
                <label htmlFor="_codrPayModalCard7">이마트삼성카드</label>
              </li>

              <li>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard8"
                  className="blind"
                  data-fncco-cd="75"
                />
                <label htmlFor="_codrPayModalCard8">SSG.COM 삼성카드</label>
              </li>

              <li>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard9"
                  className="blind"
                  data-fncco-cd="61"
                />
                <label htmlFor="_codrPayModalCard9">신세계삼성카드</label>
              </li>

              <li>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard10"
                  className="blind"
                  data-fncco-cd="67"
                />
                <label htmlFor="_codrPayModalCard10">트레이더스삼성카드</label>
              </li>

              <li>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard11"
                  className="blind"
                  data-fncco-cd="06"
                />
                <label htmlFor="_codrPayModalCard11">삼성카드</label>
              </li>

              <li>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard12"
                  className="blind"
                  data-fncco-cd="63"
                />
                <label htmlFor="_codrPayModalCard12">이마트신한카드</label>
              </li>

              <li>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard13"
                  className="blind"
                  data-fncco-cd="70"
                />
                <label htmlFor="_codrPayModalCard13">신세계신한카드</label>
              </li>

              <li>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard14"
                  className="blind"
                  data-fncco-cd="07"
                />
                <label htmlFor="_codrPayModalCard14">신한카드</label>
              </li>

              <li>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard15"
                  className="blind"
                  data-fncco-cd="01"
                />
                <label htmlFor="_codrPayModalCard15">비씨카드</label>
              </li>

              <li>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard16"
                  className="blind"
                  data-fncco-cd="73"
                />
                <label htmlFor="_codrPayModalCard16">신세계하나체크카드</label>
              </li>

              <li>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard17"
                  className="blind"
                  data-fncco-cd="03"
                />
                <label htmlFor="_codrPayModalCard17">하나카드</label>
              </li>

              <li>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard18"
                  className="blind"
                  data-fncco-cd="38"
                />
                <label htmlFor="_codrPayModalCard18">롯데카드</label>
              </li>

              <li>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard19"
                  className="blind"
                  data-fncco-cd="11"
                />
                <label htmlFor="_codrPayModalCard19">NH카드</label>
              </li>

              <li>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard20"
                  className="blind"
                  data-fncco-cd="72"
                />
                <label htmlFor="_codrPayModalCard20">카카오뱅크카드</label>
              </li>

              <li>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard21"
                  className="blind"
                  data-fncco-cd="89"
                />
                <label htmlFor="_codrPayModalCard21">신세계씨티카드</label>
              </li>

              <li>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard22"
                  className="blind"
                  data-fncco-cd="16"
                />
                <label htmlFor="_codrPayModalCard22">씨티카드</label>
              </li>

              <li>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard23"
                  className="blind"
                  data-fncco-cd="65"
                />
                <label htmlFor="_codrPayModalCard23">이마트우리체크카드</label>
              </li>

              <li>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard24"
                  className="blind"
                  data-fncco-cd="15"
                />
                <label htmlFor="_codrPayModalCard24">우리카드</label>
              </li>

              <li>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard25"
                  className="blind"
                  data-fncco-cd="18"
                />
                <label htmlFor="_codrPayModalCard25">IBK기업은행카드</label>
              </li>

              <li>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard26"
                  className="blind"
                  data-fncco-cd="69"
                />
                <label htmlFor="_codrPayModalCard26">이마트SC카드</label>
              </li>

              <li>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard27"
                  className="blind"
                  data-fncco-cd="68"
                />
                <label htmlFor="_codrPayModalCard27">신세계SC카드</label>
              </li>

              <li>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard28"
                  className="blind"
                  data-fncco-cd="17"
                />
                <label htmlFor="_codrPayModalCard28">SC은행카드</label>
              </li>

              <li>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard29"
                  className="blind"
                  data-fncco-cd="71"
                />
                <label htmlFor="_codrPayModalCard29">SSGPAY카드</label>
              </li>

              <li>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard30"
                  className="blind"
                  data-fncco-cd="22"
                />
                <label htmlFor="_codrPayModalCard30">광주카드</label>
              </li>

              <li>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard31"
                  className="blind"
                  data-fncco-cd="13"
                />
                <label htmlFor="_codrPayModalCard31">수협카드</label>
              </li>

              <li>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard32"
                  className="blind"
                  data-fncco-cd="21"
                />
                <label htmlFor="_codrPayModalCard32">제주카드</label>
              </li>

              <li>
                <input
                  type="radio"
                  name="_codrPayModalCard"
                  id="_codrPayModalCard33"
                  className="blind"
                  data-fncco-cd="23"
                />
                <label htmlFor="_codrPayModalCard33">전북카드</label>
              </li>
            </ul>
            <div className="codr_btnarea">
              <ul className="ty_inbtn">
                <li>
                  <a
                    href="/"
                    className="codr_btn codr_btn_blkline modal-close-btn"
                  >
                    <span>취소</span>
                  </a>
                </li>
                <li>
                  <a href="/" className="codr_btn codr_btn_blkline" id="regCrd">
                    <span>확인</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <button type="button" className="codr_modal_close modal-close-btn">
            <span className="blind">닫기</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentMeansAddCardModal;
