/* eslint-disable react/no-array-index-key */
import React from 'react';

function OrderPaymentInfo(props) {
  const {
    clickPaymentBtn,
    handleClickPayment,
    handleCardOption,
    userPaymentData,
  } = props;
  return (
    <article
      className="mnodr_article fullOrdArea"
      id="paymtMthdArticle"
      style={{ display: 'block' }}
    >
      <div className="mnodr_article_head">
        <div className="mnodr_article_headlt">
          <h2 className="mnodr_tx_tit" style={{ fontWeight: 'bold' }}>
            결제방법
          </h2>
          <span className="crdDcccc" />
        </div>
      </div>
      <div className="mnodr_article_cont ty_pull" style={{ marginTop: '20px' }}>
        <div className="mnodr_ssgpay_acdo mnodr_ssgpay_acdotoggle on otherPaymtMeansArea">
          <div
            className="mnodr_ssgpay_acdocont"
            aria-labelledby="_mnodrpay_etc_toggle"
            style={{ display: 'block' }}
          >
            <div className="mnodr_pay_bx">
              <ul className="modr_pay_lst" role="tablist">
                <li>
                  <button
                    type="button"
                    name="credit"
                    className={`mnodr_pay_tab payTracking${
                      clickPaymentBtn ? ' on' : ''
                    }`}
                    onClick={handleClickPayment}
                  >
                    신용카드
                  </button>
                </li>
              </ul>
              {clickPaymentBtn && (
                <div
                  className="mnodr_panel_sec paymtMeansArea creditCrdPaymtMeansArea"
                  style={{ display: 'block' }}
                >
                  <div className="mnodr_form_cont">
                    <span className="mnodr_inp_sel ty_black">
                      <select
                        id="creditCrdCdSelect"
                        title="카드를 선택하세요."
                        onChange={handleCardOption}
                      >
                        <option value="">카드를 선택하세요.</option>
                        {userPaymentData &&
                          userPaymentData.map((data, i) => (
                            <option key={`data-${i}`}>
                              {data.cardCompany} / {data.cardNumber}
                            </option>
                          ))}
                      </select>
                    </span>
                  </div>
                  <div className="mnodr_form_cont">
                    <span className="mnodr_inp_sel ty_black">
                      <select
                        id="creditCrdInstallmentSelect"
                        title="카드 할부를 선택하세요."
                      >
                        <option value="">일시불</option>
                        <option value="2">2개월 무이자</option>
                        <option value="3">3개월 무이자</option>
                        <option value="4">4개월 무이자</option>
                        <option value="5">5개월 무이자</option>
                        <option value="6">6개월 무이자</option>
                        <option value="7">7개월 무이자</option>
                      </select>
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default OrderPaymentInfo;
